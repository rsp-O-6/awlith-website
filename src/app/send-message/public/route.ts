import { proxyContactSubmission } from "@/lib/contact-proxy";


export async function POST(request: Request) {
  return proxyContactSubmission(request);
}
