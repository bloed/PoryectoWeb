<?php
$servername = "localhost";
$username = "root";
$password = "Lopezx01";
$dbname = "trabli";

$Cedula = $_REQUEST["cedula"];


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "DELETE FROM choferes WHERE cedula = $Cedula";
if (mysqli_query($conn, $sql)) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . mysqli_error($conn);
}

mysqli_close($conn);
?>