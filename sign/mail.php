                                <?php
 // Email the new password to the person.
    $message = "G'Day!

You have been successfully registered.
To log in, proceed to the
following address:

   

Your personal login ID and password are as
follows:

    

If you have any problems, feel free to contact us at
help@excelmec.org.

-The Excel Team
";

    mail("augustusfrancis@gmail.com","Excel Mec 2014", $message, "From:Excel Team <team@excelmec.org>");
?>

                            