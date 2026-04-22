import { NextResponse } from "next/server";


type ContactRequestBody = {
  name: string;
  email: string;
  company_organization: string;
  service_of_interest: string;
  project_details: string;
};


const backendBaseUrl = (
  process.env.AWLITH_API_BASE_URL || "http://127.0.0.1:8000"
).replace(/\/+$/, "");


function readText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
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

  try {
    const backendResponse = await fetch(`${backendBaseUrl}/send-message/public`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
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
    return NextResponse.json(
      { detail: "The API is currently unreachable." },
      { status: 502 },
    );
  }
}
