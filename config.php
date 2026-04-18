<?php
// Konfigurasi CORS agar React/Frontend bisa mengakses API ini
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

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
?>
