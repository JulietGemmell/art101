/**
 * Author: Juliet Gemmell
 * Created: 10.31.2022
 * License: Public Domian
 **/

var outputEL = document.getElementById("Output");

var new1EL = document.createElement("p");
var new2EL = document.createElement("p");

new1EL.innerHTML="I like money";
new2EL.innerHTML="I eat coins off the street";

outputEL.appendChild(new1EL);
outputEL.appendChild(new2EL);

new1EL.style.fontFamily="Helvetica";
new2EL.style.fontSize="40px";
