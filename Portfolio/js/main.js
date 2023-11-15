
var link = document.getElementsByClassName("p");
var con = document.getElementsByClassName("contents");
function opentab(name) {
    for (i of link) {
        i.classList.remove("active");
    }
    for (j of con) {
        j.classList.remove("act");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(name).classList.add("act");
}

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}
