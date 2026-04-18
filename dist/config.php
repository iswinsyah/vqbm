<?php
// Konfigurasi Database (Edisi Smart - Auto Create Database)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

// Kredensial default (Lokal)
$host = "localhost";
$username = "root"; 
$password = "";     
$database = "vqbm_db"; 

// 1. Coba koneksi ke server MySQL
$conn = new mysqli($host, $username, $password);

if ($conn->connect_error) {
    // Jika root gagal, mungkin ini di server Hostinger? Coba kredensial cadangan
    $host = "localhost";
    $username = "u123456789_vqbm_user"; 
    $password = "PasswordKuat123!"; 
    $database = "u123456789_vqbm_db"; 
    
    $conn = new mysqli($host, $username, $password);
    
    if ($conn->connect_error) {
        http_response_code(500);
        die(json_encode([
            "error" => "Semua upaya koneksi gagal.",
            "details" => $conn->connect_error,
            "suggestion" => "Pastikan MySQL menyala. Jika di hosting, pastikan kredensial di public/config.php sudah benar."
        ]));
    }
}

// 2. Pilih/Buat Database
$conn->query("CREATE DATABASE IF NOT EXISTS $database");
if (!$conn->select_db($database)) {
    die(json_encode([
        "error" => "Database '$database' tidak dapat dipilih.",
        "details" => $conn->error
    ]));
}

$conn->set_charset("utf8mb4");
?>