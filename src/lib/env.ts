import { z } from "zod";

const emailEnvSchema = z.object({
  RESEND_API_KEY: z.string().min(1),
  CONTACT_TO_EMAIL: z.string().email(),
  CONTACT_FROM_EMAIL: z.string().min(1),
});

export type EmailEnv = z.infer<typeof emailEnvSchema>;

export function getEmailEnv(): EmailEnv | null {
  const result = emailEnvSchema.safeParse(process.env);
  return result.success ? result.data : null;
}