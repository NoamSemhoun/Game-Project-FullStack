var turn = 0;

function check(e) {

  var username = document.getElementById("Username").value;
  var password = document.getElementById("Password").value;

  if(username.value == "" || password == "")
  {
    e.preventDefault();
    alert("You need to fill the fields!");
    return false;
  }

  for(j = 0; j < localStorage.length; j++) {
    if(username == localStorage.getItem(("Username"+j)) && password == localStorage.getItem(("Password"+j))) {
      var storedUsername = localStorage.getItem("Username"+j);
      var storedPassword = localStorage.getItem("Password"+j);
    }
  }
  //var storedUsername = localStorage.getItem("Username");
  //var storedPassword = localStorage.getItem("Password");

  if (username == storedUsername && password == storedPassword) {

    alert("Login success!")

    document.getElementById("Username").value = "";
    document.getElementById("Password").value = "";

    checkCookie();
    e.preventDefault();
    window.open("../ChoiceGames_Page/choiceGames.html");
    return;

  } else {
    turn ++;
    if (turn == 3) {
      for(j = 0; j < localStorage.length; j++) {
        if(username == localStorage.getItem(("Username"+j))) {
          localStorage.removeItem("Username"+j);
          localStorage.removeItem("Password"+j);
        } else if (password == localStorage.getItem(("Password"+j))) {
          localStorage.removeItem("Username"+j);
          localStorage.removeItem("Password"+j);
        }
      }
      
      alert("Too much fails! You need to register again!");
      document.getElementById("Username").value = "";
      document.getElementById("Password").value = "";
      e.preventDefault();
      return;
    }
    
    document.getElementById("Username").value = "";
    document.getElementById("Password").value = "";
    document.getElementById("Username").type = "Username";
    document.getElementById("Password").type = "Password";
    alert("Failed to login");
    //document.getElementById("entryForm").preventDefault();
      
    e.preventDefault();
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

  for(j = 0; j < localStorage.length; j++) {
    if(userName == localStorage.getItem(("Username"+j)) && pwd == localStorage.getItem(("Password"+j))) {
      var storedUsername = localStorage.getItem("Username"+j);
      var storedPassword = localStorage.getItem("Password"+j);
    }
  }
        
  if(confirmation != pwd) {

      alert("Sign up failed! Try again!")
      document.getElementById("Password").value = "";
      document.getElementById("PasswordConfirmation").value = "";
      e.preventDefault();
      return false;

  } else if (userName == storedUsername && pwd == storedPassword) {

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