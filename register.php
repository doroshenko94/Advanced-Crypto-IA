<?php

// Разрешить доступ с любого домена
header("Access-Control-Allow-Origin: *");
// Разрешить методы POST и GET
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
// Разрешить специальные заголовки
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Подключение к базе данных
$servername = "localhost";
$username = "root"; // Обычно имя пользователя по умолчанию
$password = ""; // Пароль для MySQL
$dbname = "user_registration"; // Имя твоей базы данных

// Создание соединения
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка соединения
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Получение данных из POST-запроса
$name = $_POST['name'];
$surname = $_POST['surname'];
$birthyear = $_POST['birthyear'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Хэшируем пароль для безопасности

// SQL-запрос для вставки данных
$sql = "INSERT INTO users (name, surname, birthyear, phone, email, password)
VALUES ('$name', '$surname', '$birthyear', '$phone', '$email', '$password')";

// Выполнение SQL-запроса
if ($conn->query($sql) === TRUE) {
    echo "Registration successful!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Закрытие соединения
$conn->close();
?>
