<?php
$servername = "localhost";
$username = "root";
$password = "Lopezx01";
$dbname = "trabli";
$response ="";

$Nombre = $_REQUEST["nombre"];
$Correo = $_REQUEST["correo"];
$Tel = $_REQUEST["tel"];
$Mensaje = $_REQUEST["mensaje"];

$to = "adrianlq8@gmail.com";
$subject = "Consulta empresa Trabli de: $Nombre";
$txt = $Mensaje . "\n Puede contactar al usuario por medio del telefono: $Tel o el Correo: $Correo";
$headers = "From: adrianlq8@hotmail.com";

mail($to,$subject,$txt,$headers);

header('Location: ../User/index.html');
die();

?>