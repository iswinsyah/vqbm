import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();
  
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <header className="mb-8 text-center">
        <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Kategori Berita</span>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">Judul Postingan Nomor {id}</h1>
        <time className="text-gray-500">14 Februari 2026</time>
      </header>
      
      <div className="prose prose-lg mx-auto text-gray-700">
        <p className="lead">Ini adalah contoh halaman <strong>Single Post</strong>. Di WordPress, ini setara dengan tampilan ketika Anda mengklik salah satu judul artikel.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac odio ante. Nulla facilisi. Curabitur ut aliquet augue.</p>
        <h3>Sub Judul Artikel</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <blockquote>
          "Pendidikan adalah senjata paling mematikan di dunia, karena dengan pendidikan, Anda dapat mengubah dunia."
        </blockquote>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
      </div>
    </article>
  );
};

export default Post;