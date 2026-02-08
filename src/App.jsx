import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './pages/Home'
import Profile from './pages/Profile'

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
