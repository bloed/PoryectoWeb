<?php
$servername = "localhost";
$username = "root";
$password = "Lopezx01";
$dbname = "trabli";
$response ="";

$Cedula = $_REQUEST["cedula"];
$Ruta = $_REQUEST["ruta"];
$Empresa = $_REQUEST["empresa"];
$Nombre = $_REQUEST["nombre"];
$target_file = "../images/busqueda4.jpg";

if(isset($_FILES["file"])) {
	$target_dir = "../images/";
	$target_file = $target_dir . basename($_FILES["file"]["name"]);

	$uploadOk = 1;
	$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
	// Check if image file is a actual image or fake image
	if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
	    echo "The file ". basename( $_FILES["file"]["name"]). " has been uploaded.";
	} else {
		echo "Sorry, there was an error uploading your file.";
	}
}



// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "insert into choferes(cedula,nombre,foto,idEmpresa) values($Cedula, '$Nombre', '$target_file', $Empresa)";

if (mysqli_query($conn, $sql)) {
    // output data of each row
	$sql = "insert into rutaschofers(idRuta, idCedula) values($Ruta, $Cedula)";
	if (mysqli_query($conn, $sql)) {
   
		echo "inserted value";
	} else {
    	echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	}
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
header('Location: ../CMS/modificarGeneralCMS.html?ruta='.$Ruta);
die();

?>