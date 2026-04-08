<?php
// Konfigurasi CORS agar React/Frontend bisa mengakses API ini
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

// Sesuaikan dengan kredensial database Hostinger Anda
$host = "localhost";
$username = "u123456789_vqbm_user"; // Ganti dengan username DB hostinger
$password = "PasswordKuat123!"; // Ganti dengan password DB
$database = "u123456789_vqbm_db"; // Ganti dengan nama DB hostinger

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die(json_encode(["error" => "Koneksi database gagal: " . $conn->connect_error]));
}
?>