import { useSite } from './context/SiteContext';

const Profile = () => {
    const { settings } = useSite();
    const ps = settings.home?.profile || {};

    return (
        <section id="profil" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Foto Mudir */}
                    <div className="w-full md:w-1/3 relative">
                        <div className="absolute inset-0 bg-secondary/10 transform rotate-3 rounded-2xl"></div>
                        <img
                            src={ps.mudirImage || "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                            alt={ps.mudirName}
                            className="relative rounded-2xl shadow-2xl w-full object-cover h-[400px]"
                        />
                        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border-l-4 border-primary">
                            <h4 className="font-bold text-slate-900">{ps.mudirName || "Ustadz Fulan"}</h4>
                            <p className="text-xs text-secondary font-bold uppercase">{ps.mudirTitle || "Pimpinan"}</p>
                        </div>
                    </div>

                    {/* Teks Sambutan */}
                    <div className="w-full md:w-2/3">
                        <h2 className="text-secondary font-bold tracking-wide uppercase text-sm mb-2">{ps.title || "Ahlan Wa Sahlan"}</h2>
                        <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">{ps.welcomeHeadline || "Membangun Generasi Qurani"}</h3>
                        <div className="prose prose-slate text-slate-600 leading-relaxed">
                            <p className="mb-4">
                                <span className="text-4xl float-left mr-2 font-serif text-primary">"</span>
                                {ps.welcomeContent || "Konten sambutan belum diisi."}
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