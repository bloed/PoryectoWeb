<?php
$servername = "localhost";
$username = "root";
$password = "Lopezx01";
$dbname = "trabli";
$response ="";

$Content = $_REQUEST["content"];
$Mail = $_REQUEST["mail"];
$Id = $_REQUEST["id"];
$Empresa = $_REQUEST["empresa"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "update comentarioschoferes set responder = 0 where id = $Id";

if (mysqli_query($conn, $sql)) {
	$to = $Mail;
	$subject = "Respuesta Comment Trabli";
	$txt = $Content . "\n Para cualquier consulta, por favor comunicarse al siguiente correo: $Empresa";
	$headers = "From: adrianlq8@hotmail.com";

	mail($to,$subject,$txt,$headers);
	echo "success";
	    
} else {
    echo "Error updating record: " . mysqli_error($conn). $sql;
}


mysqli_close($conn);

?>