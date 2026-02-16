import { Outlet, Link } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex-shrink-0 hidden md:block">
        <div className="p-6 text-xl font-bold border-b border-gray-800">Dapur Admin</div>
        <nav className="mt-6">
          <Link to="/admin" className="block py-3 px-6 hover:bg-gray-800 border-l-4 border-transparent hover:border-blue-500">Dashboard</Link>
          <Link to="/admin/posts" className="block py-3 px-6 hover:bg-gray-800 border-l-4 border-transparent hover:border-blue-500">Semua Post</Link>
          <Link to="/admin/pages" className="block py-3 px-6 hover:bg-gray-800 border-l-4 border-transparent hover:border-blue-500">Semua Halaman</Link>
          <Link to="/admin/menus" className="block py-3 px-6 hover:bg-gray-800 border-l-4 border-transparent hover:border-blue-500">Pengaturan Menu</Link>
          <Link to="/admin/settings" className="block py-3 px-6 hover:bg-gray-800 border-l-4 border-transparent hover:border-blue-500">Pengaturan Situs</Link>
          <div className="mt-6 pt-6 border-t border-gray-800">
            <Link to="/" className="block py-3 px-6 text-gray-400 hover:text-white hover:bg-gray-800">← Lihat Website</Link>
          </div>
        </nav>
      </aside>

      {/* Konten Admin */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;