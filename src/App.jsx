import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Profile from './Profile'
import Gallery from './Gallery'
import Contact from './Contact'

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/galeri" element={<Gallery />} />
          <Route path="/kontak" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
