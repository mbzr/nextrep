import { createTransport, getTestMessageUrl } from 'nodemailer'

export const getEmailClient = () => {
  const hasAuth = process.env.SMTP_USER || process.env.SMTP_PASSWORD

  return createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT
      ? Number.parseInt(process.env.SMTP_PORT)
      : undefined,
    secure: process.env.SMTP_SECURE === 'true',
    auth: hasAuth
      ? {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        }
      : undefined,
    tls: {
      rejectUnauthorized: process.env.SMTP_TLS_ENABLED === 'true',
    },
  })
}

export const sendVerificationEmail = async (
  email: string,
  code: string,
  name?: string,
) => {
  const transport = getEmailClient()

  const info = await transport.sendMail({
    from: {
      name: process.env.NOREPLY_EMAIL_NAME || 'Your App',
      address: process.env.NOREPLY_EMAIL || process.env.SUPPORT_EMAIL!,
    },
    to: email,
    subject: 'Verify your email address',
    html: `
      <h1>Verify your email address</h1>
      <p>Hi ${name || 'there'},</p>
      <p>Your verification code is: <strong>${code}</strong></p>
      <p>This code will expire in 15 minutes.</p>
    `,
    text: `
      Verify your email address
      
      Hi ${name || 'there'},
      
      Your verification code is: ${code}
      
      This code will expire in 15 minutes.
    `,
  })

  // preview for ethereal testing, remove later
  const previewURL = getTestMessageUrl(info)
  if (previewURL) {
    console.log('View email at:', previewURL)
  }

  return info
}
