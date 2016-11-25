<?php
$servername = "localhost";
$username = "root";
$password = "Lopezx01";
$dbname = "trabli";
$response ="";

$Fecha = $_REQUEST["fecha"];
$Ruta = $_REQUEST["ruta"];
$Mensaje = $_REQUEST["mensaje"];
$FechaElim = $_REQUEST["fecha2"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "insert into aviso(idRuta,mensaje,fecha,fechaEliminar) values ($Ruta, '$Mensaje','$Fecha','$FechaElim')";

if (mysqli_query($conn, $sql)) {
	    
} else {
    echo "Error inserting record: " . mysqli_error($conn). $sql;
}


mysqli_close($conn);

?>