const Gallery = () => {
  return (
    <section id="galeri" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
                <h2 className="text-secondary font-bold tracking-wide uppercase text-sm mb-2">Suasana & Fasilitas</h2>
                <h3 className="text-3xl font-serif font-bold text-slate-900">Kehidupan di Villa Quran</h3>
            </div>
            <div className="flex gap-2">
                <button className="px-4 py-2 bg-primary text-white text-sm rounded-full">Semua</button>
                <button className="px-4 py-2 bg-slate-100 text-slate-600 hover:bg-slate-200 text-sm rounded-full transition">Akademik</button>
                <button className="px-4 py-2 bg-slate-100 text-slate-600 hover:bg-slate-200 text-sm rounded-full transition">Asrama</button>
            </div>
        </div>

        {/* Grid Galeri */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px] md:h-[500px]">
            {/* Foto Besar Kiri */}
            <div className="col-span-2 md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl">
                <img src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" alt="Halaqah Quran" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                        <span className="text-xs font-bold text-secondary uppercase bg-white/10 backdrop-blur-sm px-2 py-1 rounded">Tahfidz</span>
                        <h4 className="text-white font-bold text-lg mt-2">Suasana Halaqah Subuh</h4>
                    </div>
                </div>
            </div>
            
            {/* Foto Kanan Atas */}
            <div className="col-span-1 md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-xl">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Kelas Coding" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <h4 className="text-white font-bold text-sm">Lab Komputer & AI</h4>
                </div>
            </div>

            {/* Foto Kanan Atas 2 */}
            <div className="col-span-1 md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-xl">
                <img src="https://images.unsplash.com/photo-1529390003868-6c640a937379?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Asrama" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <h4 className="text-white font-bold text-sm">Kamar Asrama Villa</h4>
                </div>
            </div>

             {/* Foto Kanan Bawah Panjang */}
             <div className="col-span-2 md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-xl">
                <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" alt="Olahraga" className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                     <div>
                        <span className="text-xs font-bold text-secondary uppercase bg-white/10 backdrop-blur-sm px-2 py-1 rounded">Ekstrakurikuler</span>
                        <h4 className="text-white font-bold text-sm mt-1">Fasilitas Gym & Panahan</h4>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery