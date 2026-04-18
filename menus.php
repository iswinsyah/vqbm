<?php
if (file_exists(__DIR__ . '/config.php')) {
    require_once __DIR__ . '/config.php';
} else {
    require_once __DIR__ . '/public/config.php';
}

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, DELETE, PUT, OPTIONS");

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $sql = "SELECT * FROM menus ORDER BY parent_id ASC, id ASC";
        $result = $conn->query($sql);
        $menus = [];
        if ($result && $result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $menus[] = $row;
            }
        }
        echo json_encode($menus);
        break;

    case 'POST':
        $input = file_get_contents("php://input");
        $data = json_decode($input);
        
        $title = $conn->real_escape_string($data->title ?? '');
        $url = $conn->real_escape_string($data->url ?? '');
        // Handle parentId jika ada (untuk menu dropdown/submenu)
        $parent_id = (isset($data->parentId) && $data->parentId !== '') ? (int)$data->parentId : "NULL";

        if (isset($data->id) && !empty($data->id)) {
            $id = (int)$data->id;
            $sql = "UPDATE menus SET title='$title', url='$url', parent_id=$parent_id WHERE id=$id";
        } else {
            $sql = "INSERT INTO menus (title, url, parent_id) VALUES ('$title', '$url', $parent_id)";
        }

        if ($conn->query($sql) === TRUE) {
            echo json_encode(["success" => true, "message" => "Menu berhasil disimpan!"]);
        } else {
            echo json_encode(["error" => "Error: " . $conn->error]);
        }
        break;

    case 'DELETE':
        if (isset($_GET['id'])) {
            $id = (int)$_GET['id'];
            $sql = "DELETE FROM menus WHERE id=$id";
            if ($conn->query($sql) === TRUE) {
                echo json_encode(["success" => true, "message" => "Menu berhasil dihapus!"]);
            } else {
                echo json_encode(["error" => "Error: " . $conn->error]);
            }
        }
        break;
}

$conn->close();
?>