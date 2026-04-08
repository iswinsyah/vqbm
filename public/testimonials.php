<?php
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $sql = "SELECT * FROM testimonials ORDER BY id DESC";
        $result = $conn->query($sql);
        $testimonials = [];
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $testimonials[] = $row;
            }
        }
        echo json_encode($testimonials);
        break;

    case 'POST':
        $data = json_decode(file_get_contents("php://input"));
        
        $name = $conn->real_escape_string($data->name);
        $role = $conn->real_escape_string($data->role ?? '');
        $content = $conn->real_escape_string($data->content);
        $image = $conn->real_escape_string($data->image ?? '');
        $rating = isset($data->rating) ? (int)$data->rating : 5;

        if (isset($data->id) && !empty($data->id)) {
            $id = (int)$data->id;
            $sql = "UPDATE testimonials SET name='$name', role='$role', content='$content', image='$image', rating=$rating WHERE id=$id";
        } else {
            $sql = "INSERT INTO testimonials (name, role, content, image, rating) VALUES ('$name', '$role', '$content', '$image', $rating)";
        }

        if ($conn->query($sql) === TRUE) {
            echo json_encode(["success" => true, "message" => "Testimoni berhasil disimpan!"]);
        } else {
            echo json_encode(["error" => "Error: " . $conn->error]);
        }
        break;

    case 'DELETE':
        if (isset($_GET['id'])) {
            $id = (int)$_GET['id'];
            $sql = "DELETE FROM testimonials WHERE id=$id";
            if ($conn->query($sql) === TRUE) {
                echo json_encode(["success" => true, "message" => "Testimoni berhasil dihapus!"]);
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