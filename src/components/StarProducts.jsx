const products = [
  {
    name: 'Signature Latte',
    price: '$4.50',
    desc: 'Velvety espresso balanced with steamed milk and a hint of vanilla.',
    img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Cold Brew',
    price: '$4.00',
    desc: 'Slow-steeped for 16 hours for a smooth, naturally sweet taste.',
    img: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Chocolate Croissant',
    price: '$3.25',
    desc: 'Flaky, buttery layers wrapped around rich dark chocolate.',
    img: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Espresso Shot',
    price: '$2.25',
    desc: 'A bold, aromatic jolt of our house-roasted espresso blend.',
    img: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1200&auto=format&fit=crop'
  }
]

export default function StarProducts() {
  return (
    <section id="star" className="py-16 bg-amber-50">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-amber-900">Our Stars</h2>
        <p className="text-amber-900/70 mt-2">Customer favorites crafted to perfection.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article key={p.name} className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow">
              <div className="relative h-44 overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-amber-900">{p.name}</h3>
                  <span className="text-amber-700 font-bold">{p.price}</span>
                </div>
                <p className="mt-2 text-sm text-amber-900/70">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
