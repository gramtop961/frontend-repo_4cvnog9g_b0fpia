import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] md:h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Tddl75W6Ij9Qp77j/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/80 pointer-events-none" />

      <div className="relative z-10 h-full mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-brown-900 drop-shadow-sm">
            Bean and Cofe
          </h1>
          <p className="mt-4 text-lg md:text-xl text-brown-800">
            Brewed with love, served with passion.
          </p>
          <div className="mt-6">
            <a href="#menu" className="inline-block rounded-full bg-brown-800 text-white px-6 py-3 shadow hover:bg-brown-700 transition-transform hover:scale-[1.02]">
              View Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
