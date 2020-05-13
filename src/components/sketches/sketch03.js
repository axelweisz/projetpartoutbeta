export default function sketch03(data) {
      
        let sk = (s) => {
            //local  vars
            let canvas;
            let width = data.width;
            let height = data.height;
            const speed = 2;
            let freq = 1; // seconds
            let squareSizes = [];
            let angleDivider = 100;

            s.windowResized =() => { 
                    width = s.windowWidth;
                    height = s.windowHeight;
                    s.resizeCanvas(width, height);    
            }

            s.setup = () => {
                canvas =  s.createCanvas(width, height);
                canvas.position(0, 0);
                canvas.style('z-index', '-1');
                s.pixelDensity(s.displayDensity());
                s.background(0,0,0);
                s.rectMode(s.CENTER);
                squareSizes.push(0);
            }
            s.draw = () => {
                    s.translate(width/2, height/2);
                    s.noStroke();
                    s.fill(0, 20);
                    s.rect(0, 0, width, height);
                    // Add a square at the predefined frequency
                    if (s.frameCount % (freq*60) == 0) {
                        squareSizes.push(0);
                    }
                    // Remove a square once it gets too big
                    if (squareSizes[0] > width*1.1) {
                        squareSizes.shift();
                    }
                    // Draw the squares
                    s.noFill();
                    s.stroke(255);
                    s.strokeWeight(20);
                    for (var i = 0; i < squareSizes.length; i++) {
                        s.push();
                        s.rotate(squareSizes[i] / angleDivider);
                        s.rect(0, 0, squareSizes[i], squareSizes[i]);
                        s.pop();
                    } 
                    // Increase the createCanvas of the squares
                    for (var i = 0; i < squareSizes.length; i++) {
                        squareSizes[i] = squareSizes[i] + speed; 
                    }
            }
            // Interaction with keyboard
            s.keyPressed = () => {
                if (s.keyCode == s.UP_ARROW) {
                    angleDivider += 10;
                } else if (s.keyCode == DOWN_ARROW) {
                    angleDivider -= 10;
                }
            }
            // Interaction with mouse/touch
            s.touchStarted = () => {
                if (s.focused) {
                    if (s.mouseY < height/2) {
                        angleDivider += 10;
                    } else {
                        angleDivider -= 10;
                    }
                    }
            }
    }

    return sk;

}
