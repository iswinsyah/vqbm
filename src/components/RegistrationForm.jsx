import React, { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        nama: '',
        phone: '',
        alamat: ''
    });
    const [status, setStatus] = useState({ loading: false, message: '', error: false });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, message: '', error: false });

        // Ambil jejak nomor WA agen dari LocalStorage (jika pengunjung ini dari link agen)
        const ref_phone = localStorage.getItem('agen_ref');
        
        const payload = {
            ...formData,
            ref: ref_phone || ''
        };

        try {
            const response = await fetch('/santri.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (result.success) {
                setStatus({ loading: false, message: result.message, error: false });
                setFormData({ nama: '', phone: '', alamat: '' }); // Reset form
                
                // Opsional: Bos bisa menghapus referal dari storage jika 1 orang hanya boleh 1x closing
                // localStorage.removeItem('agen_ref'); 
            } else {
                setStatus({ loading: false, message: result.error || 'Terjadi kesalahan.', error: true });
            }
        } catch (error) {
            setStatus({ loading: false, message: 'Gagal menghubungi server.', error: true });
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 border rounded-xl shadow-sm my-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Pendaftaran Santri</h2>
            
            {status.message && (
                <div className={`p-4 mb-6 rounded-lg ${status.error ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'}`}>
                    {status.message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                    <input type="text" name="nama" value={formData.nama} onChange={handleChange} required 
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Contoh: Abdullah" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nomor WhatsApp</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} required 
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Contoh: 081234567890" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Alamat Lengkap</label>
                    <textarea name="alamat" value={formData.alamat} onChange={handleChange} required rows="3"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Contoh: Jl. Merdeka No. 1, Malang" ></textarea>
                </div>
                
                <button type="submit" disabled={status.loading}
                    className={`w-full py-3 rounded-lg text-white font-bold transition-colors ${status.loading ? 'bg-gray-400' : 'bg-emerald-600 hover:bg-emerald-700'}`}>
                    {status.loading ? 'Memproses...' : 'Daftar Sekarang'}
                </button>
            </form>
        </div>
    );
};

export default RegistrationForm;