import 'server-only';
import { format, parseISO } from 'date-fns';
import { it } from 'date-fns/locale';
import type { Booking } from '@/types/database';

function esc(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildMessage(booking: Booking): string {
  const displayDate = format(parseISO(booking.date), 'EEEE d MMMM yyyy', { locale: it });
  const displayTime = booking.time.slice(0, 5); // "20:00:00" → "20:00"

  const lines = [
    `🍽️ <b>Nuova prenotazione</b>`,
    ``,
    `👤 <b>Nome:</b> ${esc(booking.name)}`,
    `📞 <b>Telefono:</b> ${esc(booking.phone)}`,
  ];

  if (booking.email) lines.push(`📧 <b>Email:</b> ${esc(booking.email)}`);

  lines.push(
    `📅 <b>Data:</b> ${displayDate}`,
    `🕗 <b>Ora:</b> ${displayTime}`,
    `👥 <b>Coperti:</b> ${booking.guests}`,
  );

  if (booking.notes) {
    lines.push(``, `📝 <b>Note:</b> ${esc(booking.notes)}`);
  }

  lines.push(``, `<code>ID: ${booking.id}</code>`);

  return lines.join('\n');
}

export async function sendBookingNotification(
  booking: Booking,
): Promise<{ ok: boolean; error?: string }> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return { ok: false, error: 'missing env' };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5_000);

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: buildMessage(booking),
          parse_mode: 'HTML',
          disable_web_page_preview: true,
        }),
        signal: controller.signal,
      },
    );

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      return { ok: false, error: body.description ?? `HTTP ${res.status}` };
    }

    return { ok: true };
  } catch (err) {
    if (err instanceof Error && err.name === 'AbortError') {
      return { ok: false, error: 'timeout' };
    }
    return { ok: false, error: String(err) };
  } finally {
    clearTimeout(timeout);
  }
}
