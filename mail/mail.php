<?php
/**
 * This example shows sending a message using PHP's mail() function.
 */
require 'phpmailer/PHPMailerAutoload.php';
//Create a new PHPMailer instance
$mail = new PHPMailer;
if(isset($_POST['name']) && isset($_POST['email'])   || ( isset($_POST['message']) ) )  {
	//Set who the message is to be sent to
	$to_email = ''; // Receiver Email Address
	$to_name = ""; //Receiver Name
	$subject = "New Contact Query";
	
	$sender_name = $_POST['name'];
	$from_mail = $_POST['email'];		
	
	$sender_message = '';		
	
	if( isset($_POST['message']) ){
		$sender_message = 'SENDER MESSAGE: ' . $_POST['message'] . "</br>";
	}
			
	$mail->SetFrom( $from_mail , $sender_name );
	$mail->AddReplyTo( $from_mail , $sender_name );
	$mail->AddAddress( $to_email , $to_name );
	//Set the subject line
	$mail->Subject = $subject;
	$received_content = "SENDER NAME : " . $sender_name . "</br> SENDER EMAIL : " . $from_mail . "</br>" . $sender_message ;
	$mail->MsgHTML( $received_content );
	echo $mail->Send();
	exit;	
}