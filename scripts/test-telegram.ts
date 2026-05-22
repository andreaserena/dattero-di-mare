/**
 * Verifica che TELEGRAM_BOT_TOKEN e TELEGRAM_CHAT_ID funzionino.
 * Uso: npm run test:telegram
 */

function esc(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

(async () => {
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    console.error('❌  TELEGRAM_BOT_TOKEN o TELEGRAM_CHAT_ID mancanti in .env.local');
    process.exit(1);
  }

  const today = new Date().toISOString().slice(0, 10);

  const text = [
    `🧪 <b>Test notifica — Dattero di Mare</b>`,
    ``,
    `👤 <b>Nome:</b> ${esc('Mario Rossi')}`,
    `📞 <b>Telefono:</b> ${esc('+39 333 1234567')}`,
    `📧 <b>Email:</b> mario@esempio.it`,
    `📅 <b>Data:</b> ${today}`,
    `🕗 <b>Ora:</b> 20:00`,
    `👥 <b>Coperti:</b> 4`,
    ``,
    `📝 <b>Note:</b> Tavolo vicino alla finestra`,
    ``,
    `<code>ID: test-0000</code>`,
  ].join('\n');

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5_000);

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: 'HTML',
          disable_web_page_preview: true,
        }),
        signal: controller.signal,
      },
    );

    clearTimeout(timeout);
    const body = await res.json();

    if (res.ok) {
      console.log('✅  Messaggio inviato con successo!');
      console.log(`   message_id: ${body.result?.message_id}`);
    } else {
      console.error('❌  Errore Telegram:', body.description);
      process.exit(1);
    }
  } catch (err) {
    clearTimeout(timeout);
    if (err instanceof Error && err.name === 'AbortError') {
      console.error('❌  Timeout: Telegram non ha risposto in 5 secondi');
    } else {
      console.error('❌  Errore di rete:', err);
    }
    process.exit(1);
  }
})();
