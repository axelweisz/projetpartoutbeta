import './components/sketches/sketches.scss'
import p5 from 'p5';
import './components/sketches/sketch01.js'


let contSk  = window.document.getElementById('navSketchDiv');


let sketch1 =  import('./components/sketches/sketch01.js')
                .then(_module => {
                                    //imports.push(_module);
                                    //first sketch is instatiaded
                                    let winDimensions = {
                                        "width":window.innerWidth,
                                        "height":window.innerHeight
                                    }
                                    let sk01Var = _module.default(winDimensions);
                                    //we do this just because this is the first
                                    currSketch = new p5(sk01Var, contSk);
                
});