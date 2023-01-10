var turn = 0;

function check(e) {
  var username = document.getElementById("Username").value;
  var password = document.getElementById("Password").value;

  var storedUsername = localStorage.getItem("Username");
  var storedPassword = localStorage.getItem("Password");

  if (username == storedUsername && password == storedPassword) {

      alert("Login success!")

      document.getElementById("Username").value = "";
      document.getElementById("Password").value = "";

      checkCookie();
      e.preventDefault();
      window.open("../ChoiceGames_Page/choiceGames.html");
      return;

  } else {
    while(username != storedUsername || password != storedPassword) {

      alert("Failed to login");
      e.preventDefault();
      turn += 1;

      if (turn == 5) {

        localStorage.removeItem("Username");
        localStorage.removeItem("Password");

        alert("Too much fails! You need to register!")
        return;
      }
    }
  }
}

//#region cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 365);
      }
    }
  }
//#endregion

//Event for the sign up form
function a(e){

  var userName = document.getElementById("Username").value;
  var pwd = document.getElementById("Password").value;
  var confirmation = document.getElementById("PasswordConfirmation").value;
        
  if(confirmation != pwd) {

      alert("Sign up failed! Try again!")
      document.getElementById("Password").value = "";
      document.getElementById("PasswordConfirmation").value = "";
      e.preventDefault();
      return false;

  } else if (userName == localStorage.getItem("Username", userName) && pwd == localStorage.getItem("Password", pwd)) {

    alert("You are already registered! You need log in!");
    e.preventDefault();
    window.close("../Main_page/register.html");
    window.open("../Main_page/index.html");
    return false;

  } else {
    var i = 0;

    while(("Username"+i) in localStorage && ("Password"+i) in localStorage) {
      i++;
    }
    localStorage.setItem(("Username"+i), userName);
    localStorage.setItem(("Password"+i), pwd);
        
    document.getElementById("Username").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Password").value = "";
    document.getElementById("PasswordConfirmation").value = "";

    alert("Sign up success!");
    checkCookie();
    this.window = "../Main_page/index.html";
    window.open("../ChoiceGames_Page/choiceGames.html");
    return;
  }
}