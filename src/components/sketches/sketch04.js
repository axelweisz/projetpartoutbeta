export default function sketch04(data) {
        let sk = (s) => {
            let canvas;
            let teste;
            let width = data.width;
            let height = data.height;  
            //optional vars
            const textToWrite = "par le biais du \"Creative Coding\"";
            const frequency = 0.001;
            const fontSize = 100;
            //auto start variables
            let centerX, centerY, startX, step, amplitude, r, red, g, b;

        s.windowResized = () => { 
            width = s.windowWidth;
            height = s.windowHeight;
            s.resizeCanvas(width, height);  
        }

        s.setup = () => {  
            canvas =  s.createCanvas(width, height); 
            canvas.position(0, 0);
            canvas.style('z-index', '-1');
            
            centerX = width/2;
            centerY = height/2;
            s.textFont('Helvetica');
            s.textSize(fontSize);
            step = 0;
	        startX = centerX - s.textWidth(textToWrite) / 2;
            r = s.random(0, 255);
            g = s.random(0, 255);
            b = s.random(0,255);
        };
       
        s.draw = () => {
            s.background(255);
            red = s.map(s.cos(r), -1, 1, 0, 255);
            s.fill(red, 0, 128);
            //console.log("r: " + r + " red: " + red);
            r += 0.01;
            //for calculating the noise in getY function
	        step += 0.01;
	        amplitude = s.map(s.mouseY, 0, s.height, 300, 800);
            
            //draw liquid
	        s.beginShape();
                s.vertex(0, height);
                for(let x = 0; x < width; x += 10){
                    s.vertex(x, s.getY(x));
                }
                s.vertex(width, s.getY(width));
                s.vertex(width, height);
	        s.endShape(s.CLOSE);
           
            //draw text
	        let x = startX;
	        for (var i = 0; i < textToWrite.length; i++) {
		        let charWidth = s.textWidth(textToWrite.charAt(i));
		        x += charWidth/2;
		        let y = s.getY(x);
		        //calculate angle
		        let angle = s.atan2(s.getY(x - charWidth / 2) - s.getY(x + charWidth / 2), -fontSize) + s.PI;
		        angle *= 2;//expression
		        s.push();
			        //apply angle
			        s.translate(x, y);
				    s.rotate(angle);
			        s.translate(-x, -y);
                    s.fill(0);
			        s.text(textToWrite.charAt(i), x-charWidth/2, y);
		        s.pop();
		        x += charWidth/2;
	        }//for
        };
        
        s.getY = (x) => { 
            return centerY/2 + s.noise(step, x * frequency) * amplitude;
        }

        s.mouseMoved = () => {
	        startX = s.mouseX - s.textWidth(textToWrite) / 2;
        }
    }
    return sk;     
}
