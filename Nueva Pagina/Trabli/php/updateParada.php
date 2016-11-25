<?php
$servername = "localhost";
$username = "root";
$password = "Lopezx01";
$dbname = "trabli";
$response ="";

$Parada = $_REQUEST["parada"];
$Nombre = $_REQUEST["nombre"];
$Tiempo = $_REQUEST["tiempo"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "update paradas set nombre = '$Nombre', tiempoAdicional = $Tiempo where id = $Parada";

if (mysqli_query($conn, $sql)) {
	    
} else {
    echo "Error updating record: " . mysqli_error($conn). $sql;
}


mysqli_close($conn);

?>