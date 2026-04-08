<?php
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $sql = "SELECT setting_key, setting_value FROM settings";
        $result = $conn->query($sql);
        $settings = new stdClass(); // Gunakan Object agar jadi JSON {} bukan array []
        
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $key = $row['setting_key'];
                $settings->$key = $row['setting_value'];
            }
        }
        echo json_encode($settings);
        break;

    case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        
        $success = true;
        foreach ($data as $key => $value) {
            $safe_key = $conn->real_escape_string($key);
            // Jika value berupa nested object (seperti pada setting 'home.hero' di React), kita encode lagi jadi JSON string
            $safe_value = is_array($value) ? $conn->real_escape_string(json_encode($value)) : $conn->real_escape_string($value);
            
            $sql = "INSERT INTO settings (setting_key, setting_value) VALUES ('$safe_key', '$safe_value') ON DUPLICATE KEY UPDATE setting_value='$safe_value'";
            if (!$conn->query($sql)) {
                $success = false;
            }
        }
        
        echo json_encode(["success" => $success, "message" => "Pengaturan berhasil diperbarui!"]);
        break;
}

$conn->close();
?>