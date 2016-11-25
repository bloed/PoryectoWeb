<?php
$servername = "localhost";
$username = "root";
$password = "Lopezx01";
$dbname = "trabli";
$response ="";

$Cedula = $_REQUEST["cedula"];
$Ruta = $_REQUEST["ruta"];



// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "insert into rutaschofers(idRuta, idCedula) values($Ruta, $Cedula)";

if (mysqli_query($conn, $sql)) {
    // output data of each row
	echo "inserted value";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>