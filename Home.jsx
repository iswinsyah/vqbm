import { Link } from 'react-router-dom';
import Testimonials from '../Testimonials';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Mencetak Generasi Qur'ani</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">Villa Quran Baron Malang berkomitmen mendidik santri yang hafal Al-Qur'an dan berjiwa entrepreneur.</p>
        <Link to="/post/1" className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition">Baca Artikel Terbaru</Link>
      </div>

      {/* Section Artikel (Post Loop) */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Kabar Terbaru</h2>
        <div className="grid gap-8 md:grid-cols-3">
           {[1, 2, 3].map(i => (
             <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
               <div className="h-48 bg-gray-200"></div>
               <div className="p-6">
                 <h3 className="font-bold text-xl mb-2 text-gray-900">Kegiatan Santri Hari Ke-{i}</h3>
                 <p className="text-gray-600 mb-4 line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                 <Link to={`/post/${i}`} className="text-blue-600 font-medium hover:text-blue-800">Baca Selengkapnya →</Link>
               </div>
             </div>
           ))}
        </div>
      </div>

      {/* Testimonials Component */}
      <Testimonials />
    </div>
  );
};

export default Home;