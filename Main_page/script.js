function storage() {
    var userName = document.getElementById("Username").value;
    var pwd = document.getElementById("Password").value;
    var email = document.getElementById("Email").value;
    var age = document.getElementById("Age").value;

    localStorage.setItem('Username', userName);
    localStorage.setItem('Password', pwd);
    localStorage.setItem('Email', email);
    localStorage.setItem('Age', age);

    document.getElementById("myForm").reset(); // clear the form when changing page
    
}

function check() {
    let a = 0; // counter for number of tries to authenticate
    while(!check1(i) && a < 6) {
        check1(i);
        a+=i;
    }
}

function check1(i) {
    var tries = 0;
    var userName = document.getElementById("Username").value;
    var pwd = document.getElementById("Password").value;

    if(userName === localStorage.key("Username") && pwd === localStorage.key("Password")){
        tries += 1;
        alert("Authentication success!");
        return true;
    } else {
        tries += 1;
        alert("Failed to authenticate!");
        return false;
    }
} 

var today = new Date();
var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days

function setCookie(name, value) {
    document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
}

function storeValues(form)  {
    setCookie("Username", form.field1.value);
    setCookie("Password", form.field2.value);

    document.getElementById("entryForm").reset(); // clear the form when changing page
    return true;
}