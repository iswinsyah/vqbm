const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kolom 1: Identitas */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">VQBM</h3>
            <p className="text-gray-400">
              Mencetak generasi Hafizh Al-Qur'an yang berjiwa Entrepreneur dan siap menghadapi tantangan zaman.
            </p>
          </div>

          {/* Kolom 2: Link Cepat */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Beranda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Profil</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Pendaftaran</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Kontak</a></li>
            </ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Jl. Raya Baron, Malang, Jawa Timur</span>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 12.284 3 5z" />
                </svg>
                <span>+62 812-3456-7890</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Villa Quran Baron Malang. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer