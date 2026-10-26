// Site-wide settings.
//
// WHATSAPP_NUMBER: international format, digits only, no "+" and no leading 0.
// Example for a Ghana mobile number 024 412 3456 -> '233244123456'
// Leave it empty ('') and WhatsApp will let the visitor choose a contact instead.
export const WHATSAPP_NUMBER = ''

export function buildWhatsAppLink(message) {
  const digits = WHATSAPP_NUMBER.replace(/\D/g, '')
  const text = encodeURIComponent(message)
  return digits ? `https://wa.me/${digits}?text=${text}` : `https://wa.me/?text=${text}`
}

// Search engine indexing.
// false = this demo site asks search engines NOT to list it (recommended while the listings are fictional).
// Change to true when building a real site for a real client.
export const ALLOW_INDEXING = false
