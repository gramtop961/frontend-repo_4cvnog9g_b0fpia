import React from 'react'
import { Instagram, Facebook } from 'lucide-react'

function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-brown-200">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <button onClick={() => scrollTo('home')} className="text-xl font-semibold tracking-wide text-brown-800">
          Bean and Cofe
        </button>
        <div className="hidden md:flex items-center gap-6 text-brown-700">
          <button onClick={() => scrollTo('home')} className="hover:text-brown-900 transition-colors">Home</button>
          <button onClick={() => scrollTo('star')} className="hover:text-brown-900 transition-colors">Star Products</button>
          <button onClick={() => scrollTo('menu')} className="hover:text-brown-900 transition-colors">Menu</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-brown-900 transition-colors">Contact</button>
        </div>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-brown-900 text-brown-50">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">Bean and Cofe</h3>
          <p className="mt-2 text-brown-200">Brewed with love, served with passion.</p>
        </div>
        <div>
          <h4 className="font-semibold">Visit us</h4>
          <p className="mt-2 text-brown-200">123 Roast Street, Brewtown, BT 2025</p>
        </div>
        <div>
          <h4 className="font-semibold">Follow</h4>
          <div className="mt-2 flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-brown-800 hover:bg-brown-700 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-brown-800 hover:bg-brown-700 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-brown-800 py-4 text-center text-sm text-brown-300">
        © Bean and Cofe 2025
      </div>
    </footer>
  )
}

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100 text-brown-900">
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  )
}
