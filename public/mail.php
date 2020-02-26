<?php

$nom = $_POST["name"];
$email = $_POST['email'];
$subject = "monsieur " . $nom;
$message =  $_POST['message'];


mail($email, $subject, $message);


// $submit = mail($email, $subject, $message);
if (mail($email, $subject, $message)) {
    echo 'Your message has been sent successfully!';
} else {
    echo 'Sorry, your message could not send.';
}