interface EmailPayload {
  to: string
  subject: string
  html: string
}

export async function sendEmail({ to, subject, html }: EmailPayload): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    console.error('RESEND_API_KEY not configured')
    // In development, log and return success
    if (process.env.NODE_ENV === 'development') {
      console.log('Email (dev mode):', { to, subject })
      return true
    }
    return false
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM || 'FWU Platform <noreply@fwu.ua>',
        to,
        subject,
        html,
      }),
    })

    if (!response.ok) {
      console.error('Email send failed:', await response.text())
      return false
    }

    return true
  } catch (error) {
    console.error('Email send error:', error)
    return false
  }
}

export function buildFormEmailHtml(formType: string, data: Record<string, unknown>): string {
  const rows = Object.entries(data)
    .filter(([key]) => key !== 'gdprConsent')
    .map(([key, value]) => `<tr><td style="padding:8px;border:1px solid #D9D9D9;font-weight:600;">${key}</td><td style="padding:8px;border:1px solid #D9D9D9;">${String(value)}</td></tr>`)
    .join('')

  return `
    <div style="font-family:'DM Sans',sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#6B3B40;font-family:serif;">Нова заявка: ${formType}</h2>
      <table style="width:100%;border-collapse:collapse;margin-top:16px;">
        ${rows}
      </table>
      <p style="color:#848D7F;margin-top:16px;font-size:14px;">FWU Platform &mdash; Fashion West Ukraine</p>
    </div>
  `
}
