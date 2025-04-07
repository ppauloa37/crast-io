var frentebtt = document.getElementById("frente");
var ladobtt = document.getElementById("lado");
var jogador = document.getElementById("player");
var image = document.getElementById("playerdraw");

var primary = function() {
jogador.style.marginLeft = "0px";
image.src = "https://cdn.jsdelivr.net/gh/ppauloa37/crast-io@3ac3d7d/io/images/enemie/enemie1.png";
}
primary();

var frenteItClick = function() {
jogador.style.marginLeft = (parseFloat(jogador.style.marginLeft + 1) - 10) + "px";
image.src = "https://cdn.jsdelivr.net/gh/ppauloa37/crast-io@3ac3d7d/io/images/enemie/enemiee1.png";
}
var ladoItClick = function() {
jogador.style.marginLeft = (parseFloat(jogador.style.marginLeft + 1) + 10) + "px";
image.src = "https://cdn.jsdelivr.net/gh/ppauloa37/crast-io@3ac3d7d/io/images/enemie/enemie1.png";
}
frentebtt.addEventListener("click", frenteItClick);
ladobtt.addEventListener("click", ladoItClick);

var keysItMoveFunction = function(event) {
    var bolha = document.getElementById("bolha");
    event.preventDefault();

if (event.key === "a") {
    frenteItClick();
bolha.style.opacity = "0";
}
if (event.key === "d") {
    ladoItClick();
    bolha.style.opacity = "0";
}
if (event.key === ">") {
    bolha.style.opacity = "1";
}
}
document.addEventListener("keydown", keysItMoveFunction)
