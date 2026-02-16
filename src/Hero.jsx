import { useSite } from './context/SiteContext';

const Hero = () => {
    const { settings } = useSite();
    return (
        <header className="relative bg-slate-900 h-[600px] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={settings.heroImage
                        ? (settings.heroImage.startsWith('http') ? settings.heroImage : `/uploads/${settings.heroImage}`)
                        : "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&auto=format&fit=crop&w=1587&q=80"
                    }
                    alt="Gedung Villa Quran"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
                <div className="max-w-3xl animate-fade-in-up">
                    <span className="inline-block py-1 px-3 rounded bg-secondary/20 text-secondary border border-secondary/50 text-xs font-bold tracking-wider mb-4 uppercase backdrop-blur-md">
                        {settings.home?.hero?.badge || 'Official Website'}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
                        {settings.heroTitle}
                    </h1>
                    <p className="text-lg text-slate-200 mb-8 leading-relaxed max-w-2xl border-l-4 border-secondary pl-4">
                        {settings.heroSubtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href={settings.home?.hero?.btn1Link || "#profil"} className="inline-block px-8 py-3 bg-white text-primary hover:bg-slate-100 rounded-lg font-bold transition text-center shadow-lg">
                            {settings.home?.hero?.btn1Text || "Profil Lembaga"}
                        </a>
                        <a href={settings.home?.hero?.btn2Link || "#program"} className="inline-block px-8 py-3 bg-transparent border border-white text-white hover:bg-white/10 rounded-lg font-semibold transition text-center backdrop-blur-sm">
                            {settings.home?.hero?.btn2Text || "Lihat Kurikulum"}
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero