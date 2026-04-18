<?php
// Konfigurasi CORS agar React/Frontend bisa mengakses API ini
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Konfigurasi Database (Sesuaikan dengan lingkungan LOCAL atau HOSTINGER Anda)
$host = "localhost";
$username = "root"; // Default XAMPP/Laragon biasanya 'root'
$password = "";     // Default XAMPP/Laragon biasanya kosong ('')
$database = "vqbm_db"; // Ganti dengan nama database Anda

// 1. Coba koneksi ke server MySQL saja (tanpa pilih database dulu)
$conn = new mysqli($host, $username, $password);

if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode([
        "error" => "Koneksi ke MySQL gagal.",
        "details" => $conn->connect_error,
        "suggestion" => "Pastikan XAMPP/Laragon (MySQL) sudah dijalankan."
    ]));
}

// 2. Buat database jika belum ada
$sql_db = "CREATE DATABASE IF NOT EXISTS $database";
if (!$conn->query($sql_db)) {
    die(json_encode([
        "error" => "Gagal membuat/mengakses database.",
        "details" => $conn->error
    ]));
}

// 3. Sekarang pilih database-nya
if (!$conn->select_db($database)) {
    die(json_encode([
        "error" => "Gagal memilih database '$database'.",
        "details" => $conn->error
    ]));
}

// Set charset ke utf8mb4 agar mendukung karakter khusus
$conn->set_charset("utf8mb4");

// 4. Buat tabel otomatis jika belum ada (Agar tidak error)
$conn->query("CREATE TABLE IF NOT EXISTS agents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    commission VARCHAR(50) DEFAULT '0'
)");

$conn->query("CREATE TABLE IF NOT EXISTS santri (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    nisn VARCHAR(50),
    ttl VARCHAR(100),
    jenis_kelamin VARCHAR(20),
    asal_sekolah VARCHAR(100),
    nama_ortu VARCHAR(100),
    phone VARCHAR(20),
    alamat TEXT,
    program VARCHAR(100),
    agen_id INT NULL,
    status VARCHAR(50) DEFAULT 'Daftar',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)");

$conn->query("CREATE TABLE IF NOT EXISTS referral_visits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    agen_id INT NOT NULL,
    ip_address VARCHAR(50) NOT NULL,
    visit_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)");

$conn->query("CREATE TABLE IF NOT EXISTS menus (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    url VARCHAR(255) NOT NULL,
    parent_id INT NULL
)");

?>
