                                                                <?php
$con=mysqli_connect("localhost","inexcel_excel14", "arjuexcel2014", "inexcel_excel2014");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

if ($_POST['id']==''  || !isset($_POST['id'])) {
	echo 0;
	return;
	}

else {	
	$sql = "SELECT * FROM User WHERE fbid = '$_POST[id]'";
	$result = mysqli_query($con,$sql);
	$num_rows=mysqli_num_rows($result);
	if(!$num_rows) { 
		echo 0;
		}
	else {
		$row=mysqli_fetch_array($result);
			if($row['active'][0]==0) {
				echo 1;
				}
			if($row['active'][0]==1) {
				echo 2;
				}
		}				
	}
	
mysqli_close($con);
?>


                            
                            