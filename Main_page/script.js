function storage(event) {
    var userName = document.getElementById("Username").value;
    var pwd = document.getElementById("Password").value;

    localStorage.setItem('Username', userName);
    localStorage.setItem('Password', pwd);

    document.getElementById("entryForm").reset(); 
    // gg
}