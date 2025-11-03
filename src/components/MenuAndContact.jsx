import React, { useState } from 'react'

const menu = {
  Coffee: [
    { name: 'Americano', price: '$3.00', desc: 'Bold espresso diluted with hot water.' },
    { name: 'Cappuccino', price: '$4.25', desc: 'Equal parts espresso, steamed milk and foam.' },
    { name: 'Mocha', price: '$4.75', desc: 'Espresso with chocolate, topped with whipped cream.' },
  ],
  Beverages: [
    { name: 'Iced Tea', price: '$3.25', desc: 'Freshly brewed black tea over ice.' },
    { name: 'Matcha Latte', price: '$4.50', desc: 'Ceremonial matcha blended with milk.' },
    { name: 'Chai Latte', price: '$4.50', desc: 'Spiced black tea with steamed milk.' },
  ],
  Snacks: [
    { name: 'Blueberry Muffin', price: '$2.75', desc: 'Moist muffin bursting with blueberries.' },
    { name: 'Banana Bread', price: '$2.50', desc: 'House-baked, lightly toasted on request.' },
    { name: 'Avocado Toast', price: '$5.50', desc: 'Sourdough with smashed avocado and chili flakes.' },
  ],
}

export default function MenuAndContact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: null, note: '' })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, note: '' })
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.ok) {
        setStatus({ loading: false, success: true, note: data.message })
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus({ loading: false, success: false, note: data.message || 'Something went wrong.' })
      }
    } catch (err) {
      setStatus({ loading: false, success: false, note: 'Network error. Please try again.' })
    }
  }

  return (
    <div>
      {/* Menu */}
      <section id="menu" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Menu</h2>
          <div className="grid gap-10 md:grid-cols-3">
            {Object.entries(menu).map(([category, items]) => (
              <div key={category} className="rounded-xl bg-white shadow p-6">
                <h3 className="text-lg font-semibold mb-4 text-brown-800">{category}</h3>
                <ul className="space-y-4">
                  {items.map((i) => (
                    <li key={i.name} className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-medium text-brown-900">{i.name}</p>
                        <p className="text-sm text-brown-700/80">{i.desc}</p>
                      </div>
                      <span className="text-brown-700 font-medium whitespace-nowrap">{i.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
            <p className="mt-3 text-brown-800 max-w-prose">
              Have a question, catering request, or just want to say hello? Send us a message and we’ll get back to you.
            </p>
            <div className="mt-6 rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop" alt="Cafe" className="w-full h-64 object-cover" />
            </div>
          </div>
          <div>
            <form onSubmit={onSubmit} className="rounded-xl bg-white shadow p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-brown-800">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-brown-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brown-800">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-brown-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brown-800">Message</label>
                <textarea
                  required
                  rows="5"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-brown-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                disabled={status.loading}
                className="w-full rounded-full bg-brown-800 text-white py-3 font-medium hover:bg-brown-700 transition disabled:opacity-60"
              >
                {status.loading ? 'Sending…' : 'Send Message'}
              </button>
              {status.success === true && (
                <p className="text-green-700 text-sm">{status.note || "Thanks! Your message has been sent."}</p>
              )}
              {status.success === false && (
                <p className="text-red-700 text-sm">{status.note || "We couldn't send your message. Please try again."}</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
