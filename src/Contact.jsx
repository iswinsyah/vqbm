const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Hubungi Kami</h1>
        <p className="mt-4 text-lg text-gray-500">
          Punya pertanyaan? Silakan kirim pesan atau kunjungi lokasi kami.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Info Kontak */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-blue-600 font-bold w-24">Alamat:</span>
              <span className="text-gray-600">Jl. Raya Baron, Malang, Jawa Timur</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 font-bold w-24">Telepon:</span>
              <span className="text-gray-600">+62 812-3456-7890</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 font-bold w-24">Email:</span>
              <span className="text-gray-600">info@vqbm.sch.id</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-600 font-bold w-24">Jam:</span>
              <span className="text-gray-600">Senin - Jumat, 08:00 - 16:00</span>
            </div>
          </div>
        </div>

        {/* Formulir */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" placeholder="Nama Anda" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" placeholder="email@contoh.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Pesan</label>
              <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" placeholder="Tulis pesan Anda di sini..."></textarea>
            </div>
            <button type="button" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact