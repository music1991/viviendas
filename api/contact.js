import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  try {
    const { name, email, message, company, projectType, budget, timeline } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'Campos requeridos' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.TO_EMAIL,
      subject: `Portafolio | Nuevo mensaje: ${name}`,
      reply_to: email,
      html: `
        <div style="font-family:system-ui;line-height:1.5">
          <h2>Nuevo mensaje desde el Portafolio</h2>
          <p><b>Nombre:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          ${company ? `<p><b>Empresa:</b> ${company}</p>` : ''}
          ${projectType ? `<p><b>Tipo de proyecto:</b> ${projectType}</p>` : ''}
          ${budget ? `<p><b>Presupuesto:</b> ${budget}</p>` : ''}
          ${timeline ? `<p><b>Timeline:</b> ${timeline}</p>` : ''}
          <p><b>Mensaje:</b><br/>${String(message).replace(/\n/g, '<br/>')}</p>
        </div>
      `,
    });

    if (error) {
      console.error('RESEND ERROR =>', JSON.stringify(error, null, 2));
      return res.status(500).json({ ok: false, error: error.message || 'Resend error' });
    }

    return res.json({ ok: true, id: data?.id ?? null });
  } catch (e) {
    console.error('API ERROR =>', e);
    return res.status(500).json({ ok: false, error: e?.message || 'Server error' });
  }
}
