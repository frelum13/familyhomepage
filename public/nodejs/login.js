
function text_kick(){
  var playername = document.getElementById("tb_playername").value;
  if(playername == "")
  {
    document.getElementById("errors").innerHTML="Please enter a username";
    return false;
  }
  var playerpasswort = document.getElementById("tb_passwort").value;
  if(playerpasswort == "")
  {
    document.getElementById("errors").innerHTML="Please enter a password";
    return false;
  }
  
  document.getElementById("builder").style.visibility = "visible";
}
function ChangeType() {
    document.getElementById("tb_passwort").type = "text";
    setTimeout(function () {
        document.getElementById("tb_passwort").type = "password";
    }, 1000);
  }
