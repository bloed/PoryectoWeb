<?php
$servername = "localhost";
$username = "root";
$password = "Lopezx01";
$dbname = "trabli";
$response ="";

$Id = $_REQUEST["Empresa"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "select * from rutas where Empresa_idEmpresa = $Id ";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $array = array(); 

    while($row = mysqli_fetch_assoc($result)) {
        $array[] = array("id" => $row["id"]);
    }
    $arrlength = count($array);
    $array2 = array(); 
    for($x = 0; $x < $arrlength; $x++){
    	$obj = $array[$x]["id"];
    	$sql = "Select rutas.id, rutas.nombre,rutas.imagen, rutas.tarifa, final.nombre as final, inicial.nombre as inicial, init.salida as init, fin.salida as fin from rutas, (
				Select id, paradas.nombre from paradas where paradas.id = (Select MAX(id) from paradas where paradas.idRuta = $obj)
				) as final,
    			(Select id, paradas.nombre from paradas where paradas.id = (Select MIN(id) from paradas where paradas.idRuta = $obj)
				) as inicial,
    			(Select id, tiempossalida.salida from tiempossalida where tiempossalida.id = (Select MIN(id) from tiempossalida where tiempossalida.rutas_id = $obj)
				) as init,
				(Select id, tiempossalida.salida from tiempossalida where tiempossalida.id = (Select MAX(id) from tiempossalida where tiempossalida.rutas_id = $obj)
				) as fin
    			where rutas.id = $obj";
    	$result = mysqli_query($conn, $sql);
	    if (mysqli_num_rows($result) > 0) {
	    // output data of each row

		    while($row = mysqli_fetch_assoc($result)) {
		        $array2[] = array("Id"=>$row["id"], "Nombre"=>$row["nombre"],"Imagen" =>$row["imagen"], "Tarifa"=>$row["tarifa"], "Final"=>$row["final"],
		        	"Inicial"=>$row["inicial"], "Init"=>$row["init"], "Fin"=>$row["fin"]);
		    }
		}else{
            $sql = "Select rutas.id, rutas.nombre,rutas.imagen, rutas.tarifa, 'No hay registro' as final, 'No hay registro' as inicial, 'No hay registro' as init, 'No hay registro' as fin from rutas where rutas.id = $obj";
            $result = mysqli_query($conn, $sql);
            if (mysqli_num_rows($result) > 0) {
            // output data of each row

                while($row = mysqli_fetch_assoc($result)) {
                    $array2[] = array("Id"=>$row["id"], "Nombre"=>$row["nombre"],"Imagen" =>$row["imagen"], "Tarifa"=>$row["tarifa"], "Final"=>$row["final"],
                        "Inicial"=>$row["inicial"], "Init"=>$row["init"], "Fin"=>$row["fin"]);
                }
            }

        }

    }



    
    $json_string = json_encode($array2);
	echo $json_string;

} else {
    echo "0 results";
}

mysqli_close($conn);
?>