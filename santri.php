<?php
require_once 'config.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, DELETE");

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Mengambil daftar santri untuk Admin Dashboard
        $sql = "SELECT santri.*, agents.name as agen_name FROM santri LEFT JOIN agents ON santri.agen_id = agents.id ORDER BY santri.id DESC";
        $result = $conn->query($sql);
        $santri = [];
        if ($result && $result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $santri[] = $row;
            }
        }
        echo json_encode($santri);
        break;

    case 'POST':
        $data = json_decode(file_get_contents("php://input"));
        
        $nama = $conn->real_escape_string($data->nama ?? '');
        $phone = $conn->real_escape_string($data->phone ?? '');
        $alamat = $conn->real_escape_string($data->alamat ?? '');
        $ref_phone = isset($data->ref) ? $conn->real_escape_string($data->ref) : '';
        
        $agen_id = "NULL"; // Default tidak menggunakan jalur agen
        
        // Jika terdapat referal (tersimpan di cookies/localstorage frontend), cari ID agen-nya
        if (!empty($ref_phone)) {
            $sql_agen = "SELECT id FROM agents WHERE phone = '$ref_phone' LIMIT 1";
            $result_agen = $conn->query($sql_agen);
            if ($result_agen && $result_agen->num_rows > 0) {
                $agen = $result_agen->fetch_assoc();
                $agen_id = $agen['id'];
            }
        }

        $sql = "INSERT INTO santri (nama, phone, alamat, agen_id) VALUES ('$nama', '$phone', '$alamat', $agen_id)";
        
        if ($conn->query($sql) === TRUE) {
            echo json_encode(["success" => true, "message" => "Pendaftaran berhasil, alhamdulillah!"]);
        } else {
            echo json_encode(["error" => "Error: " . $conn->error]);
        }
        break;

    case 'DELETE':
        if (isset($_GET['id'])) {
            $id = (int)$_GET['id'];
            $sql = "DELETE FROM santri WHERE id=$id";
            if ($conn->query($sql) === TRUE) {
                echo json_encode(["success" => true, "message" => "Data pendaftaran berhasil dihapus!"]);
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