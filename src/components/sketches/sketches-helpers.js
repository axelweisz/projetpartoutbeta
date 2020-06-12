import p5 from "p5";
let skDiv = window.document.getElementById("sketchDiv");

let symbArray = [];
let randomSymbolInt = 0;
let menuDiv = window.document.getElementById("menuDiv");
let clickablez = [];

//create and populate sketches menu
export function populateMenu(numOfSk) {
  for (let i = 0; i < numOfSk; i++) {
    let line = document.createElement("div");
    randomSymbolInt = Math.floor(Math.random() * 10);

    if (symbArray.includes(randomSymbolInt))
      randomSymbolInt = Math.floor(Math.random() * 10);

    line.innerHTML = `&#973${randomSymbolInt}`;
    line.id = `sk0${i + 1}`;
    line.className = "meni";
    menuDiv.append(line);
    symbArray.push(randomSymbolInt);
    clickablez.push(line);
  }

  return clickablez;
}

//navigation
export function naviga(currSketch, _skVar) {
  currSketch.remove();
  currSketch = null;
  if (_skVar == "sk07") console.log(_skaVar);
  currSketch = new p5(_skVar, skDiv);
}
