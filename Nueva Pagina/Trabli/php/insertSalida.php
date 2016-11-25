<?php
$servername = "localhost";
$username = "root";
$password = "Lopezx01";
$dbname = "trabli";
$response ="";

$Ruta = $_REQUEST["ruta"];
$Tiempo = $_REQUEST["tiempo"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "insert into tiempossalida(salida, rutas_id) values('$Tiempo', $Ruta)";

if (mysqli_query($conn, $sql)) {
	    
} else {
    echo "Error updating record: " . mysqli_error($conn). $sql;
}


mysqli_close($conn);

?>