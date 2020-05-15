import Nav from "./components/nav/nav.js";
const topnavbar = new Nav();
topnavbar.render("sktchs");


import p5 from "p5";

import "./styles.scss";
import "./components/sketches/sketches.scss";

import "./components/sketches/sketch01.js";
import { populateMenu } from "./components/sketches/sketches-helpers.js";

let numOfSk = 5;
let currSketch;
let skDiv = window.document.getElementById("sketchDiv");
let imports = [];
let clickables = [];

//create the sketch navigation menu
clickables = populateMenu(numOfSk);

let sketch1 = import("./components/sketches/sketch01.js").then((_module) => {
  imports.push(_module);
  //first sketch is instatiaded
  let winDimensions = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  let sk01Var = _module.default(winDimensions);
  //we do this just because this is the first
  currSketch = new p5(sk01Var, skDiv);
});

// loop to import rest of sketches (we import the modules)
for (let i = 2; i <= numOfSk; i++) {
  let sktch = import(`./components/sketches/sketch0${i}.js`).then((_module) => {
    imports.push(_module);
  });
}

// set the click events in each item of the menu
for (let i = 0; i < numOfSk; i++) {
  clickables[i].addEventListener("click", (event) => {
    let winDimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    naviga(imports[i].default(winDimensions));
  });
}

//navigation
function naviga(_skVar) {
  currSketch.remove();
  currSketch = null;
  if (_skVar == "sk07") console.log(_skaVar);
  currSketch = new p5(_skVar, skDiv);
}
