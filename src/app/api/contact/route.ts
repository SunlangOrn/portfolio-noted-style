import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";
import { getEmailEnv } from "@/lib/env";
import { contactSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  const env = getEmailEnv();
  if (!env) {
    console.error("Missing email environment variables");
    return NextResponse.json({ error: "Server is not configured" }, { status: 500 });
  }

  try {
    await sendContactEmail(result.data, env);
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}