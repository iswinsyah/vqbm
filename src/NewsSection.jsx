import { useContent } from './context/ContentContext';
import { useSite } from './context/SiteContext';
import { Link } from 'react-router-dom';

const NewsSection = () => {
    const { posts } = useContent();
    const { settings } = useSite();
    const latestPosts = posts.slice(0, 4);

    return (
        <section id="berita" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-slate-900">{settings.home?.news?.title || "Kabar Villa Quran"}</h2>
                        <p className="text-slate-500 mt-2">{settings.home?.news?.subtitle || "Update kegiatan santri dan prestasi terbaru."}</p>
                    </div>
                    <a href="#" className="hidden md:inline-block px-4 py-2 border border-slate-300 rounded-lg text-slate-600 hover:border-primary hover:text-primary transition text-sm font-medium">Lihat Semua Berita</a>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {latestPosts.map((item, index) => (
                        <article key={index} className="bg-white group cursor-pointer">
                            <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                                <img
                                    src={item.image.startsWith('http') ? item.image : `/uploads/${item.image}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                    alt={item.title}
                                />
                                <div className={`absolute bottom-0 left-0 bg-primary/80 text-white text-xs px-3 py-1`}>{item.category}</div>
                            </div>
                            <div className="text-xs text-slate-400 mb-2"><i className="fa-regular fa-calendar mr-1"></i> {item.date}</div>
                            <Link to={`/post/${item.id}`} className="block">
                                <h3 className="font-bold text-slate-800 leading-snug group-hover:text-primary transition">{item.title}</h3>
                            </Link>
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