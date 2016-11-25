<?php
$servername = "localhost";
$username = "root";
$password = "Lopezx01";
$dbname = "trabli";
$response ="";

$Parada = $_REQUEST["parada"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "delete from paradas where id = $Parada";

if (mysqli_query($conn, $sql)) {
	    
} else {
    echo "Error deleting record: " . mysqli_error($conn). $sql;
}


mysqli_close($conn);

?>