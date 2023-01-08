function create() {
    var userName = document.getElementById("Username").value;
    var pwd = document.getElementById("Password").value;
    var confirmation = document.getElementById("PasswordConfirmation").value;

    if(confirmation != pwd){
        alert("Sign up failed! Try again!")
        pwd.reset();
        confirmation.reset();
        return;
    } else {
        localStorage.setItem('Username', userName);
        localStorage.setItem('Password', pwd);

        document.getElementById("registerForm").reset(); // clear the form when changing page
        alert("Sign up success!");
        
        document.location.href="..\\ChoiceGames_Page\\choiceGames.html";
        return;
    }
}
var turn = 0;

function check() {
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    

    var storedUsername = localStorage.getItem("Username").value;
    var storedPassword = localStorage.getItem("Password").value;

    if(username === storedUsername && password === storedPassword) {
        alert("Login success!")
        username.reset();
        password.reset();
        document.location.href="..\\ChoiceGames_Page\\choiceGames.html";
        return;
    } else {
        alert("Failed to login");
        turn += 1;
    }

    if(turn == 5) {
        localStorage.removeItem("Username");
        localStorage.removeItem("Password");
        alert("Too much fails! You need to register!")
        return;
    } 
}