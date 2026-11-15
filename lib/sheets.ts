/**
 * Utility for logging contact inquiries and KAI chatbot conversations
 * to Google Sheets and external webhooks.
 *
 * Configured Spreadsheet:
 * https://docs.google.com/spreadsheets/d/1cmL6W37NnF1EtxKoLYrZ43SPAQOgcT7K0TC1lCU9LWQ/edit?usp=sharing
 */

export async function logToGoogleSheet(payload: {
  type: 'contact' | 'kai';
  name?: string;
  email?: string;
  message?: string;
  question?: string;
  answer?: string;
  ip?: string | null;
  timestamp?: string;
}) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn(
      `[Google Sheets Logger] GOOGLE_SHEET_WEBHOOK_URL is not configured. Event (${payload.type}) not synced to Google Sheets. See google-sheets-script.js for 1-click deployment instructions.`
    );
    return;
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...payload,
        timestamp: payload.timestamp || new Date().toISOString(),
      }),
      // Apps Script redirects 302/307 to a temporary URL
      redirect: 'follow',
    });

    if (!res.ok) {
      console.error('[Google Sheet Log HTTP error]', res.status, res.statusText);
    }
  } catch (err: any) {
    console.error('[Google Sheet Log Error]', err?.message || err);
  }
}
