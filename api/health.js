export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    hasKey: Boolean(process.env.RESEND_API_KEY),
    from: process.env.EMAIL_FROM || null,
    to: process.env.TO_EMAIL || null,
  });
}
