import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-md' : 'border-b border-slate-100'}`} id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-2xl shadow-sm">
                <i className="fa-solid fa-quran"></i>
            </div>
            <div className="flex flex-col">
                <h1 className="font-serif font-bold text-lg text-primary leading-none">Villa Quran</h1>
                <span className="text-secondary text-xs font-sans font-bold uppercase tracking-widest mt-1">Baron Malang</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center">
            <Link to="/" className="text-slate-700 hover:text-primary font-medium transition">Beranda</Link>
            
            {/* Dropdown Profil */}
            <div className="relative group">
                <button className="flex items-center text-slate-700 hover:text-primary font-medium transition">
                    Profil <i className="fa-solid fa-chevron-down text-xs ml-1"></i>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white border border-slate-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50">
                    <a href="#profil" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary">Tentang Kami</a>
                    <a href="#profil" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary">Visi & Misi</a>
                </div>
            </div>

            {/* Dropdown Program */}
            <div className="relative group">
                <button className="flex items-center text-slate-700 hover:text-primary font-medium transition">
                    Program <i className="fa-solid fa-chevron-down text-xs ml-1"></i>
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white border border-slate-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50">
                    <a href="#program" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary">Tahfidz Bersanad</a>
                    <a href="#program" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary">AI & Teknologi Terapan</a>
                    <a href="#program" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary">Incubator Bisnis Santri</a>
                </div>
            </div>

            <a href="#kegiatan" className="text-slate-700 hover:text-primary font-medium transition">Kegiatan</a>
            <a href="#galeri" className="text-slate-700 hover:text-primary font-medium transition">Fasilitas</a>
            <a href="#berita" className="text-slate-700 hover:text-primary font-medium transition">Berita</a>
            
            <a href="#psb" className="bg-primary hover:bg-green-800 text-white px-5 py-2 rounded-lg font-medium transition shadow-md flex items-center gap-2">
                <i className="fa-solid fa-user-plus text-sm"></i> PSB Online
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-primary focus:outline-none p-2"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t p-4 space-y-2 shadow-lg max-h-screen overflow-y-auto">
            <Link to="/" className="block px-3 py-2 text-slate-700 font-medium hover:bg-slate-50 rounded">Beranda</Link>
            <a href="#profil" className="block px-3 py-2 text-slate-700 font-medium hover:bg-slate-50 rounded">Profil</a>
            <a href="#program" className="block px-3 py-2 text-slate-700 font-medium hover:bg-slate-50 rounded">Program</a>
            <a href="#kegiatan" className="block px-3 py-2 text-slate-700 font-medium hover:bg-slate-50 rounded">Kegiatan</a>
            <a href="#galeri" className="block px-3 py-2 text-slate-700 font-medium hover:bg-slate-50 rounded">Fasilitas</a>
            <a href="#berita" className="block px-3 py-2 text-slate-700 font-medium hover:bg-slate-50 rounded">Berita</a>
            <a href="#" className="block px-3 py-2 bg-primary text-white text-center rounded mt-4">PSB Online</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar