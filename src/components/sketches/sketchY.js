// import p5 from 'p5';
// import '../../node_modules/p5/lib/addons/p5.sound.min.js';

export default function sketchY(data) {

    let sk = (s) => {
        let canvas;
        let x, y, backgroundColor;
        let width = data.width;
        let height = data.height;
        let song2;

         s.windowResized =() => { 
                width = s.windowWidth;
                height = s.windowHeight;
                s.resizeCanvas(width, height);  
            }

        s.preload = () => {
        }

        s.setup = () => {     
            console.log("sketch3 data.width: " + data.width + " data.height: " + data.height);
            console.log("s.windowWidthHeight 3" + s.windowWidth +  "  " +s.windowHeight )
            canvas =  s.createCanvas(width, width);
            canvas.position(0, 0);
            canvas.style('z-index', '-1');
            backgroundColor = s.color(s.random(255), s.random(255), s.random(255));
            x = s.random(width);
            y = height / 2;
        };

        s.draw = () => {
            s.background(backgroundColor);
            s.fill(s.color(0, 0, 255));
            s.ellipse(x, y, 100, 100);
            x = (x + 1) % width;
        };

        s.mousePressed = () => {
        };
    }
    return sk;
}
