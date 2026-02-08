import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">VQBM</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Beranda</Link>
              <Link to="/profil" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Profil</Link>
              <Link to="/galeri" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Galeri</Link>
              <Link to="/kontak" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Kontak</Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link to="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Beranda</Link>
            <Link to="/profil" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Profil</Link>
            <Link to="/galeri" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Galeri</Link>
            <Link to="/kontak" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Kontak</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar