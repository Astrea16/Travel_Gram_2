<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	if (isset($_POST['formData'])) {$formData = $_POST['formData'];}
	if (isset($_POST['email'])) {$email = $_POST['email'];}
	if (isset($_POST['name'])) {$name = $_POST['name'];}
	if (isset($_POST['message'])) {$message = $_POST['message'];}
	$to = "7yatan@gmail.com";
	$headers = "Content-type: text/plain; charset = utf-8";
	$subject = "$formData";
	$message = "$formData\n\nWhere from: $email \n\nSender: $name \n\nMessage: $message";
	$send = mail ($to, $subject, $message, $headers);
	if ($send == 'true')
	{
		echo "<center>Thanks for sending your message!</center> ";
	}
	else{
		echo "<center><b>Error!Message not sent!</b></center>";
	}
}else {
    http_response_code(403);
    echo "Try again";
}
?>