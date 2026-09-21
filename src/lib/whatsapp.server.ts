/**
 * Sends one-time codes over WhatsApp via Green API (green-api.com).
 *
 * Required secrets (set them and code delivery turns on automatically):
 *   WHATSAPP_PHONE_NUMBER_ID  - the Green API idInstance (e.g. 710722741840)
 *   WHATSAPP_TOKEN            - the Green API apiTokenInstance
 *   WHATSAPP_API_URL          - optional, defaults to https://7107.api.greenapi.com
 */

function greenApiBaseUrl() {
  const instance = process.env["WHATSAPP_PHONE_NUMBER_ID"];
  const token = process.env["WHATSAPP_TOKEN"];
  if (!instance || !token) return null;
  const apiUrl = process.env["WHATSAPP_API_URL"] ?? "https://7107.api.greenapi.com";
  return `${apiUrl}/waInstance${instance}/sendMessage/${token}`;
}

export function whatsappConfigured() {
  return Boolean(greenApiBaseUrl());
}

export async function sendWhatsappCode(phone: string, code: string) {
  const url = greenApiBaseUrl();
  if (!url) {
    return { sent: false as const, reason: "not_configured" as const };
  }

  const digits = phone.replace(/^\+/, "").replace(/\D/g, "");

  const response = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      chatId: `${digits}@c.us`,
      message: `رمز التحقق الخاص بك هو: ${code}\nYour verification code is: ${code}`,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("whatsapp send failed", response.status, detail);
    return { sent: false as const, reason: "provider_error" as const };
  }

  return { sent: true as const };
}
