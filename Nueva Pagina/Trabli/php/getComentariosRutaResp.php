<?php
$servername = "localhost";
$username = "root";
$password = "Lopezx01";
$dbname = "trabli";
$response ="";

$Id = $_REQUEST["id"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "select * from comentariosrutas where idRuta = $Id AND responder = 1 ";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $array = array(); 

    while($row = mysqli_fetch_assoc($result)) {
        $array[] = array("Id" => $row["id"], "Comentario" => $row["comentario"], "Nombre" => $row["nombre"], "Contacto" => $row["contacto"], "Fecha" => $row["fecha"]);
    }
    
    $json_string = json_encode($array);
	echo $json_string;

} else {
    echo "nada";
}

mysqli_close($conn);
?>