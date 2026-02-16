import React, { useState, useEffect } from 'react';
import { useSite } from '../context/SiteContext';

const Settings = () => {
    const { settings, updateSettings } = useSite();
    const [formData, setFormData] = useState(settings);
    const [activeTab, setActiveTab] = useState('general');
    const [message, setMessage] = useState('');

    useEffect(() => {
        setFormData(settings);
    }, [settings]);

    // Recursive helper to update nested state
    const updateNestedState = (obj, path, value) => {
        if (path.length === 1) {
            return { ...obj, [path[0]]: value };
        }
        return {
            ...obj,
            [path[0]]: updateNestedState(obj[path[0]] || {}, path.slice(1), value)
        };
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        // name can be "title" or "home.hero.badge"
        if (name.includes('.')) {
            const path = name.split('.');
            setFormData(prev => updateNestedState(prev, path, value));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateSettings(formData);
        setMessage('Pengaturan berhasil disimpan!');
        setTimeout(() => setMessage(''), 3000);
    };

    const TabButton = ({ id, label, icon }) => (
        <button
            type="button"
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-lg transition ${activeTab === id
                ? 'bg-emerald-50 text-emerald-700'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
        >
            <i className={`fa-solid ${icon}`}></i>
            {label}
        </button>
    );

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pengaturan Situs</h2>

            {message && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                    {message}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                {/* Tabs Header */}
                <div className="flex flex-wrap gap-2 border-b border-gray-100 pb-4 mb-6">
                    <TabButton id="general" label="Umum" icon="fa-sliders" />
                    <TabButton id="hero" label="Hero Section" icon="fa-image" />
                    <TabButton id="profile" label="Profil" icon="fa-user-tie" />
                    <TabButton id="features" label="Fitur/Program" icon="fa-star" />
                    <TabButton id="news" label="Berita" icon="fa-newspaper" />
                    <TabButton id="ai" label="AI Chatbot" icon="fa-robot" />
                </div>

                {/* TAB: GENERAL */}
                {activeTab === 'general' && (
                    <div className="space-y-6 animate-fade-in">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Judul Situs</label>
                            <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Tagline</label>
                            <input type="text" name="description" value={formData.description} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Warna Utama</label>
                            <div className="flex gap-2">
                                <input type="color" name="primaryColor" value={formData.primaryColor || '#064E3B'} onChange={handleChange} className="h-10 w-20 rounded border cursor-pointer" />
                                <input type="text" name="primaryColor" value={formData.primaryColor || '#064E3B'} onChange={handleChange} className="flex-1 px-4 py-2 border rounded-lg uppercase" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Logo URL/Filename</label>
                            <input type="text" name="logo" value={formData.logo || ''} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500" placeholder="logo.png atau https://..." />
                        </div>
                    </div>
                )}

                {/* TAB: HERO */}
                {activeTab === 'hero' && (
                    <div className="space-y-6 animate-fade-in">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Badge Text (Kecil)</label>
                            <input type="text" name="home.hero.badge" value={formData.home?.hero?.badge || ''} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Judul Besar (Headline)</label>
                            <input type="text" name="heroTitle" value={formData.heroTitle} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg font-bold" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Sub-judul</label>
                            <textarea name="heroSubtitle" value={formData.heroSubtitle} onChange={handleChange} rows="3" className="w-full px-4 py-2 border rounded-lg"></textarea>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Teks Tombol 1</label>
                                <input type="text" name="home.hero.btn1Text" value={formData.home?.hero?.btn1Text || ''} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Link Tombol 1</label>
                                <input type="text" name="home.hero.btn1Link" value={formData.home?.hero?.btn1Link || ''} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Teks Tombol 2</label>
                                <input type="text" name="home.hero.btn2Text" value={formData.home?.hero?.btn2Text || ''} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Link Tombol 2</label>
                                <input type="text" name="home.hero.btn2Link" value={formData.home?.hero?.btn2Link || ''} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Background Image URL/File</label>
                            <input type="text" name="heroImage" value={formData.heroImage || ''} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
                        </div>
                    </div>
                )}

                {/* TAB: PROFILE */}
                {activeTab === 'profile' && (
                    <div className="space-y-6 animate-fade-in">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-4 border-b pb-2">Info Pimpinan</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Nama Mudir</label>
                                        <input type="text" name="home.profile.mudirName" value={formData.home?.profile?.mudirName || ''} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Jabatan</label>
                                        <input type="text" name="home.profile.mudirTitle" value={formData.home?.profile?.mudirTitle || ''} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Foto URL/File</label>
                                        <input type="text" name="home.profile.mudirImage" value={formData.home?.profile?.mudirImage || ''} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-4 border-b pb-2">Konten Sambutan</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Judul Kecil (Atas)</label>
                                        <input type="text" name="home.profile.title" value={formData.home?.profile?.title || ''} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Headline Utama</label>
                                        <input type="text" name="home.profile.welcomeHeadline" value={formData.home?.profile?.welcomeHeadline || ''} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg font-bold" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Isi Sambutan</label>
                                        <textarea name="home.profile.welcomeContent" value={formData.home?.profile?.welcomeContent || ''} onChange={handleChange} rows="6" className="w-full px-4 py-2 border rounded-lg"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB: FEATURES */}
                {activeTab === 'features' && (
                    <div className="space-y-8 animate-fade-in">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Judul Seksi Fitur</label>
                            <input type="text" name="home.features.sectionTitle" value={formData.home?.features?.sectionTitle || ''} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg font-bold" />
                        </div>

                        {[1, 2, 3].map(num => (
                            <div key={num} className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h4 className="font-bold text-emerald-800 mb-3">Kartu {num}</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 mb-1">Judul Kartu</label>
                                        <input type="text" name={`home.features.card${num}.title`} value={formData.home?.features?.[`card${num}`]?.title || ''} onChange={handleChange} className="w-full px-3 py-2 border rounded text-sm" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 mb-1">Gambar URL</label>
                                        <input type="text" name={`home.features.card${num}.image`} value={formData.home?.features?.[`card${num}`]?.image || ''} onChange={handleChange} className="w-full px-3 py-2 border rounded text-sm" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-xs font-bold text-gray-500 mb-1">Deskripsi</label>
                                        <textarea name={`home.features.card${num}.desc`} value={formData.home?.features?.[`card${num}`]?.desc || ''} onChange={handleChange} rows="2" className="w-full px-3 py-2 border rounded text-sm"></textarea>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* TAB: NEWS */}
                {activeTab === 'news' && (
                    <div className="space-y-6 animate-fade-in">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Judul Seksi Berita</label>
                            <input type="text" name="home.news.title" value={formData.home?.news?.title || ''} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg font-bold" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Sub-judul Seksi Berita</label>
                            <input type="text" name="home.news.subtitle" value={formData.home?.news?.subtitle || ''} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
                        </div>
                    </div>
                )}

                {/* TAB: AI CHATBOT */}
                {activeTab === 'ai' && (
                    <div className="space-y-6 animate-fade-in">
                        <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                            <h4 className="font-bold text-purple-800">Panduan Google Gemini API</h4>
                            <p className="text-sm text-purple-700 mt-1">
                                Untuk mengaktifkan Chatbot, Anda memerlukan API Key gratis dari Google. <br />
                                1. Kunjungi <a href="https://aistudio.google.com/app/apikey" target="_blank" className="underline font-bold">Google AI Studio</a>.<br />
                                2. Klik "Create API Key".<br />
                                3. Salin kode kunci tersebut dan tempel di kolom "API Key" di bawah ini.
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Google Gemini API Key</label>
                            <input
                                type="password"
                                name="geminiApiKey"
                                value={formData.geminiApiKey || ''}
                                onChange={handleChange}
                                placeholder="Contoh: AIzaSyD..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 font-mono"
                            />
                            <p className="text-xs text-gray-500 mt-1">Key ini tersimpan di browser Anda (LocalStorage). Aman untuk penggunaan pribadi/lokal.</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Instruksi / Persona AI (Product Knowledge)</label>
                            <textarea
                                name="aiPersona"
                                value={formData.aiPersona || ''}
                                onChange={handleChange}
                                rows="8"
                                placeholder="Tuliskan semua info penting di sini. Contoh: Biaya pendaftaran 500rb, seragam beli di koperasi, jam besuk hari minggu, dll."
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                            ></textarea>
                            <p className="text-xs text-gray-500 mt-1">
                                Tuliskan "Product Knowledge" atau informasi penting lainnya di sini. <br />
                                AI akan menggabungkan info ini dengan data Profil & Program yang sudah ada di website.
                            </p>
                        </div>
                    </div>
                )}

                <div className="pt-6 border-t mt-6 flex justify-end">
                    <button
                        type="submit"
                        className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-700 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
                    >
                        Simpan Semua Perubahan
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Settings;
