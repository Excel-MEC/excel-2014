                                                                                                var fbid=0; 
var gid=0;
var loginFlag=0;

function statusChangeCallback(response) {
    if(location.pathname == "/excel2014/sign/SIGNIN.html") 
      $("#fblogin").html("").append($('<i class="fa fa-facebook"></i><span>&nbsp;&nbsp;Login Using Facebook</span></i>'));
    else
      $("#fblogin").html("").append($('<i class="fa fa-facebook"></i><span>&nbsp;&nbsp;Sign up using Facebook</span></i>'));
    if (response.status === 'connected') {
      testAPI();
    } else if (response.status === 'not_authorized') {
      console.log("Not Authorised");
    } else {
      console.log("Not Logged In to Facebook");
    }
  }

  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '1404508176479531',
    cookie     : true,                          
    xfbml      : true,  
    version    : 'v2.0' 
  });

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  function testAPI() {
    FB.api('/me?fields=id,first_name,last_name, picture.width(150).height(150).type(square)', function(response) {
      loginFlag=1;
      fbid=response.id;
      if(location.pathname == "/excel2014/sign/SIGNIN.html") 
        $("#fblogin").html("").append($('<i class="fa fa-facebook"></i><span>&nbsp;&nbsp;Login Using Facebook</span></i>'));
      else
        $("#fblogin").html("").append($('<i class="fa fa-facebook"></i><span>&nbsp;&nbsp;Sign up using Facebook</span></i>'));
      if(document.getElementById("name")) //For Signup Page
      	document.getElementById("name").value=response.first_name+" "+response.last_name;
      console.log('Successful login for: ' + response.id + response.first_name + response.last_name);
      if(location.pathname == "/excel2014/sign/SIGNIN.html") { //For Sign in page
            $.post("fb_check.php",{id:response.id},
              function(data,status){
                if(data == 0) {
                  alert("Please SignUp with your details");
                  window.location = "Signup.html";
                }
                else if(data == 1) {
                  //alert("Please Activate your Account. An email has been dispatched when you registered");
                  $img= response.picture.data.url;
                  $p=$(".container-fluidic").parent();
                  $(".container-fluidic").slideUp();
                  $userName = $("<div><i class='fa fa-user fa-fw'></i>&nbsp;&nbsp;" + response.first_name + " " + response.last_name + "</div>").addClass("btn btn-primary");
                  $userImage = $('<img src="' + $img +'">');
                  $userImage.css({
                      "border-radius": "50%",
                      "margin-right": "2%",
                      "margin-bottom": "1%"
                    });
                  $user = $("<div></div>").append($userImage).append($userName).addClass("center-block text-center");
                  $p.append($user);
                  $p.append($("<div class='text-center'>Please Activate your Account.</div>"));
                }
                else if(data == 2) {
                  $img= response.picture.data.url;
                  $p=$(".container-fluidic").parent();
                  $(".container-fluidic").slideUp();
                  $userName = $("<div><i class='fa fa-user fa-fw'></i>&nbsp;&nbsp;" + response.first_name + " " + response.last_name + "</div>").addClass("btn btn-primary");
                  $userImage = $('<img src="' + $img +'">');
                  $userImage.css({
                      "border-radius": "50%",
                      "margin-right": "2%"
                    });
                  $user = $("<div></div>").append($userImage).append($userName).addClass("center-block text-center");
                  $p.append($user);
                  
                }
              });
          }  
    });
  }

  function fb_login() {
    $("#fblogin").html("").append($("<i></i>").addClass("fa fa-cog fa-spin"));
    FB.login(function(response) {
        testAPI();
      });
    }

(function() {
  var po = document.createElement('script');
  po.type = 'text/javascript'; po.async = true;
  po.src = 'https://apis.google.com/js/client:plusone.js?onload=render';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(po, s);
})();

