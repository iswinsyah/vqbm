import React, { createContext, useState, useEffect, useContext } from 'react';

const TestimonialContext = createContext();

export const useTestimonials = () => useContext(TestimonialContext);

export const TestimonialProvider = ({ children }) => {
    // Data default agar website tidak kosong saat pertama kali dibuka
    const defaultTestimonials = [
        {
            id: 1,
            name: "Dr. H. Ahmad Zaki, M.Si",
            role: "Dosen Universitas Negeri & Praktisi Dakwah",
            content: "Saya terkejut melihat anak-anak di sini. Mereka hafal Al-Quran dengan mutqin, tapi saat diajak bicara soal algoritma dan bisnis, wawasannya sangat luas. Ini model pendidikan yang kita butuhkan.",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 5
        },
        {
            id: 2,
            name: "Ibu Sarah Amalia",
            role: "Wali Santri Angkatan 2",
            content: "Awalnya ragu karena non-formal. Tapi setelah anak saya lulus, dia justru diterima di PTN jalur prestasi Tahfidz dan sekarang sudah punya bisnis web development sendiri untuk biaya kuliahnya. MasyaAllah.",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            rating: 5
        },
        {
            id: 3,
            name: "Ust. Budi Santoso",
            role: "Ketua Yayasan Dakwah Malang",
            content: "Villa Quran Baron berhasil memadukan ketenangan suasana villa dengan ketatnya disiplin ilmu. Tempat yang sempurna untuk kaderisasi umat.",
            image: "https://randomuser.me/api/portraits/men/85.jpg",
            rating: 5
        }
    ];

    const [testimonials, setTestimonials] = useState(defaultTestimonials);

    // Load data dari LocalStorage saat aplikasi dimuat
    useEffect(() => {
        const storedData = localStorage.getItem('siteTestimonials');
        if (storedData) {
            setTestimonials(JSON.parse(storedData));
        }
    }, []);

    // Simpan ke LocalStorage setiap kali ada perubahan
    useEffect(() => {
        localStorage.setItem('siteTestimonials', JSON.stringify(testimonials));
    }, [testimonials]);

    const addTestimonial = (data) => {
        const newTestimonial = { ...data, id: Date.now() };
        setTestimonials([newTestimonial, ...testimonials]);
    };

    const deleteTestimonial = (id) => {
        setTestimonials(testimonials.filter(t => t.id !== id));
    };

    return (
        <TestimonialContext.Provider value={{ testimonials, addTestimonial, deleteTestimonial }}>
            {children}
        </TestimonialContext.Provider>
    );
};