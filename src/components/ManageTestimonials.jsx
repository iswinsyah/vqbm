import React, { useState } from 'react';
import { useTestimonials } from '../../context/TestimonialContext';

const ManageTestimonials = () => {
    const { testimonials, addTestimonial, deleteTestimonial } = useTestimonials();
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        content: '',
        image: '',
        rating: 5
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTestimonial(formData);
        setFormData({ name: '', role: '', content: '', image: '', rating: 5 });
        alert('Testimoni berhasil ditambahkan!');
    };

    const handleDelete = (id) => {
        if (window.confirm('Yakin ingin menghapus testimoni ini?')) {
            deleteTestimonial(id);
        }
    };

    return (
        <div className="space-y-8">
            {/* Form Tambah */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Tambah Testimoni Baru</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nama Tokoh/Wali</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Jabatan/Status</label>
                            <input type="text" name="role" value={formData.role} onChange={handleChange} required className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500" placeholder="Contoh: Wali Santri Angkatan 1" />
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Foto (URL)</label>
                        <input type="text" name="image" value={formData.image} onChange={handleChange} className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500" placeholder="https://..." />
                        <p className="text-xs text-gray-400 mt-1">Kosongkan jika tidak ada foto (akan pakai avatar default).</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Isi Testimoni</label>
                        <textarea name="content" value={formData.content} onChange={handleChange} rows="3" required className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500"></textarea>
                    </div>

                    <button type="submit" className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-bold transition">
                        <i className="fa-solid fa-plus mr-2"></i> Tambah Testimoni
                    </button>
                </form>
            </div>

            {/* Daftar Testimoni */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Daftar Testimoni Aktif</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Isi</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {testimonials.map((t) => (
                                <tr key={t.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{t.name}</div>
                                        <div className="text-xs text-gray-500">{t.role}</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500 max-w-md truncate">{t.content}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button onClick={() => handleDelete(t.id)} className="text-red-600 hover:text-red-900 bg-red-50 px-3 py-1 rounded-full">Hapus</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageTestimonials;