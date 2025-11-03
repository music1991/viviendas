import { Resend } from "resend";

const FROM = process.env.EMAIL_FROM;
const API_KEY = process.env.RESEND_API_KEY;

if (!API_KEY) console.warn("[email] RESEND_API_KEY is not set");
if (!FROM) console.warn("[email] EMAIL_FROM is not set");

function escapeHtml(input = "", maxLen = 10000) {
  const s = String(input).slice(0, maxLen);
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getResend() {
  if (!API_KEY) throw new Error("Missing RESEND_API_KEY");
  return new Resend(API_KEY);
}

export async function sendEmail(opts: {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}) {
  if (!FROM) throw new Error("Missing EMAIL_FROM");

  const resend = getResend();

  const { data, error } = await resend.emails.send({
    from: FROM,
    to: opts.to,
    subject: opts.subject,
    html: opts.html,
    text: opts.text,
    replyTo: opts.replyTo,
  });

  if (error) {
    console.error("[email] Resend error:", JSON.stringify(error));
    throw new Error("Failed to send email");
  }

  return { id: data?.id ?? null };
}

export { escapeHtml };
