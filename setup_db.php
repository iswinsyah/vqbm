<?php
// Script setup database otomatis untuk development lokal
require_once 'config.php';

echo "<h2>🔧 Database Setup Helper</h2>";

// 1. Create table agents if not exists
$sql_agents = "CREATE TABLE IF NOT EXISTS agents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    commission VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

if ($conn->query($sql_agents) === TRUE) {
    echo "✅ Tabel 'agents' siap.<br>";
} else {
    echo "❌ Gagal membuat tabel agents: " . $conn->error . "<br>";
}

// 2. Create table santri if not exists
$sql_santri = "CREATE TABLE IF NOT EXISTS santri (
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
)";

if ($conn->query($sql_santri) === TRUE) {
    echo "✅ Tabel 'santri' siap.<br>";
} else {
    echo "❌ Gagal membuat tabel santri: " . $conn->error . "<br>";
}

// 3. Create table referral_visits if not exists
$sql_visits = "CREATE TABLE IF NOT EXISTS referral_visits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    agen_id INT NOT NULL,
    ip_address VARCHAR(50),
    visit_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

if ($conn->query($sql_visits) === TRUE) {
    echo "✅ Tabel 'referral_visits' siap.<br>";
} else {
    echo "❌ Gagal membuat tabel referral_visits: " . $conn->error . "<br>";
}

// 4. Create common settings tables or default data
$sql_settings = "CREATE TABLE IF NOT EXISTS settings (
    setting_key VARCHAR(100) PRIMARY KEY,
    setting_value TEXT
)";
$conn->query($sql_settings);

$sql_check_settings = "SELECT COUNT(*) as count FROM settings";
$res = $conn->query($sql_check_settings)->fetch_assoc();
if ($res['count'] == 0) {
    $sql_insert_settings = "INSERT INTO settings (setting_key, setting_value) VALUES 
        ('title', 'Villa Quran Baron Malang'),
        ('description', 'Pusat Pendidikan Al-Quran Terbaik di Malang'),
        ('primaryColor', '#064E3B'),
        ('secondaryColor', '#D97706'),
        ('logo', '')";
    $conn->query($sql_insert_settings);
    echo "✅ Data default settings ditambahkan.<br>";
}

echo "<h3>Siap digunakan! Silahkan hapus file 'setup_db.php' ini demi keamanan jika sudah selesai.</h3>";
$conn->close();
?>
