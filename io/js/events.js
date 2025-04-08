var inputchat 

  if (document.activeElement === inputchat) return;

var button = document.getElementById("inventario");
var onbuttonItClick = function() {
inventarioopen.style.opacity = "1";

}

var onKeyPressed = function(event) {
    var inventarioopen = document.getElementById("invetory")

event.preventDefault();
if (event.key === "e" || event.key === "E") {
    inventarioopen.style.opacity = "1";
    
} if (event.key === "d" || event.key === "a") {
    inventarioopen.style.opacity = "0";

} if (event.key === "w") {
inventarioopen.style.opacity = "0";
}
if (event.key === "t" || event.key === "T") {

}
}


document.addEventListener("keydown",onKeyPressed)
button.addEventListener("click",onbuttonItClick)
