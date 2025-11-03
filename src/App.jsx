import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StarProducts from './components/StarProducts'
import MenuSection from './components/MenuSection'
import ContactFooter from './components/ContactFooter'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 text-amber-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <StarProducts />
        <MenuSection />
        <ContactFooter />
      </main>
    </div>
  )
}

export default App
