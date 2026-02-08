import Navbar from './Navbar'
import Hero from './Hero'
import Features from './Features'
import Testimonials from './Testimonials'

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Features />
        <Testimonials />
      </div>
    </>
  )
}

export default App
