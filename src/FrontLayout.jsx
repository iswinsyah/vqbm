import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const FrontLayout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      <Navbar />
      {/* Tambahkan padding-top agar konten tidak tertutup navbar fixed */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default FrontLayout;