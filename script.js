function ValidData() {
    var email = document.getElementById('email').value;
    if(email == ""){
        alert("Please enter your email")
        document.getElementById('email').focus();
        return false;
    }
    var password = document.getElementById('password').value;
    if(password == ""){
        alert("Please enter your password")
        document.getElementById('password').focus();
        return false;
    }
    var repassword = document.getElementById('retypepassword').value;
    if(repassword == ""){
        alert("Please re-enter your password")
        document.getElementById('retypepassword').focus();
        return false;
    }
    var firstname = document.getElementById('firstname').value;
    if(firstname == ""){
        alert("Please enter your first name")
        document.getElementById('firstname').focus();
        return false;
    }
    var lname = document.getElementById('lastname').value;
    if(lastname == ""){
        alert("Please enter your last name")
        document.getElementById('lastname').focus();
        return false;
    }
    
    
    

}


