import React, { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        nama: '',
        nisn: '',
        ttl: '',
        jenis_kelamin: 'Laki-laki',
        asal_sekolah: '',
        nama_ortu: '',
        phone: '',
        alamat: '',
        program: 'SMP Tahfidz Tech'
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
                setFormData({ 
                    nama: '', 
                    nisn: '', 
                    ttl: '', 
                    jenis_kelamin: 'Laki-laki', 
                    asal_sekolah: '', 
                    nama_ortu: '', 
                    phone: '', 
                    alamat: '', 
                    program: 'SMP Tahfidz Tech' 
                }); // Reset form
                
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
        <div className="max-w-2xl mx-auto bg-white p-8 border rounded-xl shadow-sm my-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Formulir Pendaftaran SPMB</h2>
            <p className="text-center text-gray-500 mb-8 text-sm">Isi data di bawah ini dengan lengkap dan benar.</p>
            
            {status.message && (
                <div className={`p-4 mb-6 rounded-lg ${status.error ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'}`}>
                    {status.message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* DATA SANTRI */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-4">
                    <h3 className="font-bold text-emerald-800 mb-4 border-b pb-2">A. Data Calon Santri</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                            <input type="text" name="nama" value={formData.nama} onChange={handleChange} required 
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm" placeholder="Sesuai Akta Kelahiran" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">NISN / NIK</label>
                            <input type="text" name="nisn" value={formData.nisn} onChange={handleChange} 
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm" placeholder="Nomor Induk Siswa Nasional" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Tempat, Tanggal Lahir</label>
                            <input type="text" name="ttl" value={formData.ttl} onChange={handleChange} required 
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm" placeholder="Contoh: Malang, 17 Agustus 2010" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Kelamin</label>
                            <select name="jenis_kelamin" value={formData.jenis_kelamin} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm">
                                <option value="Laki-laki">Laki-laki</option>
                                <option value="Perempuan">Perempuan</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Asal Sekolah</label>
                            <input type="text" name="asal_sekolah" value={formData.asal_sekolah} onChange={handleChange} required 
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm" placeholder="Nama Sekolah Sebelumnya" />
                        </div>
                    </div>
                </div>

                {/* DATA ORTU */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-4">
                    <h3 className="font-bold text-emerald-800 mb-4 border-b pb-2">B. Data Orang Tua / Wali</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nama Orang Tua / Wali</label>
                            <input type="text" name="nama_ortu" value={formData.nama_ortu} onChange={handleChange} required 
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm" placeholder="Nama Ayah / Ibu / Wali" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nomor WhatsApp Aktif</label>
                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required 
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm" placeholder="Contoh: 081234567890" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Alamat Lengkap</label>
                            <textarea name="alamat" value={formData.alamat} onChange={handleChange} required rows="2"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm" placeholder="Nama Jalan, RT/RW, Desa, Kecamatan, Kota/Kabupaten" ></textarea>
                        </div>
                    </div>
                </div>
                
                {/* PROGRAM */}
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100 mb-6">
                    <h3 className="font-bold text-emerald-800 mb-4 border-b border-emerald-200 pb-2">C. Pilihan Program Pendidikan</h3>
                    <select name="program" value={formData.program} onChange={handleChange} className="w-full px-4 py-3 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none font-bold text-emerald-900">
                        <option value="SMP Tahfidz Tech">SMP Tahfidz Tech</option>
                        <option value="SMApreneur AI">SMApreneur AI</option>
                        <option value="Dauroh Intensif (Camp)">Dauroh Intensif (Camp)</option>
                        <option value="Pesantren Mahasiswa">Pesantren Mahasiswa</option>
                    </select>
                </div>
                
                <button type="submit" disabled={status.loading}
                    className={`w-full py-4 text-lg rounded-xl text-white font-bold transition-colors shadow-lg ${status.loading ? 'bg-gray-400' : 'bg-emerald-600 hover:bg-emerald-700 hover:shadow-xl transform hover:-translate-y-1'}`}>
                    {status.loading ? 'Memproses...' : 'Daftar Sekarang'}
                </button>
            </form>
        </div>
    );
};

export default RegistrationForm;