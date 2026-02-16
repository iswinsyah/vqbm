const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-12 mb-12">
                {/* Kolom 1: Identitas */}
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-2 mb-6 text-white">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                            <i className="fa-solid fa-quran"></i>
                        </div>
                        <span className="font-serif font-bold text-lg leading-tight">Villa Quran<br />Baron Malang</span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">
                        Jl. Villa Baron No. 12, Kecamatan Kedungkandang, Kota Malang, Jawa Timur 65123.
                    </p>
                    <div className="flex space-x-3">
                        <a href="#" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition"><i className="fa-brands fa-facebook-f text-sm"></i></a>
                        <a href="#" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition"><i className="fa-brands fa-instagram text-sm"></i></a>
                        <a href="#" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition"><i className="fa-brands fa-youtube text-sm"></i></a>
                    </div>
                </div>

                {/* Kolom 2: Tautan Cepat */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Tautan Cepat</h4>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#" className="hover:text-white transition border-b border-transparent hover:border-white pb-1">Profil Mudir</a></li>
                        <li><a href="#" className="hover:text-white transition border-b border-transparent hover:border-white pb-1">Sejarah Yayasan</a></li>
                        <li><a href="#" className="hover:text-white transition border-b border-transparent hover:border-white pb-1">Kalender Akademik</a></li>
                        <li><a href="#" className="hover:text-white transition border-b border-transparent hover:border-white pb-1">Unduh Brosur</a></li>
                        <li><a href="#" className="hover:text-white transition border-b border-transparent hover:border-white pb-1">Karir / Lowongan</a></li>
                    </ul>
                </div>

                {/* Kolom 3: Program Studi */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Unit Pendidikan</h4>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#" className="hover:text-white transition">SMP Tahfidz Tech</a></li>
                        <li><a href="#" className="hover:text-white transition">SMApreneur AI</a></li>
                        <li><a href="#" className="hover:text-white transition">Dauroh Intensif</a></li>
                        <li><a href="#" className="hover:text-white transition">Pesantren Mahasiswa</a></li>
                    </ul>
                </div>

                {/* Kolom 4: Kontak */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Layanan Akademik</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <i className="fa-solid fa-phone mt-1 text-primary"></i>
                            <div>
                                <span className="block text-slate-400 text-xs">Telepon Kantor</span>
                                <span className="text-white font-medium">0341-123456</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="fa-brands fa-whatsapp mt-1 text-primary"></i>
                            <div>
                                <span className="block text-slate-400 text-xs">WhatsApp Admin</span>
                                <span className="text-white font-medium">0812-3456-7890</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="fa-solid fa-envelope mt-1 text-primary"></i>
                            <div>
                                <span className="block text-slate-400 text-xs">Email</span>
                                <span className="text-white font-medium">admin@villaquranbaron.id</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-slate-800 pt-8 text-center">
                <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} Villa Quran Baron Malang. Hak Cipta Dilindungi Undang-Undang. | <span className="text-yellow-500 font-bold">Update Terbaru Aktif</span></p>
            </div>
        </footer>
    )
}

export default Footer