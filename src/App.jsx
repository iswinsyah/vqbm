import { Routes, Route } from 'react-router-dom';
import FrontLayout from './FrontLayout';
import DashboardLayout from './DashboardLayout';
import Home from './Home';
import Post from './Post';
import Page from './Page';
import Dashboard from './Dashboard';
import Settings from './admin/Settings';
import PostManager from './admin/PostManager';
import PageManager from './admin/PageManager';
import MenuManager from './admin/MenuManager';

function App() {
  return (
    <Routes>
      {/* A. Tampilan Front End (Website Utama) */}
      <Route path="/" element={<FrontLayout />}>
        <Route index element={<Home />} />
        <Route path="post/:id" element={<Post />} />
        <Route path="page/:slug" element={<Page />} />
        {/* Tambahkan halaman lain seperti 'Tentang', 'Kontak' di sini */}
      </Route>

      {/* B. Dashboard (Dapur Admin) */}
      <Route path="/admin" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="posts" element={<PostManager />} />
        <Route path="pages" element={<PageManager />} />
        <Route path="menus" element={<MenuManager />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;