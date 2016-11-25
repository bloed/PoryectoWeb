<?php
$servername = "localhost";
$username = "root";
$password = "Lopezx01";
$dbname = "trabli";

$Id = $_REQUEST["id"];


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "DELETE FROM comentariosrutas WHERE id = $Id";
if (mysqli_query($conn, $sql)) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . mysqli_error($conn);
}

mysqli_close($conn);
?>