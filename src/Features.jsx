import { useSite } from './context/SiteContext';

const Features = () => {
    const { settings } = useSite();
    const feats = settings.home?.features || {};
    const cards = [feats.card1, feats.card2, feats.card3];

    return (
        <section id="program" className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold text-slate-900">{feats.sectionTitle || "Program Unggulan"}</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 border border-slate-100 overflow-hidden group">
                            <div className="h-48 bg-slate-200 relative overflow-hidden">
                                <img
                                    src={card?.image || "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                    alt={card?.title}
                                />
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition"></div>
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition">{card?.title || "Judul Program"}</h4>
                                <p className="text-slate-600 text-sm mb-4 line-clamp-3">{card?.desc || "Deskripsi program..."}</p>
                                <a href="#" className="text-secondary font-semibold text-sm hover:underline">Selengkapnya &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features