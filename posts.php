<?php
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Mengambil semua data posts
        $sql = "SELECT * FROM posts ORDER BY id DESC";
        $result = $conn->query($sql);
        $posts = [];
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $posts[] = $row;
            }
        }
        echo json_encode($posts);
        break;

    case 'POST':
        // Menambah atau Update post
        $data = json_decode(file_get_contents("php://input"));
        
        $title = $conn->real_escape_string($data->title);
        $category = $conn->real_escape_string($data->category);
        $date = $conn->real_escape_string($data->date);
        $image = $conn->real_escape_string($data->image ?? '');
        $content = $conn->real_escape_string($data->content);

        if (isset($data->id) && !empty($data->id)) {
            // Update (Edit)
            $id = (int)$data->id;
            $sql = "UPDATE posts SET title='$title', category='$category', date='$date', image='$image', content='$content' WHERE id=$id";
        } else {
            // Create (Tambah Baru)
            $sql = "INSERT INTO posts (title, category, date, image, content) VALUES ('$title', '$category', '$date', '$image', '$content')";
        }

        if ($conn->query($sql) === TRUE) {
            echo json_encode(["success" => true, "message" => "Data berhasil disimpan!"]);
        } else {
            echo json_encode(["error" => "Error: " . $conn->error]);
        }
        break;

    case 'DELETE':
        // Menghapus post
        if (isset($_GET['id'])) {
            $id = (int)$_GET['id'];
            $sql = "DELETE FROM posts WHERE id=$id";
            if ($conn->query($sql) === TRUE) {
                echo json_encode(["success" => true, "message" => "Data berhasil dihapus!"]);
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