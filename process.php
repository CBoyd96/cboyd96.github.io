<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = htmlspecialchars($_POST["username"]);
    echo "Hello, " . $username . "! Your name has been added to the database.";
}
?>

