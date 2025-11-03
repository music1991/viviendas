const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Resend } = require('resend');

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    hasKey: Boolean(process.env.RESEND_API_KEY),
    from: process.env.EMAIL_FROM || null,
    to: process.env.TO_EMAIL || null,
  });
});

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message, company, projectType, budget, timeline } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'Campos requeridos' });
    }

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.TO_EMAIL,
      subject: `Porfolio | Nuevo mensaje: ${name}`,
      reply_to: email,
      html: `
        <div style="font-family:system-ui;line-height:1.5">
          <h2>Nuevo mensaje desde el Porfolio</h2>
          <p><b>Nombre:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          ${company ? `<p><b>Empresa:</b> ${company}</p>` : ''}
          ${projectType ? `<p><b>Tipo de proyecto:</b> ${projectType}</p>` : ''}
          ${budget ? `<p><b>Presupuesto:</b> ${budget}</p>` : ''}
          ${timeline ? `<p><b>Timeline:</b> ${timeline}</p>` : ''}
          <p><b>Mensaje:</b><br/>${String(message).replace(/\n/g,'<br/>')}</p>
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
});

const PORT = process.env.PORT || 8787;
app.listen(PORT, () => console.log(`API escuchando en http://localhost:${PORT}`));
