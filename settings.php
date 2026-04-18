<?php
if (file_exists(__DIR__ . '/config.php')) {
    require_once __DIR__ . '/config.php';
} else {
    require_once __DIR__ . '/public/config.php';
}

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $sql = "SELECT setting_key, setting_value FROM settings";
        $result = $conn->query($sql);
        $settings = [];
        if ($result && $result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $val = json_decode($row['setting_value'], true);
                $settings[$row['setting_key']] = (json_last_error() === JSON_ERROR_NONE) ? $val : $row['setting_value'];
            }
        }
        echo json_encode($settings);
        break;

    case 'POST':
        $input = file_get_contents("php://input");
        $data = json_decode($input, true);
        
        if (is_array($data)) {
            foreach ($data as $key => $value) {
                $k = $conn->real_escape_string($key);
                $v = $conn->real_escape_string(is_array($value) ? json_encode($value) : $value);
                
                $sql = "INSERT INTO settings (setting_key, setting_value) VALUES ('$k', '$v') 
                        ON DUPLICATE KEY UPDATE setting_value='$v'";
                $conn->query($sql);
            }
            echo json_encode(["success" => true, "message" => "Pengaturan berhasil disimpan!"]);
        } else {
            echo json_encode(["error" => "Data tidak valid"]);
        }
        break;
}

$conn->close();
?>