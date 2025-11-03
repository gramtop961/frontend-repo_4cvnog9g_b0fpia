import { useState } from 'react'

export default function ContactFooter() {
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus({ type: 'loading', message: '' })

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.status === 501) {
        const data = await res.json()
        setStatus({
          type: 'warning',
          message: 'Message not sent: server email is not configured yet. Please configure SMTP settings on the server to enable sending.',
        })
        e.currentTarget.reset()
        return
      }

      if (!res.ok) throw new Error(await res.text())

      const data = await res.json()
      setStatus({ type: 'success', message: data.message || 'Message sent!' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' })
    }
  }

  return (
    <section id="contact" className="py-16 bg-amber-50">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-amber-900">Contact Us</h2>
          <p className="text-amber-900/70 mt-2">We'd love to hear from you. Drop us a line and we'll get back to you soon.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label className="block text-sm font-medium text-amber-900">Name</label>
              <input name="name" required className="mt-1 w-full rounded-md border border-amber-300 bg-white px-3 py-2 text-amber-900 placeholder-amber-900/40 focus:outline-none focus:ring-2 focus:ring-amber-600" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-amber-900">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-md border border-amber-300 bg-white px-3 py-2 text-amber-900 placeholder-amber-900/40 focus:outline-none focus:ring-2 focus:ring-amber-600" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-amber-900">Message</label>
              <textarea name="message" rows="5" required className="mt-1 w-full rounded-md border border-amber-300 bg-white px-3 py-2 text-amber-900 placeholder-amber-900/40 focus:outline-none focus:ring-2 focus:ring-amber-600" placeholder="How can we help?" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-amber-700 text-white px-5 py-3 font-medium shadow hover:bg-amber-800 transition-colors disabled:opacity-60" disabled={status.type === 'loading'}>
              {status.type === 'loading' ? 'Sending…' : 'Send Message'}
            </button>

            {status.type !== 'idle' && status.message && (
              <p className={
                status.type === 'success' ? 'text-green-700' :
                status.type === 'warning' ? 'text-amber-700' :
                status.type === 'error' ? 'text-red-700' : 'text-amber-900'}>
                {status.message}
              </p>
            )}
          </form>
        </div>

        <aside className="bg-white rounded-xl border border-amber-200 p-6 shadow-sm">
          <h3 className="text-xl font-bold text-amber-900">Visit Us</h3>
          <p className="mt-2 text-amber-900/80">123 Brew Lane, Roastville, RV 2025</p>
          <div className="mt-6 h-px bg-amber-200" />
          <div className="mt-6">
            <p className="text-amber-900/70">Open daily: 7:00 AM – 8:00 PM</p>
            <p className="text-amber-900/70">Phone: (555) 123-4567</p>
          </div>
        </aside>
      </div>

      <footer className="mt-16 border-t border-amber-200">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-amber-900/70">© Bean and Cofe 2025</p>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-amber-900/80 hover:text-amber-900">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-amber-900/80 hover:text-amber-900">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M13.5 9H16V6h-2.5A3.5 3.5 0 0 0 10 9.5V12H8v3h2v7h3v-7h2.1l.4-3H13v-1.5c0-.3.2-.5.5-.5Z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </section>
  )
}
