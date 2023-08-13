<?php
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "hlatshwayomukelwa@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email";
    
    $mailBody = "Name: $name\nEmail: $email\n\n$message";
    
    $success = mail($to, $subject, $mailBody, $headers);
    
    echo json_encode(["success" => $success]);
} else {
    echo json_encode(["success" => false]);
}
?>
