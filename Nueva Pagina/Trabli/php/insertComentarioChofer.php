<?php
$servername = "localhost";
$username = "root";
$password = "Lopezx01";
$dbname = "trabli";
$response ="";

$Comment = $_REQUEST["comment"];
$Id = $_REQUEST["id"];
$Nombre = $_REQUEST["nombre"];
$Contacto = $_REQUEST["contact"];
$Fecha = $_REQUEST["fecha"];
$Resp = 0;

if($Contacto !== ''){
	$Resp = 1;
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "insert into comentarioschoferes(comentario, idCedula, nombre, contacto, fecha, responder) values('$Comment', 
$Id, '$Nombre', '$Contacto', '$Fecha', $Resp)";

if (mysqli_query($conn, $sql)) {
    // output data of each row
	echo "inserted value";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>