                                                                                                                                                                                                <?php
$con=mysqli_connect("localhost","inexcel_excel14", "arjuexcel2014", "inexcel_excel2014");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

if ($_POST['firstname']=='' or $_POST['lastname']=='' or $_POST['phone']=='' or $_POST['college']=='' or $_POST['dept']=='' or $_POST['password']=='' or $_POST['email']=='' or $_POST['accom']==NULL) {
	echo 0;
	return;
	}

if (!isset($_POST['firstname']) || !isset($_POST['lastname']) || !isset($_POST['phone']) || !isset($_POST['college']) || !isset($_POST['dept']) || !isset($_POST['password']) || !isset($_POST['email']) || !isset($_POST['accom'])) {
	echo 0;
	return;
	}

else {

//validating email	
if (isset($_POST['email'])) {
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo 0;
            return;
            }
        }

	$firstname = stripslashes($_POST['firstname']);
	$lastname = stripslashes($_POST['lastname']);
	$phone = stripslashes($_POST['phone']);
	$college = stripslashes($_POST['college']);
	$dept= stripslashes($_POST['dept']);
	$password = stripslashes($_POST['password']);
	$accom = stripslashes($_POST['accom']);
	$fbid = stripslashes($_POST['fbid']);

	$sql = "SELECT uid FROM User WHERE email = '$email'";
	$result = mysqli_query($con,$sql);
	$num_rows=mysqli_num_rows($result);
	if($num_rows) {		
		echo 2; //Todo in front end Email Already Registered.
		return;
	}				


        if($fbid>1000) {
			$active=1;
			$sql="INSERT INTO User (firstname,lastname,phone,college,dept,password,email,accom,fbid,active) VALUES ('$firstname', '$lastname','$phone','$college','$dept','$password','$email','$accom','$fbid','$active')";
		    $result = mysqli_query($con,$sql);
		    echo 3; //todo FB logged in already activated
		}
		else {
			$fbid=1000;
			$active=0;
			$sql="INSERT INTO User (firstname,lastname,phone,college,dept,password,email,accom,fbid,active) VALUES ('$firstname', '$lastname','$phone','$college','$dept','$password','$email','$accom','$fbid','$active')";
		
		if (!mysqli_query($con,$sql)) {
     	       die('Error: ' . mysqli_error($con));
		}
		else {
		    $sql="SELECT * FROM User WHERE email='$email' AND password='$password'";
		    $result = mysqli_query($con,$sql);
		    $row = mysqli_fetch_array($result);
		    $userId = intval($row['uid']);
		    $uid = $userId;
		    $userId =$userId * 7;
		    $userId =$userId + 5;
                    $hash = md5($userId);
		    $message = "G'Day!
	                You have been successfully registered.
        	        To log in, proceed to the
        	        following address:
	
        	            http://www.excelmec.org/Login2014/activate.php?uid=$userId&key=$hash
	
        	        Your personal login ID and password are as
        	        follows:
	
        	            email id : $email
        	            password: $password
	
        	        If you have any problems, feel free to contact us at
        	        team@excelmec.org.
	
        	        -The Excel Team
        	        ";
    		    mail($email,"Excel 2014", $message, "From:Excel Team <team@excelmec.org>");
		    echo 1;
			}
		}
	}
?>

                            
                            
                            
                            
                            
                            