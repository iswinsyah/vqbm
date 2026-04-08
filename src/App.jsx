import { Routes, Route } from 'react-router-dom';
import FrontLayout from './FrontLayout';
import Home from './Home';
import Post from './Post';
import Page from './Page';

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
    </Routes>
  );
}

export default App;