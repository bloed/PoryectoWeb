<?php
$servername = "localhost";
$username = "root";
$password = "Lopezx01";
$dbname = "trabli";
$response ="";

$Nombre = $_REQUEST["nombre"];
$Id = $_REQUEST["cedula"];

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
	    $sql = "update choferes set nombre = '$Nombre', foto = '$target_file' where cedula = $Id";

		if (mysqli_query($conn, $sql)) {
		    echo "Record updated successfully";
		} else {
		    echo "Error updating record: " . mysqli_error($conn);
		}
	} else {
			$sql = "update choferes set nombre = '$Nombre' where cedula = $Id";

		if (mysqli_query($conn, $sql)) {
		    
		} else {
		    echo "Error updating record: " . mysqli_error($conn). $sql;
		}
	}

mysqli_close($conn);

header('Location: ../CMS/choferCMS.html?chofer='.$Id);
die();

?>