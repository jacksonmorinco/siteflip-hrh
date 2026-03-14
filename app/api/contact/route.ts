import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, inquiry, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Send via Resend when RESEND_API_KEY is configured
    const apiKey = process.env.RESEND_API_KEY

    if (apiKey) {
      const { Resend } = await import('resend')
      const resend = new Resend(apiKey)

      await resend.emails.send({
        from:    'HRH Website <noreply@hrheli.com>',
        to:      ['flying@hrheli.com'],
        reply_to: email,
        subject: `New inquiry from ${name} — ${inquiry || 'General'}`,
        text: `
Name:    ${name}
Email:   ${email}
Phone:   ${phone || 'Not provided'}
Inquiry: ${inquiry || 'General'}

Message:
${message}
        `.trim(),
      })
    } else {
      // Development: log to console
      console.log('Contact form submission:', { name, email, phone, inquiry, message })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
