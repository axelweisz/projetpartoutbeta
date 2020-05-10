import Type from './typeclass.js';

export default function sketch2(data) {

     let sk = (s) => {
            //local vars to the sketch
            let canvas;
            let width = data.width;
            let height = data.height;
            let str = "Projet P.ART-OUT. Études de spatialization du texte en Réalité Augmenté";
            let str_arr = [];
            let font;
            let sdgreg;

            s.windowResized = () => { 
                    width = s.windowWidth;
                    height = s.windowHeight;
                    s.resizeCanvas(width, height);   
            }

            s.preload = () => {
                font = s.loadFont("../../assets/SpaceGrotesk-Regular.otf");
            }

            s.setup = () => {
                canvas  = s.createCanvas(s.windowWidth, s.windowHeight, s.WEBGL);
                canvas.position(0, 0);
                canvas.style('z-index', '-1');
               
                s.colorMode(s.HSB, 360, 100, 100, 100);
                let strs = str.split(" ");
                for (let i = 0; i < strs.length*10; i++) {
                    let x = s.random(-width / 2, width / 2);
                    let y = s.random(-height / 2, height / 2);
                    let z = s.random(-width*5, width/2);
                    str_arr.push(new Type(strs[i%strs.length], x, y, z, width, s, font));     
                }
            }

             s.draw = () => {
                s.background(0,0,0);
                s.orbitControl();
                for (let i = 0; i < str_arr.length; i++) {
                    str_arr[i].update();
                    str_arr[i].display();
                }
            }         
     }
    return sk;
}









