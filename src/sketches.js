import './components/sketches/sketches.scss'
import p5 from 'p5';
import './components/sketches/sketch01.js'

let numOfSk = 3;
let randomSymbolInt = 0;
let currSketch;
let contSk  = window.document.getElementById('sketchDiv');
let menuDiv = window.document.getElementById('menuDiv');
let imports = [];
let symbArray = [];

//create the sketch navigation menu
for(let i = 0; i< numOfSk; i++){
    var line = document.createElement('div');
    randomSymbolInt = Math.floor(Math.random() * 10);
    if(symbArray.includes(randomSymbolInt))
        randomSymbolInt = Math.floor(Math.random() * 10);
    line.innerHTML = `&#973${randomSymbolInt}`;
    line.id = `sk0${i+1}`;
    line.className = "meni";
    menuDiv.append(line);
    symbArray.push(randomSymbolInt);

}


let sketch1 =  import('./components/sketches/sketch01.js')
                .then(_module => {
                    imports.push(_module);
                    //first sketch is instatiaded
                    let winDimensions = {
                        "width":window.innerWidth,
                        "height":window.innerHeight
                    }
                    let sk01Var = _module.default(winDimensions);
                    //we do this just because this is the first
                    currSketch = new p5(sk01Var, contSk);
                });