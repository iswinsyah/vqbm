<?php
require_once 'config.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, DELETE");

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Mengambil daftar agen sekaligus menghitung jumlah closing (Santri dengan status 'Daftar Ulang')
        $sql = "SELECT agents.*, 
                       (SELECT COUNT(id) FROM santri WHERE agen_id = agents.id AND status = 'Daftar Ulang') as closing_count 
                FROM agents ORDER BY id DESC";
        $result = $conn->query($sql);
        $agents = [];
        if ($result && $result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $agents[] = $row;
            }
        }
        echo json_encode($agents);
        break;

    case 'POST':
        $data = json_decode(file_get_contents("php://input"));
        
        $id = isset($data->id) ? (int)$data->id : null;
        $name = $conn->real_escape_string($data->name ?? '');
        $phone = $conn->real_escape_string($data->phone ?? '');
        $commission = $conn->real_escape_string($data->commission ?? '0');
        
        // Jika ID ada, lakukan UPDATE. Jika tidak, lakukan INSERT.
        if ($id) {
            $sql = "UPDATE agents SET name='$name', phone='$phone', commission='$commission' WHERE id=$id";
        } else {
            $sql = "INSERT INTO agents (name, phone, commission) VALUES ('$name', '$phone', '$commission')";
        }
        
        if ($conn->query($sql) === TRUE) {
            echo json_encode(["success" => true, "message" => "Data agen berhasil disimpan!"]);
        } else {
            echo json_encode(["error" => "Error: " . $conn->error]);
        }
        break;

    case 'DELETE':
        if (isset($_GET['id'])) {
            $id = (int)$_GET['id'];
            $sql = "DELETE FROM agents WHERE id=$id";
            if ($conn->query($sql) === TRUE) {
                echo json_encode(["success" => true, "message" => "Data agen berhasil dihapus!"]);
            } else {
                echo json_encode(["error" => "Error: " . $conn->error]);
            }
        }
        break;

    default:
        echo json_encode(["error" => "Method tidak diizinkan"]);
        break;
}

$conn->close();
?>