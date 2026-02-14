const Profile = () => {
  return (
    <section id="profil" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Foto Mudir */}
                <div className="w-full md:w-1/3 relative">
                    <div className="absolute inset-0 bg-secondary/10 transform rotate-3 rounded-2xl"></div>
                    {/* Placeholder Foto Mudir */}
                    <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Mudir Villa Quran" className="relative rounded-2xl shadow-2xl w-full object-cover h-[400px]" />
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border-l-4 border-primary">
                        <h4 className="font-bold text-slate-900">Ustadz Fulan Al-Hafidz, Lc., M.Ag</h4>
                        <p className="text-xs text-secondary font-bold uppercase">Mudir / Pimpinan Pesantren</p>
                    </div>
                </div>
                
                {/* Teks Sambutan */}
                <div className="w-full md:w-2/3">
                    <h2 className="text-secondary font-bold tracking-wide uppercase text-sm mb-2">Ahlan Wa Sahlan</h2>
                    <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">Membangun Generasi yang Menggenggam Dunia dengan Al-Quran</h3>
                    <div className="prose prose-slate text-slate-600 leading-relaxed">
                        <p className="mb-4">
                            <span className="text-4xl float-left mr-2 font-serif text-primary">"</span>
                            Di era disrupsi teknologi ini, kita tidak bisa hanya berdiam diri. Villa Quran Baron hadir bukan sekadar sebagai tempat menghafal Al-Quran, tetapi sebagai laboratorium peradaban.
                        </p>
                        <p className="mb-4">
                            Kami percaya bahwa santri harus memiliki akar yang kuat dalam agama (Tsaqofah) namun memiliki ranting yang menjulang tinggi ke langit teknologi dan sains. Kurikulum kami dirancang untuk menjawab kegelisahan orang tua akan masa depan anak-anak mereka.
                        </p>
                        <p>
                            Selamat datang di laman resmi kami. Semoga ini menjadi jendela informasi yang transparan bagi Bapak/Ibu sekalian.
                        </p>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" alt="Tanda Tangan" className="h-12 mt-6 opacity-60" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Profile