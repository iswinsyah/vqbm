import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';

const PostManager = () => {
    const { posts, addPost, updatePost, deletePost } = useContent();
    const [isEditing, setIsEditing] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);

    const initialFormState = {
        title: '',
        category: '',
        date: new Date().toISOString().split('T')[0],
        image: '',
        content: ''
    };

    const [formData, setFormData] = useState(initialFormState);

    const handleEdit = (post) => {
        setIsEditing(true);
        setCurrentPost(post);
        setFormData(post);
    };

    const handleDelete = (id) => {
        if (window.confirm('Yakin ingin menghapus postingan ini?')) {
            deletePost(id);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            updatePost({ ...formData, id: currentPost.id });
        } else {
            addPost(formData);
        }
        setFormData(initialFormState);
        setIsEditing(false);
        setCurrentPost(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCancel = () => {
        setIsEditing(false);
        setCurrentPost(null);
        setFormData(initialFormState);
    };

    return (
        <div className="space-y-8">
            {/* Form Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">{isEditing ? 'Edit Postingan' : 'Tambah Postingan Baru'}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Judul</label>
                        <input type="text" name="title" value={formData.title} onChange={handleChange} required className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Kategori</label>
                            <input type="text" name="category" value={formData.category} onChange={handleChange} required className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Tanggal</label>
                            <input type="date" name="date" value={formData.date} onChange={handleChange} required className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Gambar (URL atau nama file di uploads)</label>
                        <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="https://... atau kegiatan.jpg" className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Konten</label>
                        <textarea name="content" value={formData.content} onChange={handleChange} rows="5" required className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500"></textarea>
                    </div>
                    <div className="flex gap-2">
                        <button type="submit" className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">{isEditing ? 'Simpan Perubahan' : 'Terbitkan'}</button>
                        {isEditing && <button type="button" onClick={handleCancel} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">Batal</button>}
                    </div>
                </form>
            </div>

            {/* List Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Daftar Postingan</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Judul</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {posts.map((post) => (
                                <tr key={post.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{post.title.substring(0, 40)}...</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.category}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button onClick={() => handleEdit(post)} className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                                        <button onClick={() => handleDelete(post.id)} className="text-red-600 hover:text-red-900">Hapus</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {posts.length === 0 && <p className="text-center py-4 text-gray-500">Belum ada postingan.</p>}
                </div>
            </div>
        </div>
    );
};

export default PostManager;
