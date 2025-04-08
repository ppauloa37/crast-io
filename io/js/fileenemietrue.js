var enemy = document.getElementById("enemy");
    var playerdraw = document.getElementById("playerdraw");
var primaryexe = function() {
enemy.style.marginLeft = "600px";

}


var exeenemy = function() {


var enemyX = parseFloat(enemy.style.marginLeft) || 0;
var jogador = parseFloat(playerdraw.style.marginLeft) || 0;
if (enemyX === 0) {
  enemy.style.marginLeft = "6000px"; 
  console.log("enemy foi igual a " + enemyX + " e foi para fora da tela");
  enemyX = 6000;
}

if (enemyX < jogador) {
  enemy.style.marginLeft = (parseFloat(enemy.style.marginLeft) + 10) + "px";
}
if (enemyX > jogador) {
  enemyX.style.marginLeft = (parseFloat(enemy.style.marginLeft) - 10) + "px";
}}
window.setInterval(1000, exeenemy);
