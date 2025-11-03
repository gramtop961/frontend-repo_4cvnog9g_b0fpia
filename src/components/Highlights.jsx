import React from 'react'
import { Star } from 'lucide-react'

const products = [
  {
    name: 'Signature Latte',
    price: '$4.50',
    desc: 'Velvety espresso with micro-foamed milk and a hint of vanilla.',
    img: 'https://images.unsplash.com/photo-1503481766315-7a586b20f66b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Cold Brew',
    price: '$4.00',
    desc: '18-hour steep for a smooth, chocolatey finish over ice.',
    img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Chocolate Croissant',
    price: '$3.25',
    desc: 'Flaky, buttery pastry filled with dark chocolate.',
    img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Espresso Shot',
    price: '$2.50',
    desc: 'Rich, intense, and perfectly extracted in 28 seconds.',
    img: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Highlights() {
  return (
    <section id="star" className="py-16 bg-white/60">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center gap-3 mb-8">
          <Star className="text-amber-600" />
          <h2 className="text-2xl md:text-3xl font-bold">Star Products</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.name} className="group rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-brown-900">{p.name}</h3>
                  <span className="text-brown-700 font-medium">{p.price}</span>
                </div>
                <p className="mt-2 text-sm text-brown-700/80">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
