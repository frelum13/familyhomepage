function myfunction(){
    var password1 = document.getElementById("password").value;
    var password2 = document.getElementById("passwordwd").value;

    console.log(password1);

    if(password1 == password2)
    {
        console.log("richtig");
        document.getElementById("abfrage").src = "picture/Haekchen.png";
        document.getElementById("abfrage").style.visibility = "visible";
    }
    else
    {
        console.log("false");
        document.getElementById("abfrage").src = "picture/x.png";
        document.getElementById("abfrage").style.visibility = "visible";
    }
}