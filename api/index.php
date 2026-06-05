<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "form";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$sql = "INSERT INTO form_data (name, email, subject, message) VALUES ('$name', '$email', '$subject', '$message')";
if ($conn->query($sql) === TRUE) {
    echo "Thank You for your response.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>