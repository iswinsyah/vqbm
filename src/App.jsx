import { Routes, Route } from 'react-router-dom';
import FrontLayout from './layouts/FrontLayout';
import DashboardLayout from './layouts/DashboardLayout';
import Home from './pages/Home';
import Post from './pages/Post';
import Dashboard from './pages/admin/Dashboard';

function App() {
  return (
      <Routes>
        {/* A. Tampilan Front End (Website Utama) */}
        <Route path="/" element={<FrontLayout />}>
          <Route index element={<Home />} />
          <Route path="post/:id" element={<Post />} />
          {/* Tambahkan halaman lain seperti 'Tentang', 'Kontak' di sini */}
        </Route>

        {/* B. Dashboard (Dapur Admin) */}
        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="posts" element={<div className="p-4">Halaman Kelola Post (Coming Soon)</div>} />
          <Route path="pages" element={<div className="p-4">Halaman Kelola Halaman (Coming Soon)</div>} />
        </Route>
      </Routes>
  );
}

export default App;