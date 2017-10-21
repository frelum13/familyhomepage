function myfunction(){
    var password1 = document.getElementById("password").value;
    var password2 = document.getElementById("passwordwd").value;

    if(password1 == password2)
        console.log("richtig");
    else
        console.log("false");
}