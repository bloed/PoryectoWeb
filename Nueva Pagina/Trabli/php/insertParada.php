<?php
$servername = "localhost";
$username = "root";
$password = "Lopezx01";
$dbname = "trabli";
$response ="";

$Ruta = $_REQUEST["ruta"];
$Nombre = $_REQUEST["nombre"];
$Tiempo = $_REQUEST["tiempo"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "insert into paradas(nombre, tiempoAdicional, idRuta) values('$Nombre', $Tiempo, $Ruta)";

if (mysqli_query($conn, $sql)) {
	    
} else {
    echo "Error updating record: " . mysqli_error($conn). $sql;
}


mysqli_close($conn);

?>