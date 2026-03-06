import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const DashboardLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100 font-sans">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white flex-shrink-0 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 text-xl font-bold border-b border-gray-800 flex justify-between items-center">
          <span>Dapur Admin</span>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden text-gray-400 hover:text-white">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <nav className="mt-6">
          <Link to="/admin" onClick={() => setSidebarOpen(false)} className="block py-3 px-6 hover:bg-gray-800 border-l-4 border-transparent hover:border-blue-500">Dashboard</Link>
          <Link to="/admin/posts" onClick={() => setSidebarOpen(false)} className="block py-3 px-6 hover:bg-gray-800 border-l-4 border-transparent hover:border-blue-500">Semua Post</Link>
          <Link to="/admin/pages" onClick={() => setSidebarOpen(false)} className="block py-3 px-6 hover:bg-gray-800 border-l-4 border-transparent hover:border-blue-500">Semua Halaman</Link>
          <Link to="/admin/testimonials" onClick={() => setSidebarOpen(false)} className="block py-3 px-6 hover:bg-gray-800 border-l-4 border-transparent hover:border-blue-500">Testimoni</Link>
          <Link to="/admin/menus" onClick={() => setSidebarOpen(false)} className="block py-3 px-6 hover:bg-gray-800 border-l-4 border-transparent hover:border-blue-500">Pengaturan Menu</Link>
          <Link to="/admin/settings" onClick={() => setSidebarOpen(false)} className="block py-3 px-6 hover:bg-gray-800 border-l-4 border-transparent hover:border-blue-500">Pengaturan Situs</Link>
          <div className="mt-6 pt-6 border-t border-gray-800">
            <Link to="/" className="block py-3 px-6 text-gray-400 hover:text-white hover:bg-gray-800">← Lihat Website</Link>
          </div>
        </nav>
      </aside>

      {/* Konten Admin */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="bg-white shadow-sm p-4 md:hidden flex items-center">
          <button onClick={() => setSidebarOpen(true)} className="text-gray-600 hover:text-gray-900">
            <i className="fa-solid fa-bars text-2xl"></i>
          </button>
          <span className="ml-4 font-bold text-lg text-gray-800">Menu Admin</span>
        </header>

        <div className="flex-1 p-8 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;