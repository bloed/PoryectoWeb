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

$sql = "select rutas.id, rutas.nombre, rutas.codigo, rutas.tarifa, rutas.imagen, empresa.nombre as Nombre from rutas, empresa where id = $Ruta and Empresa_idEmpresa = empresa.idEmpresa";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $array = array(); 

    while($row = mysqli_fetch_assoc($result)) {
        $array[] = array("Id" => $row["id"], "Nombre" => $row["nombre"], "Tarifa" => $row["tarifa"], "NombreEmpresa" => $row["Nombre"], "Codigo" => $row["codigo"], "Imagen" => $row["imagen"]);
    }
    
    $json_string = json_encode($array);
	echo $json_string;

} else {
    echo "";
}

mysqli_close($conn);
?>