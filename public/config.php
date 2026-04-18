<?php
// Konfigurasi Database (Edisi Smart - Auto Create Database)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Matikan pesan error PHP agar tidak bocor dan merusak format JSON
error_reporting(0);
ini_set('display_errors', 0);

$host = "localhost";
$username = "u829486010_villaquranbaro"; 
$password = "Khilafet@1924"; 
$database = "u829486010_vqbm_db"; 

// Koneksi langsung ke database Hostinger tanpa mencoba root
$conn = @new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode([
        "error" => "Koneksi database gagal.",
        "details" => $conn->connect_error
    ]));
}

$conn->set_charset("utf8mb4");

// 3. Buat tabel otomatis jika belum ada di database Hostinger
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

$conn->query("CREATE TABLE IF NOT EXISTS settings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    setting_key VARCHAR(100) UNIQUE NOT NULL,
    setting_value TEXT
)");

?>