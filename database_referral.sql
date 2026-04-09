CREATE TABLE IF NOT EXISTS santri (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    nisn VARCHAR(50),
    ttl VARCHAR(100),
    jenis_kelamin VARCHAR(20),
    asal_sekolah VARCHAR(150),
    nama_ortu VARCHAR(255),
    phone VARCHAR(50) NOT NULL,
    alamat TEXT,
    program VARCHAR(100),
    agen_id INT DEFAULT NULL,
    status VARCHAR(50) DEFAULT 'Daftar',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS referral_visits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    agen_id INT NOT NULL,
    ip_address VARCHAR(50),
    visit_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);