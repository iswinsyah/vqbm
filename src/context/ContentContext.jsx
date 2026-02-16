import React, { createContext, useState, useEffect, useContext } from 'react';

const ContentContext = createContext();

export const useContent = () => useContext(ContentContext);

export const ContentProvider = ({ children }) => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "Kunjungan Edukasi Santri ke Techno Park Malang",
            date: "2026-02-12",
            category: "Kegiatan",
            image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            content: "Santri Villa Quran Baron Malang melakukan kunjungan edukasi ke Techno Park Malang untuk mempelajari perkembangan teknologi terbaru...",
            focusKeyword: "Techno Park Malang",
            metaDescription: "Dokumentasi kunjungan edukasi santri Villa Quran Baron Malang ke Techno Park Malang untuk belajar teknologi."
        },
        {
            id: 2,
            title: "Tim AI Villa Quran Juara 2 Lomba Inovasi Teknologi Nasional",
            date: "2026-02-10",
            category: "Prestasi",
            image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            content: "Alhamdulillah, tim santri berhasil meraih juara 2 dalam lomba inovasi teknologi..."
        },
        {
            id: 3,
            title: "Dauroh Kitab Adabul Alim Wal Muta'alim",
            date: "2026-02-05",
            category: "Kajian",
            image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            content: "Kajian rutin kitab Adabul Alim wal Muta'alim bersama Syaikh Ahmad..."
        },
        {
            id: 4,
            title: "Panen Raya Madu Klanceng Hasil Budidaya Santri",
            date: "2026-02-01",
            category: "Bisnis",
            image: "https://images.unsplash.com/photo-1542810634-71277d95dc24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            content: "Program kemandirian santri melalui budidaya lebah klanceng telah membuahkan hasil..."
        }
    ]);

    const [pages, setPages] = useState([
        {
            id: 1,
            slug: "tentang-kami",
            title: "Tentang Kami",
            content: "Villa Quran Baron Malang adalah lembaga pendidikan...",
            focusKeyword: "Tentang Kami",
            metaDescription: "Halaman profil lengkap Villa Quran Baron Malang."
        }
    ]);

    // Load from localStorage
    useEffect(() => {
        const savedPosts = localStorage.getItem('sitePosts');
        const savedPages = localStorage.getItem('sitePages');
        if (savedPosts) setPosts(JSON.parse(savedPosts));
        if (savedPages) setPages(JSON.parse(savedPages));
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem('sitePosts', JSON.stringify(posts));
    }, [posts]);

    useEffect(() => {
        localStorage.setItem('sitePages', JSON.stringify(pages));
    }, [pages]);

    // CRUD Operations - Posts
    const addPost = (post) => {
        const newPost = { ...post, id: Date.now() };
        setPosts([newPost, ...posts]);
    };

    const updatePost = (updatedPost) => {
        setPosts(posts.map(p => p.id === updatedPost.id ? updatedPost : p));
    };

    const deletePost = (id) => {
        setPosts(posts.filter(p => p.id !== id));
    };

    const getPost = (id) => posts.find(p => p.id === parseInt(id) || p.id === id);

    // CRUD Operations - Pages
    const addPage = (page) => {
        const newPage = { ...page, id: Date.now() };
        setPages([...pages, newPage]);
    };

    const updatePage = (updatedPage) => {
        setPages(pages.map(p => p.id === updatedPage.id ? updatedPage : p));
    };

    const deletePage = (id) => {
        setPages(pages.filter(p => p.id !== id));
    };

    const getPageBySlug = (slug) => pages.find(p => p.slug === slug);

    return (
        <ContentContext.Provider value={{
            posts, addPost, updatePost, deletePost, getPost,
            pages, addPage, updatePage, deletePage, getPageBySlug
        }}>
            {children}
        </ContentContext.Provider>
    );
};
