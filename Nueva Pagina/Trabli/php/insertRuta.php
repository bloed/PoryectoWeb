<?php
$servername = "localhost";
$username = "root";
$password = "Lopezx01";
$dbname = "trabli";
$response ="";

$Nombre = $_REQUEST["nombre"];
$Codigo = $_REQUEST["codigo"];
$Tarifa = $_REQUEST["tarifa"];
$Id = $_REQUEST["id"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

	$target_dir = "../images/";
	$target_file = $target_dir . basename($_FILES["file"]["name"]);

	$uploadOk = 1;
	$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
	// Check if image file is a actual image or fake image
	if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
	    echo "The file ". basename( $_FILES["file"]["name"]). " has been uploaded.";
	} else {
			echo "Error Archivo";
			$target_file = "../images/busqueda2.jpg";
	}

	$sql = "insert into rutas(nombre, tarifa, Empresa_idEmpresa, imagen, codigo) values ('$Nombre',$Tarifa,$Id,'$target_file',$Codigo)";

	if (mysqli_query($conn, $sql)) {
		$last_id = mysqli_insert_id($conn);
	} else {
	    echo "Error updating record: " . mysqli_error($conn). $sql;
	}

mysqli_close($conn);

header('Location: ../CMS/modificarGeneralCMS.html?ruta='. $last_id);
die();

?>