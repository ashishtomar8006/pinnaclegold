import nodemailer from "nodemailer";

export const runtime = "nodejs"; // required for nodemailer in Next.js

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function clean(v: unknown, max = 200) {
  const s = String(v ?? "").trim();
  return s.length > max ? s.slice(0, max) : s;
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const email = clean(body?.email, 160);

    if (!email || !isEmail(email)) {
      return Response.json({ ok: false, message: "Enter a valid email." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT || 465),
      secure: Number(process.env.MAIL_PORT || 465) === 465, // 465=true, 587=false
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });
    
    const subject = "New Subscriber";
    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif">
        <h2>New subscriber</h2>
        <p><b>Email:</b> ${email}</p>
        <p><b>Time (UTC):</b> ${new Date().toISOString()}</p>
      </div>
    `;

    const text = `New subscriber\nEmail: ${email}\nTime (UTC): ${new Date().toISOString()}`;

     await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
      // to: emailRaw,
      to: "ashishtomar.liangtuang@gmail.com",
      subject,
      text: text,
    });

 
    return Response.json({ ok: true, message: "Subscribed successfully!" });
  } catch (err: any) {
    console.error("❌ /api/subscribe error:", err);
    return Response.json(
      { ok: false, message: err?.message || "Email failed", code: err?.code },
      { status: 500 }
    );
  }
}
