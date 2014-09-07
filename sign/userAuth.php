                                <?php
$con=mysqli_connect("localhost","inexcel_excel14", "arjuexcel2014", "inexcel_excel2014");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
// escape variables for security
if ($_POST['email']=='' or $_POST['pass']=='') {
	echo "One or more required fields were left blank.\n"."Please fill them in and try again.";
	return;
	}

else {
	$email = stripslashes($_POST['email']);
	$pass = stripslashes($_POST['pass']);
	$sql="SELECT * FROM User where email='$email' AND password='$pass'";
	$result = mysqli_query($con,$sql);
	$num_rows=mysqli_num_rows($result);
	if(!$num_rows) { 
		$id = 0;
		$result = array("id" => $id);
		}
	else {
		$id = 1;
		$row=mysqli_fetch_array($result);
		$firstname = $row['firstname'];
		$lastname = $row['lastname'];
		$result = array("id" => $id, "firstname" => $firstname, "lastname" => $lastname);
	}
	echo json_encode($result);
}
mysqli_close($con);
?>                                
                            
                            