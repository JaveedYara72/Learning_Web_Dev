// .Slice() -> THis is how the Syntax is in js
// .toUpperCase()-> Transform to Upper case
// .toLowerCase()-> Transform to Lower case

var Randomnumber1 = Math.random();
Randomnumber1 = Math.floor((Randomnumber1 * 6) + 1);
var randomDice  = "images/dice" + Randomnumber1 + ".png"; // d 
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDice);

var Randomnumber2 = Math.floor(Math.random()*6) + 1;
var randomDice2 = "images/dice" + Randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDice2);

if(Randomnumber1 > Randomnumber2){
    document.querySelector("h1").textContent = "Player 1 Wins";
}else if(Randomnumber2>Randomnumber1){
    document.querySelector("h1").textContent = "Player 2 Wins";
}else{
    document.querySelector("h1").textContent = "Draw";
}