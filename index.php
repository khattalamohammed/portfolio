<?php 
$message=$_POST['message'];
$subject=$_POST['subject'];
$email='mohammed.khattala@ump.ac.ma';

mail($email,$subject,$message);
?>
