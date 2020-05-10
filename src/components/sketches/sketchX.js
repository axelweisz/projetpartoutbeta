export default function sketchX(data) {

  let sk = (s) => {
          let canvas;
          let x, y, backgroundColor;
          let width = data.width;
          let height = data.height;
          let song;
      
          s.windowResized =() => { 
              width = s.windowWidth;
              height = s.windowHeight;
            s.resizeCanvas(width, height);   
          }

          s.preload = () => {
          song = s.loadSound('../../assets/inteligente.mp3');
          }

          s.setup = () => {
            console.log("sketch2 data.width: " + data.width + " data.height: " + data.height);
            console.log("s.WidthHeight2: " + s.windowWidth + "  " + s.windowHeight );
            canvas =  s.createCanvas(width, width); 
            canvas.position(0, 0);
            canvas.style('z-index', '-1');
            backgroundColor = s.color(s.random(255), s.random(255), s.random(255));
            x = s.random(width);
            y = height / 2;
          };

          s.draw = () => {
            s.background(backgroundColor);
            s.fill(s.color(0, 255, 0));
            s.ellipse(x, y, 100, 100);
            x = (x + 1) % width;
          };
          
          s.mousePressed = () => {
            song.play();
          };
  }
  return sk;  
}