$(document).ready(function(){
  $("#saveForm").click(function(e) {
        e.preventDefault();
        $("#saveForm").html("").append($("<i></i>").addClass("fa fa-spinner fa-spin"));
        return post();
    });

  $("#divAccom").click(function() {
      if(document.getElementById("accom").value=="No") {
        document.getElementById("accom").value="Yes";
        $("#divAccom").css("background","transparent");
      }
      else {
       document.getElementById("accom").value="No";
       $("#divAccom").css("background","transparent"); 
      }
  });
  
    $("#loginForm").click(function(e) {
        e.preventDefault();
        $("#loginForm").html("").append($("<i></i>").addClass("fa fa-spinner fa-spin"));
        return login();
    });

    $("#email, #password").val("");
});


function login() {
 email = document.getElementById("email").value;
 password =document.getElementById("password").value;
 if(!email || !password) {
 	$("#loginForm").html("").append($('<i class="fa fa-times"></i><span>&nbsp;&nbsp;Fill Form Entirely</span>'));
    setTimeout(function(){
      $("#loginForm").html("Log in");
    },1000);
  return false;
 }
 
 $.post("userAuth.php",{email: email, pass: password},
      function(data,status){
      data = JSON.parse(data);
      if(data.id == 1) {
          $p=$(".container-fluidic").parent();
          $(".container-fluidic").slideUp();
          $userName = $('<div><i class="fa fa-user fa-fw"></i>&nbsp;&nbsp;' + data.firstname +" "+ data.lastname+ "</div>").addClass("btn btn-primary");
          $user = $("<div></div>").append($userName).addClass("center-block text-center");
          $p.append($user);
      }
      else if(data.id == 0 ) {
      	$("#loginForm").html("").append($('<i class="fa fa-times"></i><span>&nbsp;&nbsp;Invalid Credentials</span>'));
        setTimeout(function(){
          $("#loginForm").html("Log in");
        },1000);
      	return false;
      	}
    });
    return true;
}

function post() {
      var str = document.getElementById("name").value;
      var res = str.split(" ");
      firstname = res[0];
      lastname = res[1];
      email = document.getElementById("email").value;
      password =document.getElementById("password").value;
      phone = document.getElementById("password").value;
      college = document.getElementById("college").value;
      department = document.getElementById("dept").value;
      accom = document.getElementById("accom").value;

      if(firstname == "" || lastname == "" || email =="" || password =="" || phone =="" || college =="" || department =="" || accom =="") {    
         $("#saveForm").html("").append($('<i class="fa fa-times"></i><span>&nbsp;&nbsp;Fill Form Entirely</span>'));
        setTimeout(function(){
          $("#saveForm").html("Sign Up");
        },1000);
        return false;         
      }
      $.post("UserTable.php",{firstname: firstname, lastname: lastname, email: email, password: password, phone:phone, college: college, dept:department, accom:accom, fbid:fbid, gid:gid},
      function(data,status){  
      if(data == 1) {
        $("#saveForm").html("").append($('<i class="fa fa-thumbs-o-up"></i><span>&nbsp;&nbsp;Signed Up</span>'));
        alert("An Email has been dispatched to Activate your Account");
        window.location = "SIGNIN.html";
      }
      else if(data == 0) {
        $("#saveForm").html("").append($('<i class="fa fa-times"></i><span>&nbsp;&nbsp;Data Invalid</span>'));
        setTimeout(function(){
          $("#saveForm").html("Sign Up");
        },1000);
        return false;
        }
      else if(data == 2) {
        $("#saveForm").html("").append($('<i class="fa fa-thumbs-o-up"></i><span>&nbsp;&nbsp;Already a user</span>'));
        alert("This Email is already registered.");
        window.location = "SIGNIN.html";
      }
      else if(data == 3) {
      	$("#saveForm").html("").append($('<i class="fa fa-thumbs-o-up"></i><span>&nbsp;&nbsp;You are Registered</span>'));
        alert("Please Login now.");
        window.location = "SIGNIN.html";
      }
    });
    document.getElementById("signUp").reset();
    return true;
}
                            
                            
                            
                            
                            
                            
                            