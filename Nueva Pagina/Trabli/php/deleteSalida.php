<?php
$servername = "localhost";
$username = "root";
$password = "Lopezx01";
$dbname = "trabli";
$response ="";

$Salida = $_REQUEST["salida"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "delete from tiempossalida where id = $Salida";

if (mysqli_query($conn, $sql)) {
	    
} else {
    echo "Error deleting record: " . mysqli_error($conn). $sql;
}


mysqli_close($conn);

?>