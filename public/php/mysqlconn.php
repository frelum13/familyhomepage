
<?php
$servername = "109.73.158.173";
$username = "root";
$password = "Campus02";
$dbname = "webserver";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO user (firstname, secondname, username, password, right, spielername)
VALUES ('John', 'Doe','Jonny','Lukas123','build','Hi')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?> 
