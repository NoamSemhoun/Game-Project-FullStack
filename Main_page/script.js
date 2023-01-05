function storage(event) {
    var userName = document.getElementById("Username").value;
    var pwd = document.getElementById("Password").value;

    localStorage.setItem('Username', userName);
    localStorage.setItem('Password', pwd);

    document.getElementById("entryForm").reset(); 
}

function check(event) {
    var tries = 0;
    var userName = document.getElementById("Username").value;
    var pwd = document.getElementById("Password").value;

    if(userName === localStorage.key("Username") && pwd === localStorage.key("Password")){
        tries += 1;
        alert("Authentication success!");
    }
} 

function setCookie() {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    cookievalue = escape(document.myform.customer.value) + ";";
    document.cookie = "name= " + cookieValue + "expires= " + d.toUTCString();
}