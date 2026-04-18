<?php
if (file_exists(__DIR__ . '/config.php')) {
    require_once __DIR__ . '/config.php';
} else {
    require_once __DIR__ . '/public/config.php';
}

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

$data = json_decode(file_get_contents("php://input"));

if (isset($data->ref) && !empty($data->ref)) {
    $ref_phone = $conn->real_escape_string($data->ref);
    
    // Cari ID Agen berdasarkan nomor WA
    $sql_agen = "SELECT id FROM agents WHERE phone = '$ref_phone' LIMIT 1";
    $result = $conn->query($sql_agen);
    
    if ($result->num_rows > 0) {
        $agen = $result->fetch_assoc();
        $agen_id = $agen['id'];
        $ip_address = $_SERVER['REMOTE_ADDR'];
        $visit_date = date('Y-m-d');
        
        // Cek apakah IP ini sudah klik link agen ini hari ini (mencegah spam refresh / klik ganda)
        $check_visit = "SELECT id FROM referral_visits WHERE agen_id = $agen_id AND ip_address = '$ip_address' AND visit_date = '$visit_date'";
        $visit_result = $conn->query($check_visit);
        
        if ($visit_result->num_rows == 0) {
            // Jika belum ada, catat kunjungan baru untuk metrik Trafik Agen
            $insert_visit = "INSERT INTO referral_visits (agen_id, ip_address, visit_date) VALUES ($agen_id, '$ip_address', '$visit_date')";
            $conn->query($insert_visit);
        }
        
        echo json_encode(["success" => true, "message" => "Kunjungan referal berhasil dicatat."]);
    } else {
        // Jika WA tidak terdaftar, diam-diam abaikan tanpa error agar tidak merusak pengalaman user
        echo json_encode(["success" => false, "message" => "Agen tidak ditemukan."]);
    }
} else {
    echo json_encode(["error" => "Tidak ada parameter referal."]);
}

$conn->close();
?>