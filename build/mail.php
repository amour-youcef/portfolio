<?php

$nom = $_POST["name"];
$email = $_POST['email'];
$subject = "monsieur " . $nom;
$message =  $_POST['message'];



try{
    $bdd = new PDO("mysql:host=localhost;dbname=youssoufa_bd;charset=utf8" , "youssoufa" ,"50DMyOZG4CX62g==");
}catch (PDOException $e){
    mail($email, $subject, $e);
};

$bdd->query("INSERT INTO mail (id ,nom , mail , sub , msg) VALUES (NULL , '$nom', '$email' , '$subject', '$message' )");




mail($email, $subject, $message);


$submit = mail($email, $subject, $message);
if ($submit) {
    echo 'Your message has been sent successfully!';
} else {
    echo 'Sorry, your message could not send.';
}