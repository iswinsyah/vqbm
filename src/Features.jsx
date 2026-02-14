const Features = () => {
  return (
    <section id="program" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900">Pilar Akademik</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 border border-slate-100 overflow-hidden group">
                <div className="h-48 bg-emerald-100 relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition"></div>
                </div>
                <div className="p-6">
                    <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition">Tahfidz & Tsaqofah</h4>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">Program intensif hafalan 30 juz bersanad dengan pendalaman kitab kuning (Turats) sebagai fondasi pemikiran Islam.</p>
                    <a href="#" className="text-secondary font-semibold text-sm hover:underline">Selengkapnya &rarr;</a>
                </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 border border-slate-100 overflow-hidden group">
                <div className="h-48 bg-slate-900 relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                     <div className="absolute top-2 right-2 bg-secondary text-white text-xs font-bold px-2 py-1 rounded">Unggulan</div>
                </div>
                <div className="p-6">
                    <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition">Sains & AI Terapan</h4>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">Kurikulum berbasis proyek untuk penguasaan Applied AI, Coding, dan pemanfaatan teknologi digital untuk dakwah.</p>
                    <a href="#" className="text-secondary font-semibold text-sm hover:underline">Selengkapnya &rarr;</a>
                </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 border border-slate-100 overflow-hidden group">
                <div className="h-48 bg-blue-100 relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-6">
                    <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition">Bisnis & Kemandirian</h4>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">Inkubator bisnis santri yang melatih mental wirausaha, manajemen keuangan, dan kepemimpinan sejak dini.</p>
                    <a href="#" className="text-secondary font-semibold text-sm hover:underline">Selengkapnya &rarr;</a>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Features