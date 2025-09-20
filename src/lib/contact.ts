export type ContactPayload = { name: string; email: string; message: string }


export async function sendContact(payload: ContactPayload) {
// Replace with your backend or Netlify Forms
await new Promise(r => setTimeout(r, 700))
if (!payload.email.includes('@')) throw new Error('Invalid email')
return { ok: true }
}