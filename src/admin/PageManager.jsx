import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';

const PageManager = () => {
    const { pages, addPage, updatePage, deletePage } = useContent();
    const [isEditing, setIsEditing] = useState(false);
    const [currentPage, setCurrentPage] = useState(null);

    const initialFormState = {
        title: '',
        slug: '',
        content: ''
    };

    const [formData, setFormData] = useState(initialFormState);

    const handleEdit = (page) => {
        setIsEditing(true);
        setCurrentPage(page);
        setFormData(page);
    };

    const handleDelete = (id) => {
        if (window.confirm('Yakin ingin menghapus halaman ini?')) {
            deletePage(id);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple slug generator if empty
        let slugToUse = formData.slug;
        if (!slugToUse) {
            slugToUse = formData.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        }

        const pageData = { ...formData, slug: slugToUse };

        if (isEditing) {
            updatePage({ ...pageData, id: currentPage.id });
        } else {
            addPage(pageData);
        }
        setFormData(initialFormState);
        setIsEditing(false);
        setCurrentPage(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCancel = () => {
        setIsEditing(false);
        setCurrentPage(null);
        setFormData(initialFormState);
    };

    return (
        <div className="space-y-8">
            {/* Form Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">{isEditing ? 'Edit Halaman' : 'Tambah Halaman Baru'}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Judul Halaman</label>
                            <input type="text" name="title" value={formData.title} onChange={handleChange} required className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Slug (URL)</label>
                            <input type="text" name="slug" value={formData.slug} onChange={handleChange} placeholder="contoh: tentang-kami" className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500" />
                            <p className="text-xs text-gray-400 mt-1">Biarkan kosong untuk generate otomatis dari judul.</p>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Konten</label>
                        <textarea name="content" value={formData.content} onChange={handleChange} rows="10" required className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500"></textarea>
                    </div>
                    <div className="flex gap-2">
                        <button type="submit" className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">{isEditing ? 'Simpan Perubahan' : 'Terbitkan'}</button>
                        {isEditing && <button type="button" onClick={handleCancel} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">Batal</button>}
                    </div>
                </form>
            </div>

            {/* List Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Daftar Halaman</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Judul</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Slug</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">View</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {pages.map((page) => (
                                <tr key={page.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{page.title}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">/{page.slug}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-500"><a href={`/page/${page.slug}`} target="_blank" rel="noreferrer">Lihat</a></td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button onClick={() => handleEdit(page)} className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                                        <button onClick={() => handleDelete(page.id)} className="text-red-600 hover:text-red-900">Hapus</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {pages.length === 0 && <p className="text-center py-4 text-gray-500">Belum ada halaman.</p>}
                </div>
            </div>
        </div>
    );
};

export default PageManager;
