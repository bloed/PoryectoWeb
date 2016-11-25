<?php
$servername = "localhost";
$username = "root";
$password = "Lopezx01";
$dbname = "trabli";
$response ="";

$String = $_REQUEST["Busqueda"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "select cedula from choferes where nombre Like '%$String%'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $array = array(); 

    while($row = mysqli_fetch_assoc($result)) {
        $array[] = array("id" => $row["cedula"]);
    }
    $arrlength = count($array);
    $array2 = array(); 
    for($x = 0; $x < $arrlength; $x++){
    	$obj = $array[$x]["id"];
    	$sql = "select $obj as cedula, choferes.nombre, choferes.foto, route.rutas from choferes,(
                Select group_concat(nombre separator ', ') as rutas from rutas, rutaschofers where rutaschofers.idCedula = $obj AND rutaschofers.idRuta = rutas.id 
                ) as route where cedula = $obj";

    	$result = mysqli_query($conn, $sql);
	    if (mysqli_num_rows($result) > 0) {
	    // output data of each row

		    while($row = mysqli_fetch_assoc($result)) {
		       $array2[] = array("Id"=>$row["cedula"], "Nombre"=>$row["nombre"],"Imagen" =>$row["foto"],"Rutas"=>$row["rutas"]);
		    }
		}

    }



    
    $json_string = json_encode($array2);
	echo $json_string;

} else {
    echo "";
}

mysqli_close($conn);
?>