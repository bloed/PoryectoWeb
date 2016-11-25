<?php
$servername = "localhost";
$username = "root";
$password = "Lopezx01";
$dbname = "trabli";
$response ="";

$Ruta = $_REQUEST["Ruta"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "Select id, rutas_id, salida from tiempossalida where rutas_id = $Ruta;";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $array = array(); 

    while($row = mysqli_fetch_assoc($result)) {
        $array[] = array("Id" => $row["id"], "Salida" => $row["salida"]);
    }
    
    $json_string = json_encode($array);
	echo $json_string;

} else {
    echo "";
}

mysqli_close($conn);
?>