<?php
// Аутентификация по токену
$token = $_SERVER['HTTP_AUTHORIZATION'] ?? '';

if ($token !== 'ваш_секретный_токен') {
    http_response_code(401); // Unauthorized
    echo json_encode(array("message" => "Access denied."));
    exit();
}

// Подключение к базе данных
$servername = "localhost";
$username = "root"; // Имя пользователя базы данных
$password = ""; // Пароль к базе данных
$dbname = "user_registration"; // Имя базы данных

// Установка заголовков для CORS
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Создание соединения с базой данных
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка соединения
if ($conn->connect_error) {
    http_response_code(500); // Internal Server Error
    echo json_encode(array("message" => "Connection failed: " . $conn->connect_error));
    exit();
}

// Подготовка SQL-запроса для получения данных клиентов
$sql = "SELECT id, name, surname, birthyear, phone, email, created_at FROM users";
$stmt = $conn->prepare($sql);

if ($stmt === false) {
    http_response_code(500); // Internal Server Error
    echo json_encode(array("message" => "Failed to prepare statement."));
    exit();
}

// Выполнение запроса
$stmt->execute();
$result = $stmt->get_result();

// Проверка наличия данных
if ($result->num_rows > 0) {
    $users = array();

    // Форматирование данных в массив
    while ($row = $result->fetch_assoc()) {
        $users[] = array(
            "id" => $row["id"],
            "name" => $row["name"],
            "surname" => $row["surname"],
            "birthyear" => $row["birthyear"],
            "phone" => $row["phone"],
            "email" => $row["email"],
            "created_at" => $row["created_at"]
        );
    }

    // Возврат данных в формате JSON
    echo json_encode(array("users" => $users));
} else {
    echo json_encode(array("message" => "No users found."));
}

// Закрытие соединения
$stmt->close();
$conn->close();
?>
