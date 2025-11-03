const sections = [
  {
    title: 'Coffee',
    items: [
      { name: 'Americano', price: '$3.00', desc: 'Smooth espresso topped with hot water.' },
      { name: 'Cappuccino', price: '$4.00', desc: 'Espresso with steamed milk and rich foam.' },
      { name: 'Mocha', price: '$4.75', desc: 'Espresso, chocolate, and milk topped with whipped cream.' },
    ],
  },
  {
    title: 'Beverages',
    items: [
      { name: 'Iced Matcha Latte', price: '$4.50', desc: 'Ceremonial matcha whisked with milk over ice.' },
      { name: 'Chai Latte', price: '$4.25', desc: 'Spiced black tea with steamed milk.' },
      { name: 'Lemonade', price: '$3.25', desc: 'Freshly squeezed lemons with a touch of sweetness.' },
    ],
  },
  {
    title: 'Snacks',
    items: [
      { name: 'Blueberry Muffin', price: '$2.75', desc: 'Studded with juicy blueberries and a crumbly top.' },
      { name: 'Avocado Toast', price: '$5.00', desc: 'Sourdough topped with smashed avocado and chili flakes.' },
      { name: 'Granola Parfait', price: '$3.75', desc: 'Layers of yogurt, granola, and seasonal fruit.' },
    ],
  },
]

export default function MenuSection() {
  return (
    <section id="menu" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-amber-900">Menu</h2>
        <p className="text-amber-900/70 mt-2">Something for every mood — hot, iced, or a little bite.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div key={section.title} className="bg-amber-50 rounded-xl border border-amber-200 p-6">
              <h3 className="text-xl font-bold text-amber-900">{section.title}</h3>
              <ul className="mt-4 space-y-4">
                {section.items.map((item) => (
                  <li key={item.name} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium text-amber-900">{item.name}</p>
                      <p className="text-sm text-amber-900/70">{item.desc}</p>
                    </div>
                    <span className="text-amber-700 font-semibold whitespace-nowrap">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
