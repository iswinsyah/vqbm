import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useContent } from './context/ContentContext';
import Carousel from './components/Carousel';
import ShareButtons from './components/ShareButtons';

const Post = () => {
  const { id } = useParams();
  const { getPost } = useContent();
  const post = getPost(id);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-32 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Postingan tidak ditemukan</h2>
        <Link to="/" className="text-emerald-600 hover:text-emerald-800 font-semibold">Kembali ke Beranda</Link>
      </div>
    );
  }

  useEffect(() => {
    if (post) {
      document.title = `${post.title} - Villa Quran Baron Malang`;

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

      updateMeta('description', post.metaDescription || post.content.substring(0, 160));
      updateMeta('og:title', post.title, true);
      updateMeta('og:description', post.metaDescription || post.content.substring(0, 160), true);

      if (post.image) {
        const imageUrl = post.image.startsWith('http') ? post.image : `${window.location.origin}/uploads/${post.image}`;
        updateMeta('og:image', imageUrl, true);
      }
      updateMeta('og:url', window.location.href, true);
      updateMeta('og:type', 'article', true);
    }
  }, [post]);

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <header className="mb-8 text-center">
        <span className="inline-block py-1 px-3 rounded bg-emerald-100 text-emerald-800 text-sm font-semibold tracking-wide uppercase mb-3">
          {post.category}
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-bold mt-2 mb-6 text-gray-900 leading-tight">
          {post.title}
        </h1>
        <time className="text-gray-500 font-medium">{post.date}</time>
      </header>

      {/* Image Handling: Carousel vs Single */}
      {post.imageDisplayMode === 'carousel' && post.gallery && post.gallery.length > 0 ? (
        <div className="mb-10">
          <Carousel images={post.gallery} />
        </div>
      ) : (
        post.image && (
          <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
            <img
              src={post.image.startsWith('http') ? post.image : `/uploads/${post.image}`}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )
      )}

      <div className="prose prose-lg mx-auto text-gray-700 whitespace-pre-wrap">
        {post.content}
      </div>

      <div className="max-w-3xl mx-auto">
        <ShareButtons title={post.title} url={window.location.href} />
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link to="/" className="text-slate-600 hover:text-primary font-medium">
          &larr; Kembali ke Beranda
        </Link>
      </div>
    </article>
  );
};

export default Post;