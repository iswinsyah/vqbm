import { useEffect } from 'react';

const ReferralTracker = () => {
    useEffect(() => {
        // Membaca parameter ?ref= dari URL URL website
        const params = new URLSearchParams(window.location.search);
        const ref = params.get('ref');

        if (ref) {
            // 1. Simpan ke LocalStorage agar referal tidak hilang walau browser di-refresh
            localStorage.setItem('agen_ref', ref);

            // 2. Laporkan ke backend bahwa link referal agen ini telah diklik (Trafik)
            fetch('/track_referral.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ref: ref })
            })
            .then(res => res.json())
            .then(data => console.log('Trafik referal dicatat:', data))
            .catch(err => console.error('Gagal mencatat referal:', err));
        }
    }, []);

    return null; // Komponen ini berjalan di background, tidak perlu merender apa pun
};

export default ReferralTracker;