import { Resend } from "resend";
import type { EmailEnv } from "@/lib/env";
import type { ContactFormValues } from "@/lib/validations/contact";

export async function sendContactEmail(
  values: ContactFormValues,
  env: EmailEnv,
) {
  const resend = new Resend(env.RESEND_API_KEY);
  const safeName = values.name.replace(/[\r\n]+/g, " ");

  const { error } = await resend.emails.send({
    from: env.CONTACT_FROM_EMAIL,
    to: env.CONTACT_TO_EMAIL,
    replyTo: values.email,
    subject: `Portfolio message from ${safeName}`,
    text: `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`,
  });

  if (error) {
    throw new Error(error.message);
  }
}