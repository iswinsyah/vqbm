const Testimonials = () => {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-serif font-bold text-slate-900">Apa Kata Mereka?</h2>
                <p className="text-slate-500 mt-2">Pandangan tokoh dan wali santri tentang Villa Quran Baron.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Testi 1 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
                    <i className="fa-solid fa-quote-right text-4xl text-slate-100 absolute top-4 right-4"></i>
                    <div className="flex items-center gap-4 mb-6">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-12 h-12 rounded-full object-cover" />
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm">Dr. H. Ahmad Zaki, M.Si</h4>
                            <p className="text-xs text-slate-500">Dosen Universitas Negeri & Praktisi Dakwah</p>
                        </div>
                    </div>
                    <p className="text-slate-600 text-sm italic leading-relaxed">
                        "Saya terkejut melihat anak-anak di sini. Mereka hafal Al-Quran dengan mutqin, tapi saat diajak bicara soal algoritma dan bisnis, wawasannya sangat luas. Ini model pendidikan yang kita butuhkan."
                    </p>
                    <div className="flex text-yellow-400 text-xs mt-4">
                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    </div>
                </div>

                {/* Testi 2 */}
                <div className="bg-white p-8 rounded-2xl shadow-md border border-primary/20 relative transform md:-translate-y-2">
                    <i className="fa-solid fa-quote-right text-4xl text-primary/10 absolute top-4 right-4"></i>
                    <div className="flex items-center gap-4 mb-6">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-12 h-12 rounded-full object-cover" />
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm">Ibu Sarah Amalia</h4>
                            <p className="text-xs text-slate-500">Wali Santri Angkatan 2</p>
                        </div>
                    </div>
                    <p className="text-slate-700 text-sm italic leading-relaxed font-medium">
                        "Awalnya ragu karena non-formal. Tapi setelah anak saya lulus, dia justru diterima di PTN jalur prestasi Tahfidz dan sekarang sudah punya bisnis *web development* sendiri untuk biaya kuliahnya. MasyaAllah."
                    </p>
                    <div className="flex text-yellow-400 text-xs mt-4">
                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    </div>
                </div>

                {/* Testi 3 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
                    <i className="fa-solid fa-quote-right text-4xl text-slate-100 absolute top-4 right-4"></i>
                    <div className="flex items-center gap-4 mb-6">
                        <img src="https://randomuser.me/api/portraits/men/85.jpg" className="w-12 h-12 rounded-full object-cover" />
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm">Ust. Budi Santoso</h4>
                            <p className="text-xs text-slate-500">Ketua Yayasan Dakwah Malang</p>
                        </div>
                    </div>
                    <p className="text-slate-600 text-sm italic leading-relaxed">
                        "Villa Quran Baron berhasil memadukan ketenangan suasana villa dengan ketatnya disiplin ilmu. Tempat yang sempurna untuk kaderisasi umat."
                    </p>
                    <div className="flex text-yellow-400 text-xs mt-4">
                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials