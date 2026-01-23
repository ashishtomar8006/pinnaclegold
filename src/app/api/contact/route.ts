import nodemailer from "nodemailer";

export const runtime = "nodejs"; // important for nodemailer in Next.js

function esc(v: unknown) {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function cleanText(v: unknown, max = 4000) {
  const s = String(v ?? "").trim();
  return s.length > max ? s.slice(0, max) : s;
}

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT || 465),
  secure: Number(process.env.MAIL_PORT || 465) === 465, // 465=true, 587=false
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
  // Avoid disabling TLS verification in production if possible
  // tls: { rejectUnauthorized: false },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = cleanText(body?.name || body?.full_name, 120);
    const emailRaw = cleanText(body?.email, 160);
    const phone = cleanText(body?.phone || body?.mobile, 40);
    const messageRaw = cleanText(body?.message, 4000);
    const source = cleanText(body?.source || "Website Contact Form", 80);

    if (!name || !emailRaw || !phone || !messageRaw) {
      return Response.json(
        { ok: false, message: "Missing required fields" },
        { status: 400 }
      );
    }
    if (!isEmail(emailRaw)) {
      return Response.json(
        { ok: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const subject = `New Contact Request — ${name}`;

    const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(subject)}</title>
</head>
<body style="margin:0;background:#f6f8fc;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
  <div style="max-width:720px;margin:0 auto;padding:28px 14px;">
    <div style="background:#ffffff;border:1px solid #e6eaf2;border-radius:18px;overflow:hidden;box-shadow:0 6px 24px rgba(15,23,42,.06);">
      <div style="padding:22px 22px;background:#111827;color:#fff;">
        <div style="font-size:18px;font-weight:700;letter-spacing:.2px;">New Contact Request</div>
        <div style="margin-top:6px;font-size:13px;opacity:.9;">A new message was submitted via your website contact form.</div>
      </div>

      <div style="padding:22px;">
        <div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:18px;">
          <div style="padding:8px 12px;border-radius:999px;background:#eef2ff;color:#1e3a8a;font-size:12px;font-weight:700;">
            Source: ${esc(source)}
          </div>
          <div style="padding:8px 12px;border-radius:999px;background:#f1f5f9;color:#0f172a;font-size:12px;font-weight:700;">
            Timestamp (UTC): ${esc(timestamp)}
          </div>
        </div>

        <div style="font-size:14px;font-weight:700;margin-bottom:10px;">Contact Details</div>

        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0 10px;">
          <tr>
            <td style="width:170px;font-size:12px;color:#475569;">Name</td>
            <td style="font-size:13px;font-weight:700;">${esc(name)}</td>
          </tr>
          <tr>
            <td style="font-size:12px;color:#475569;">Email</td>
            <td style="font-size:13px;">
              <a href="mailto:${esc(emailRaw)}" style="color:#2563eb;text-decoration:none;">${esc(emailRaw)}</a>
            </td>
          </tr>
          <tr>
            <td style="font-size:12px;color:#475569;">Phone</td>
            <td style="font-size:13px;">${esc(phone)}</td>
          </tr>
        </table>

        <hr style="border:none;border-top:1px solid #e6eaf2;margin:18px 0;">

        <div style="font-size:14px;font-weight:700;margin-bottom:10px;">Message</div>
        <div style="background:#f8fafc;border:1px solid #e6eaf2;border-radius:14px;padding:14px;font-size:13px;line-height:1.6;color:#0f172a;white-space:pre-wrap;">${esc(messageRaw)}</div>

        <div style="margin-top:18px;">
          <a href="mailto:${esc(emailRaw)}" style="display:inline-block;background:#2563eb;color:#fff;text-decoration:none;padding:12px 16px;border-radius:12px;font-size:13px;font-weight:700;">
            Reply to ${esc(name)}
          </a>
        </div>
      </div>

      <div style="padding:16px 22px;background:#f8fafc;border-top:1px solid #e6eaf2;">
        <div style="font-size:12px;color:#64748b;">This email was sent automatically from your website contact form.</div>
      </div>
    </div>
  </div>
</body>
</html>`;

    const textFallback =
      `New Contact Request\n\n` +
      `Source: ${source}\n` +
      `Timestamp (UTC): ${timestamp}\n\n` +
      `Name: ${name}\n` +
      `Email: ${emailRaw}\n` +
      `Phone: ${phone}\n\n` +
      `Message:\n${messageRaw}\n`;

     await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
      // to: emailRaw,
      to: "sales@thepinnacle.live",
      subject,
      text: textFallback,
    });

    return Response.json({ ok: true });
  } catch (err: any) {
    console.error("❌ /api/contact error:", err);
    return Response.json(
      {
        ok: false,
        message: err?.message || "Email failed",
        code: err?.code,
        command: err?.command,
        response: err?.response,
      },
      { status: 500 }
    );
  }
}
