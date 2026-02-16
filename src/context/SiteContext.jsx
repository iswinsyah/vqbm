import React, { createContext, useState, useEffect, useContext } from 'react';

const SiteContext = createContext();

export const useSite = () => useContext(SiteContext);

export const SiteProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    title: 'Villa Quran Baron Malang',
    description: 'Pusat Pendidikan Al-Quran Terbaik di Malang',
    heroTitle: 'Generasi Qurani Berakhlaq Mulia',
    heroSubtitle: 'Mewujudkan generasi penghafal Al-Quran yang berkarakter, cerdas, dan mandiri.',
    primaryColor: '#064E3B', // Emerald Green
    heroImage: '', // URL or path to image
    logo: '', // URL or path to logo

    // Frontpage Sections
    home: {
      hero: {
        badge: 'Official Website',
        btn1Text: 'Profil Lembaga',
        btn1Link: '#profil',
        btn2Text: 'Lihat Kurikulum',
        btn2Link: '#program'
      },
      profile: {
        mudirName: 'Ustadz Fulan Al-Hafidz, Lc., M.Ag',
        mudirTitle: 'Mudir / Pimpinan Pesantren',
        mudirImage: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        welcomeTitle: 'Ahlan Wa Sahlan',
        welcomeHeadline: 'Membangun Generasi yang Menggenggam Dunia dengan Al-Quran',
        welcomeContent: 'Di era disrupsi teknologi ini, kita tidak bisa hanya berdiam diri. Villa Quran Baron hadir bukan sekadar sebagai tempat menghafal Al-Quran, tetapi sebagai laboratorium peradaban.'
      },
      features: {
        sectionTitle: 'Pilar Akademik',
        card1: {
          title: 'Tahfidz & Tsaqofah',
          desc: 'Program intensif hafalan 30 juz bersanad dengan pendalaman kitab kuning.',
          image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        card2: {
          title: 'Sains & AI Terapan',
          desc: 'Kurikulum berbasis proyek untuk penguasaan Applied AI, Coding, dan pemanfaatan teknologi digital.',
          image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        card3: {
          title: 'Bisnis & Kemandirian',
          desc: 'Inkubator bisnis santri yang melatih mental wirausaha dan manajemen keuangan.',
          image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
      },
      news: {
        title: 'Kabar Villa Quran',
        subtitle: 'Update kegiatan santri dan prestasi terbaru.'
      }
    }
  });

  // Analytics Stats
  const [stats, setStats] = useState({
    visits: 0,
    shares: 0,
    contacts: 0,
    registrations: 0,
    staffShares: {} // { 'budi': 10, 'ani': 5 }
  });

  // Load stats from localStorage
  useEffect(() => {
    const savedStats = localStorage.getItem('siteStats');
    if (savedStats) setStats(JSON.parse(savedStats));
    else {
      // Init 'visits' if new
      setStats(prev => ({ ...prev, visits: 1 }));
      localStorage.setItem('siteStats', JSON.stringify({ ...stats, visits: 1 }));
    }
  }, []);

  // Save stats to localStorage
  useEffect(() => {
    localStorage.setItem('siteStats', JSON.stringify(stats));
  }, [stats]);

  const trackEvent = (type, payload = null) => {
    setStats(prev => {
      const newStats = { ...prev };
      if (type === 'visit') newStats.visits += 1;
      if (type === 'share') {
        newStats.shares += 1;
        if (payload) { // payload IS staffName
          newStats.staffShares[payload] = (newStats.staffShares[payload] || 0) + 1;
        }
      }
      if (type === 'contact') newStats.contacts += 1;
      if (type === 'register') newStats.registrations += 1;
      return newStats;
    });
  };

  const [menus, setMenus] = useState([
    { id: 1, title: 'Beranda', url: '/', type: 'link', parentId: null },
    { id: 2, title: 'Profil', url: '#', type: 'link', parentId: null },
    { id: 3, title: 'Tentang Kami', url: '#profil', type: 'link', parentId: 2 },
    { id: 4, title: 'Visi & Misi', url: '#profil', type: 'link', parentId: 2 },
    { id: 5, title: 'Program', url: '#', type: 'link', parentId: null },
    { id: 6, title: 'Tahfidz Bersanad', url: '#program', type: 'link', parentId: 5 },
    { id: 7, title: 'AI & Teknologi', url: '#program', type: 'link', parentId: 5 },
    { id: 8, title: 'Kegiatan', url: '#kegiatan', type: 'link', parentId: null },
    { id: 9, title: 'Fasilitas', url: '#galeri', type: 'link', parentId: null },
    { id: 10, title: 'Berita', url: '#berita', type: 'link', parentId: null },
  ]);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('siteSettings');
    const savedMenus = localStorage.getItem('siteMenus');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
    if (savedMenus) {
      setMenus(JSON.parse(savedMenus));
    }
  }, []);

  // Update CSS variables when settings change
  useEffect(() => {
    document.documentElement.style.setProperty('--color-primary', settings.primaryColor);
  }, [settings.primaryColor]);

  const updateSettings = (newSettings) => {
    setSettings((prev) => {
      const updated = { ...prev, ...newSettings };
      localStorage.setItem('siteSettings', JSON.stringify(updated));
      return updated;
    });
  };

  const updateMenus = (newMenus) => {
    setMenus(newMenus);
    localStorage.setItem('siteMenus', JSON.stringify(newMenus));
  };

  return (
    <SiteContext.Provider value={{ settings, updateSettings, menus, updateMenus }}>
      {children}
    </SiteContext.Provider>
  );
};
