<?php
$servername = "localhost";
$username = "root";
$password = "Lopezx01";
$dbname = "trabli";
$response ="";

$Cedula = $_REQUEST["cedula"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "select * from choferes where cedula = $Cedula ";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $array = array(); 

    while($row = mysqli_fetch_assoc($result)) {
        $array[] = array("Cedula" => $row["cedula"], "Nombre" => $row["nombre"], "Imagen" => $row["foto"]);
    }
    
    $json_string = json_encode($array);
	echo $json_string;

} else {
    echo "";
}

mysqli_close($conn);
?>