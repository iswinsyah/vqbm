import { Outlet, Link } from 'react-router-dom';

const FrontLayout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      {/* Header / Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-900">VQBM</Link>
          </div>
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium">Beranda</Link>
            <Link to="/post/1" className="text-gray-600 hover:text-blue-600 font-medium">Contoh Post</Link>
            <Link to="/admin" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">Login Admin</Link>
          </div>
        </nav>
      </header>

      {/* Konten Utama */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Villa Quran Baron Malang. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FrontLayout;