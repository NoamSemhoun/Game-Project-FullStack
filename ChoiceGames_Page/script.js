function displayName() {
    var name = localStorage.getItem("username");
    if (!name) {
        name = "Error";
    }
    var greeting = document.getElementById("greeting");
    greeting.innerHTML = "HELLO " + name.toUpperCase() + " !";

}