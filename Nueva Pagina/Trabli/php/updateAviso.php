<?php
$servername = "localhost";
$username = "root";
$password = "Lopezx01";
$dbname = "trabli";
$response ="";

$Fecha = $_REQUEST["fecha"];
$Id = $_REQUEST["id"];
$Mensaje = $_REQUEST["mensaje"];
$FechaElim = $_REQUEST["fecha2"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "update aviso set mensaje = '$Mensaje', fecha = '$Fecha', FechaEliminar = '$FechaElim' where id = $Id";

if (mysqli_query($conn, $sql)) {
	    
} else {
    echo "Error updating record: " . mysqli_error($conn). $sql;
}


mysqli_close($conn);

?>