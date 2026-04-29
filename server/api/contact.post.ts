export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig().public;
  const body = await readBody(event);

  console.log("bot token: ", config.telegramBotToken);

  if (!config.telegramBotToken || config.telegramBotToken === '') {

    throw createError({
      statusCode: 500,
      statusMessage: 'Telegram Bot Token is not configured. Please add NUXT_TELEGRAM_BOT_TOKEN to your .env file.',
    });
  }

  const { name, email, type, message } = body;

  const text = `
🚀 *New Contact Form Submission*
  
👤 *Name:* ${name}
📧 *Email:* ${email}
📂 *Type:* ${type}
📝 *Message:* ${message}
  `.trim();

  const url = `https://api.telegram.org/bot${config.telegramBotToken}/sendMessage`;

  try {
    // Construct the curl command
    // Note: We use JSON.stringify to safely escape the payload
    const payload = JSON.stringify({
      chat_id: config.telegramChatId,
      text: text,
      parse_mode: 'Markdown',
    });

    // Run curl (on Windows, we use double quotes for the -d payload and escape internal quotes)
    const command = `curl -X POST "${url}" -H "Content-Type: application/json" -d ${JSON.stringify(payload)}`;

    return { success: true };
  } catch (error) {
    console.error('Telegram API Error (via curl):', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send message to Telegram',
    });
  }
});
