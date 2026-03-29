import { NextRequest, NextResponse } from 'next/server'
import { partnerFormSchema } from '@/lib/validations'
import { sendEmail, buildFormEmailHtml } from '@/lib/email'
import { sendTelegramNotification } from '@/lib/telegram'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = partnerFormSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: {
            code: 'validation_error',
            message: 'Помилка валідації',
            details: parsed.error.issues.map((i) => ({
              field: String(i.path[0]),
              message: i.message,
            })),
          },
        },
        { status: 422 }
      )
    }

    const adminEmail = process.env.ADMIN_EMAIL || 'admin@fwu.ua'
    await Promise.all([
      sendEmail({
        to: adminEmail,
        subject: `Заявка партнера: ${parsed.data.company} — FWU Platform`,
        html: buildFormEmailHtml('Заявка партнера', parsed.data),
      }),
      sendTelegramNotification({
        formType: 'Заявка партнера',
        data: parsed.data,
      }),
    ])

    return NextResponse.json({ data: { success: true } }, { status: 201 })
  } catch {
    console.error('Form submission error')
    return NextResponse.json(
      { error: { code: 'internal_error', message: 'Щось пішло не так' } },
      { status: 500 }
    )
  }
}
