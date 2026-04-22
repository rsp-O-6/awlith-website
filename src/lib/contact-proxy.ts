import { Pool } from "pg";
import { NextResponse } from "next/server";

type ContactRequestBody = {
  name: string;
  email: string;
  company_organization: string;
  service_of_interest: string;
  project_details: string;
};

type ContactInsertResult = {
  message_id: string | number;
  status: string;
  created_at: string;
};

const backendBaseUrl = (
  process.env.AWLITH_API_BASE_URL || "http://127.0.0.1:8000"
).replace(/\/+$/, "");
const databaseUrl = process.env.DATABASE_URL?.trim() || "";

declare global {
  var awlithContactPool: Pool | undefined;
}

function readText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string): boolean {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
}

function shouldUseDatabaseSsl(): boolean {
  const sslMode = process.env.DB_SSLMODE?.trim().toLowerCase();

  if (sslMode === "disable") {
    return false;
  }

  if (sslMode) {
    return true;
  }

  return databaseUrl.includes("supabase.");
}

function getPool(): Pool {
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured.");
  }

  if (!globalThis.awlithContactPool) {
    globalThis.awlithContactPool = new Pool({
      connectionString: databaseUrl,
      max: 5,
      ssl: shouldUseDatabaseSsl() ? { rejectUnauthorized: false } : undefined,
    });
  }

  return globalThis.awlithContactPool;
}

async function submitToDatabase(payload: ContactRequestBody) {
  try {
    const result = await getPool().query<ContactInsertResult>(
      `
        insert into tbl_send_message (
          created_by_user_account_id,
          sender_name,
          sender_email_address,
          company_organization,
          service_of_interest,
          project_details
        )
        values ($1, $2, $3, $4, $5, $6)
        returning
          send_message_id as message_id,
          status_code as status,
          created_at
      `,
      [
        null,
        payload.name,
        payload.email.toLowerCase(),
        payload.company_organization || null,
        payload.service_of_interest,
        payload.project_details,
      ],
    );

    const record = result.rows[0];

    if (!record) {
      return NextResponse.json(
        { detail: "Unable to create message right now." },
        { status: 503 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "SEND_MESSAGE_CREATED",
        data: {
          message_id: record.message_id,
          status: record.status,
          created_at: record.created_at,
        },
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { detail: "The database is currently unreachable." },
      { status: 502 },
    );
  }
}

export async function proxyContactSubmission(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { detail: "Invalid form payload." },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json(
      { detail: "Invalid request body." },
      { status: 400 },
    );
  }

  const payload: ContactRequestBody = {
    name: readText((body as Record<string, unknown>).name),
    email: readText((body as Record<string, unknown>).email),
    company_organization: readText(
      (body as Record<string, unknown>).company_organization,
    ),
    service_of_interest: readText(
      (body as Record<string, unknown>).service_of_interest,
    ),
    project_details: readText(
      (body as Record<string, unknown>).project_details,
    ),
  };

  if (
    !payload.name ||
    !payload.email ||
    !payload.service_of_interest ||
    !payload.project_details
  ) {
    return NextResponse.json(
      { detail: "Please fill in all required fields." },
      { status: 400 },
    );
  }

  if (!isValidEmail(payload.email)) {
    return NextResponse.json(
      { detail: "Invalid email address." },
      { status: 400 },
    );
  }

  if (payload.project_details.length < 10) {
    return NextResponse.json(
      { detail: "Project details must be at least 10 characters." },
      { status: 400 },
    );
  }

  if (!process.env.AWLITH_API_BASE_URL && databaseUrl) {
    return submitToDatabase(payload);
  }

  try {
    const backendResponse = await fetch(`${backendBaseUrl}/send-message/public`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const responseBody = await backendResponse
      .json()
      .catch(() => ({ detail: "Unexpected response from backend." }));

    return NextResponse.json(responseBody, {
      status: backendResponse.status,
    });
  } catch {
    if (databaseUrl) {
      return submitToDatabase(payload);
    }

    return NextResponse.json(
      { detail: "The API is currently unreachable." },
      { status: 502 },
    );
  }
}
