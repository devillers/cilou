//app/api/contact/route.jsimport nodemailer from 'nodemailer';

export async function POST(req) {
    const { name, email, message } = await req.json();
  
    // Setup transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST, // e.g. "smtp.gmail.com"
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
  
    try {
      await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: process.env.MAIL_TO, // Your email address
        subject: "New Contact Form Message",
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong><br>${message}</p>`,
      });
  
      return Response.json({ success: true });
    } catch (err) {
      console.error(err);
      return Response.json({ success: false }, { status: 500 });
    }
  }
  