<?php
$servername = "localhost";
$username = "root";
$password = "Lopezx01";
$dbname = "trabli";
$response ="";
$User = $_REQUEST["User"];
$Pass = $_REQUEST["Pass"];

$response;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "Select idEmpresa from empresa where Username ='$User' AND Password ='$Pass'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $array = array(); 

    while($row = mysqli_fetch_assoc($result)) {
        echo $row["idEmpresa"];
    }

} else {
	$sql = "Select id from admin where user ='$User' AND pass ='$Pass'";
    $result = mysqli_query($conn, $sql);

	if (mysqli_num_rows($result) > 0) {
    // output data of each row
    	$array = array(); 

    	while($row = mysqli_fetch_assoc($result)) {
        	echo "admin";
    	}
    }else{
    	echo "";
    }	
}

mysqli_close($conn);
?>