<?php
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $sql = "SELECT * FROM pages ORDER BY id DESC";
        $result = $conn->query($sql);
        $pages = [];
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $pages[] = $row;
            }
        }
        echo json_encode($pages);
        break;

    case 'POST':
        $data = json_decode(file_get_contents("php://input"));
        
        $title = $conn->real_escape_string($data->title);
        $slug = $conn->real_escape_string($data->slug);
        $content = $conn->real_escape_string($data->content);

        if (isset($data->id) && !empty($data->id)) {
            $id = (int)$data->id;
            $sql = "UPDATE pages SET title='$title', slug='$slug', content='$content' WHERE id=$id";
        } else {
            $sql = "INSERT INTO pages (title, slug, content) VALUES ('$title', '$slug', '$content')";
        }

        if ($conn->query($sql) === TRUE) {
            echo json_encode(["success" => true, "message" => "Data halaman berhasil disimpan!"]);
        } else {
            echo json_encode(["error" => "Error: " . $conn->error]);
        }
        break;

    case 'DELETE':
        if (isset($_GET['id'])) {
            $id = (int)$_GET['id'];
            $sql = "DELETE FROM pages WHERE id=$id";
            if ($conn->query($sql) === TRUE) {
                echo json_encode(["success" => true, "message" => "Halaman berhasil dihapus!"]);
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