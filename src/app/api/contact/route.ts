import { proxyContactSubmission } from "@/lib/contact-proxy";

export const runtime = "nodejs";

export async function POST(request: Request) {
  return proxyContactSubmission(request);
}
