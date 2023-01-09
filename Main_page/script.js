var turn = 0;

function check() {
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;


    var storedUsername = localStorage.getItem("Username").value;
    var storedPassword = localStorage.getItem("Password").value;

    if (username === storedUsername && password === storedPassword) {
        alert("Login success!")
        username.reset();
        password.reset();
        document.location.href = "..\\ChoiceGames_Page\\choiceGames.html";
        return;
    } else {
        alert("Failed to login");
        turn += 1;
    }

    if (turn == 5) {
        localStorage.removeItem("Username");
        localStorage.removeItem("Password");
        alert("Too much fails! You need to register!")
        return;
    }
}

//Event for the sign up form
function a(e){
    var userName = document.getElementById("Username");
    var pwd = document.getElementById("Password");
    var confirmation = document.getElementById("PasswordConfirmation");

    if(confirmation.value == pwd.value) {
        localStorage.setItem('Username', userName.value);
        localStorage.setItem('Password', pwd.value);

        userName.value.reset();
        pwd.value.reset();
        confirmation.value.reset();
        //document.getElementById("registerForm").reset(); 
        alert("Sign up success!");

        document.location.href = "../ChoiceGames_Page/choiceGames.html";
        return;
        
    } else {
        alert("Sign up failed! Try again!")
        pwd.reset();
        confirmation.reset();
        e.preventDefault();
        return false;
    } 
}