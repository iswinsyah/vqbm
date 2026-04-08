import { Routes, Route } from 'react-router-dom';
import FrontLayout from './FrontLayout';
import Home from './Home';
import Post from './Post';
import Page from './Page';
import ReferralTracker from './components/ReferralTracker';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <>
      {/* Pelacak Referal Aktif di Semua Halaman */}
      <ReferralTracker />
      
      <Routes>
        {/* A. Tampilan Front End (Website Utama) */}
        <Route path="/" element={<FrontLayout />}>
          <Route index element={<Home />} />
          <Route path="post/:id" element={<Post />} />
          <Route path="page/:slug" element={<Page />} />
          <Route path="daftar" element={<RegistrationForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;