import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLink = (href, label) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="px-3 py-2 rounded-md text-sm font-medium text-amber-900 hover:text-white hover:bg-amber-700 transition-colors"
    >
      {label}
    </a>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-amber-50/80 backdrop-blur border-b border-amber-200">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight text-amber-900">Bean and Cofe</span>
        </a>

        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-amber-900 hover:bg-amber-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLink('#home', 'Home')}
          {navLink('#star', 'Star Products')}
          {navLink('#menu', 'Menu')}
          {navLink('#contact', 'Contact')}
        </div>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-3 flex flex-col gap-1">
          {navLink('#home', 'Home')}
          {navLink('#star', 'Star Products')}
          {navLink('#menu', 'Menu')}
          {navLink('#contact', 'Contact')}
        </div>
      )}
    </header>
  )
}
