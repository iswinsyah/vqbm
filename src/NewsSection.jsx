const NewsSection = () => {
  return (
    <section id="berita" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-10">
                <div>
                    <h2 className="text-3xl font-serif font-bold text-slate-900">Kabar Villa Quran</h2>
                    <p className="text-slate-500 mt-2">Update kegiatan santri dan prestasi terbaru.</p>
                </div>
                <a href="#" className="hidden md:inline-block px-4 py-2 border border-slate-300 rounded-lg text-slate-600 hover:border-primary hover:text-primary transition text-sm font-medium">Lihat Semua Berita</a>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
                {[
                    {
                        img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        tag: "Kegiatan",
                        date: "12 Februari 2026",
                        title: "Kunjungan Edukasi Santri ke Techno Park Malang",
                        tagColor: "bg-primary"
                    },
                    {
                        img: "https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        tag: "Prestasi",
                        date: "10 Februari 2026",
                        title: "Tim AI Villa Quran Juara 2 Lomba Inovasi Teknologi Nasional",
                        tagColor: "bg-secondary"
                    },
                    {
                        img: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        tag: "Kajian",
                        date: "05 Februari 2026",
                        title: "Dauroh Kitab Adabul Alim Wal Muta'alim bersama Syaikh Ahmad",
                        tagColor: "bg-primary"
                    },
                    {
                        img: "https://images.unsplash.com/photo-1542810634-71277d95dc24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                        tag: "Bisnis",
                        date: "01 Februari 2026",
                        title: "Panen Raya Madu Klanceng Hasil Budidaya Santri",
                        tagColor: "bg-blue-600"
                    }
                ].map((item, index) => (
                    <article key={index} className="bg-white group cursor-pointer">
                        <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                            <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt={item.title} />
                            <div className={`absolute bottom-0 left-0 ${item.tagColor} text-white text-xs px-3 py-1`}>{item.tag}</div>
                        </div>
                        <div className="text-xs text-slate-400 mb-2"><i className="fa-regular fa-calendar mr-1"></i> {item.date}</div>
                        <h3 className="font-bold text-slate-800 leading-snug group-hover:text-primary transition">{item.title}</h3>
                    </article>
                ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
                 <a href="#" className="inline-block px-4 py-2 border border-slate-300 rounded-lg text-slate-600 hover:border-primary hover:text-primary transition text-sm font-medium">Lihat Semua Berita</a>
            </div>
        </div>
    </section>
  );
};

export default NewsSection;