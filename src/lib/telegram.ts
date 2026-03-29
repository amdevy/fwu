const TELEGRAM_API = 'https://api.telegram.org'

interface TelegramMessage {
  formType: string
  data: Record<string, unknown>
}

export async function sendTelegramNotification({ formType, data }: TelegramMessage): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    if (process.env.NODE_ENV === 'development') {
      console.log('Telegram (dev mode):', { formType, data })
      return true
    }
    console.error('TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not configured')
    return false
  }

  const lines = Object.entries(data)
    .filter(([key]) => key !== 'gdprConsent')
    .map(([key, value]) => `<b>${escapeHtml(formatFieldName(key))}:</b> ${escapeHtml(String(value))}`)

  const text = [
    `📩 <b>Нова заявка: ${escapeHtml(formType)}</b>`,
    '',
    ...lines,
    '',
    `🕐 ${new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kyiv' })}`,
    '<i>FWU Platform</i>',
  ].join('\n')

  try {
    const response = await fetch(`${TELEGRAM_API}/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Telegram send failed:', error)
      return false
    }

    return true
  } catch (error) {
    console.error('Telegram send error:', error)
    return false
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function formatFieldName(key: string): string {
  const labels: Record<string, string> = {
    name: "Ім'я",
    brand: 'Бренд',
    website: 'Сайт',
    phone: 'Телефон',
    email: 'Email',
    message: 'Повідомлення',
    contact: 'Контакт',
    age: 'Вік',
    height: 'Зріст',
    city: 'Місто',
    experience: 'Досвід',
    company: 'Компанія',
    partnershipType: 'Тип партнерства',
  }
  return labels[key] || key
}
