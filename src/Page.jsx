import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useContent } from './context/ContentContext';
import Carousel from './components/Carousel';
import ShareButtons from './components/ShareButtons';

const Page = () => {
    const { slug } = useParams();
    const { getPageBySlug } = useContent();
    const page = getPageBySlug(slug);

    React.useEffect(() => {
        if (page) {
            document.title = `${page.title} - Villa Quran Baron Malang`;

            // Update Meta Tags function
            const updateMeta = (name, content, prop = false) => {
                let element = document.querySelector(prop ? `meta[property="${name}"]` : `meta[name="${name}"]`);
                if (!element) {
                    element = document.createElement('meta');
                    prop ? element.setAttribute('property', name) : element.setAttribute('name', name);
                    document.head.appendChild(element);
                }
                element.setAttribute('content', content);
            };

            updateMeta('description', page.metaDescription || page.content.substring(0, 160));
            updateMeta('og:title', page.title, true);
            updateMeta('og:description', page.metaDescription || page.content.substring(0, 160), true);

            if (page.image) {
                const imageUrl = page.image.startsWith('http') ? page.image : `${window.location.origin}/uploads/${page.image}`;
                updateMeta('og:image', imageUrl, true);
            }
            updateMeta('og:url', window.location.href, true);
            updateMeta('og:type', 'article', true);
        }
    }, [page]);

    if (!page) {
        return (
            <div className="max-w-3xl mx-auto px-4 py-32 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Halaman tidak ditemukan</h2>
                <Link to="/" className="text-emerald-600 hover:text-emerald-800 font-semibold">Kembali ke Beranda</Link>
            </div>
        );
    }

    return (
        <article className="max-w-4xl mx-auto px-4 py-16">
            <header className="mb-10 border-b border-gray-200 pb-8">
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                    {page.title}
                </h1>
            </header>

            {/* Image Handling: Carousel vs Single */}
            {page.imageDisplayMode === 'carousel' && page.gallery && page.gallery.length > 0 ? (
                <div className="mb-10">
                    <Carousel images={page.gallery} />
                </div>
            ) : (
                page.image && (
                    <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
                        <img
                            src={page.image.startsWith('http') ? page.image : `/uploads/${page.image}`}
                            alt={page.title}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                )
            )}

            <div className="prose prose-lg mx-auto text-gray-700 whitespace-pre-wrap">
                {page.content}
            </div>

            <div className="max-w-4xl mx-auto">
                <ShareButtons title={page.title} url={window.location.href} />
            </div>
        </article>
    );
};

export default Page;
