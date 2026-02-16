import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { useContent } from '../context/ContentContext';

const MenuManager = () => {
    const { menus, updateMenus } = useSite();
    const { pages } = useContent();

    const [newItem, setNewItem] = useState({
        title: '',
        url: '',
        parentId: ''
    });

    const parentMenus = menus.filter(m => !m.parentId);

    const handleAddItem = (e) => {
        e.preventDefault();
        const newMenu = {
            id: Date.now(),
            title: newItem.title,
            url: newItem.url,
            type: 'link',
            parentId: newItem.parentId ? parseInt(newItem.parentId) : null
        };
        updateMenus([...menus, newMenu]);
        setNewItem({ title: '', url: '', parentId: '' });
    };

    const handleDelete = (id) => {
        if (window.confirm('Hapus menu ini? (Sub-menu di dalamnya juga akan terhapus)')) {
            const updated = menus.filter(m => m.id !== id && m.parentId !== id);
            updateMenus(updated);
        }
    };

    const handlePageSelect = (e) => {
        const slug = e.target.value;
        if (!slug) return;
        const page = pages.find(p => p.slug === slug);
        if (page) {
            setNewItem(prev => ({
                ...prev,
                title: page.title,
                url: `/page/${page.slug}`
            }));
        }
    };

    const organizedMenus = parentMenus.map(parent => ({
        ...parent,
        children: menus.filter(child => child.parentId === parent.id)
    }));

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Tambah Menu Item</h2>
                <form onSubmit={handleAddItem} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Label Menu</label>
                            <input
                                type="text"
                                value={newItem.title}
                                onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500"
                                placeholder="Contoh: Tentang Kami"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">URL / Link</label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={newItem.url}
                                    onChange={(e) => setNewItem({ ...newItem, url: e.target.value })}
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500"
                                    placeholder="https://... atau /page/..."
                                />
                                <select
                                    className="border rounded-lg px-2 bg-gray-50 text-sm"
                                    onChange={handlePageSelect}
                                >
                                    <option value="">Pilih Halaman</option>
                                    {pages.map(p => (
                                        <option key={p.id} value={p.slug}>{p.title}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Induk (Parent)</label>
                        <select
                            value={newItem.parentId}
                            onChange={(e) => setNewItem({ ...newItem, parentId: e.target.value })}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500"
                        >
                            <option value="">-- Menu Utama (Top Level) --</option>
                            {parentMenus.map(m => (
                                <option key={m.id} value={m.id}>{m.title}</option>
                            ))}
                        </select>
                        <p className="text-xs text-gray-500 mt-1">Pilih menu lain jika ingin menjadikan item ini sebagai sub-menu.</p>
                    </div>

                    <button type="submit" className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">Tambah Menu</button>
                </form>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Struktur Menu Saat Ini</h2>
                <div className="space-y-4">
                    {organizedMenus.map(menu => (
                        <div key={menu.id} className="border rounded-lg p-3 bg-gray-50">
                            <div className="flex justify-between items-center mb-2">
                                <div className="font-bold text-gray-800">{menu.title} <span className="text-xs font-normal text-gray-500">({menu.url})</span></div>
                                <button onClick={() => handleDelete(menu.id)} className="text-red-500 text-sm hover:text-red-700">Hapus</button>
                            </div>

                            {menu.children.length > 0 && (
                                <div className="ml-6 space-y-2 border-l-2 border-gray-200 pl-4 mt-2">
                                    {menu.children.map(child => (
                                        <div key={child.id} className="flex justify-between items-center text-sm p-2 bg-white rounded shadow-sm">
                                            <div>{child.title} <span className="text-xs text-gray-400">({child.url})</span></div>
                                            <button onClick={() => handleDelete(child.id)} className="text-red-400 hover:text-red-600 text-xs">Hapus</button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    {menus.length === 0 && <p className="text-gray-500 text-center">Belum ada menu.</p>}
                </div>
            </div>
        </div>
    );
};

export default MenuManager;
