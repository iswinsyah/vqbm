<?php
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $sql = "SELECT * FROM agents ORDER BY id DESC";
        $result = $conn->query($sql);
        $agents = [];
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $agents[] = $row;
            }
        }
        echo json_encode($agents);
        break;

    case 'POST':
        $data = json_decode(file_get_contents("php://input"));
        
        $name = $conn->real_escape_string($data->name);
        $phone = $conn->real_escape_string($data->phone);
        $commission = $conn->real_escape_string($data->commission);

        if (isset($data->id) && !empty($data->id)) {
            $id = (int)$data->id;
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
                echo json_encode(["success" => true, "message" => "Agen berhasil dihapus!"]);
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