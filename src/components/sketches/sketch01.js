export default function sketch01(data) {
    let sk = (s) => {
        let canvas;
        let teste;
        let width = data.width;
        let height = data.height;  
        //optional vars
        const textToWrite = "Papai Legalzão!!!!";
        const SEGMENTS    = 125;
        //auto start variables
        let centerX, centerY, fontSize, INNER_RADIUS, RADIUS_VARIATION;
        let red, green, blue, r, g, b;
         
        s.windowResized = () => { 
            width = s.windowWidth;
            height = s.windowHeight;
            centerX = width/2;
	        centerY = height/2;
            let screenPct = s.min(height, width) / 1000;
            fontSize = screenPct * 120;
            INNER_RADIUS = screenPct * 200;
            RADIUS_VARIATION = screenPct * 125;
            s.textFont('Helvetica');
            s.textSize(fontSize);
            s.resizeCanvas(width, height);  
        }
          
        s.setup = () => {  
            canvas =  s.createCanvas(width, height); 
            canvas.position(0, 0);
            canvas.style('z-index', '-1');

            centerX = width/2;
	        centerY = height/2;
            let screenPct = s.min(height, width) / 1000;
            fontSize = screenPct * 120;
            INNER_RADIUS = screenPct * 200;
            RADIUS_VARIATION = screenPct * 125;
            s.textFont('Helvetica');
            s.textSize(fontSize);
            r = s.random(0, 255);
            g = s.random(0, 255);
            b = s.random(0,255);
        };

        s.draw = () => {
            s.background(255);
            red = s.map(s.cos(r), -1, 1, 0, 255);
            green = s.map(s.cos(g), -1, 1, 0, 255);
            blue = s.map(s.cos(b), -1, 1, 0, 255);
	        s.fill(red, green, blue);
            s.noStroke();
            //draw sphere
            s.beginShape();
                for (let i = 0; i < SEGMENTS; i++) {
                    let p0 = s.pointForIndex(i/SEGMENTS);
                    s.vertex(p0.x, p0.y);
                }
            s.endShape(s.CLOSE);

            r += 0.005;
            g += 0.01;
            b += 0.015;

            //draw text
            let pct = s.atan2(s.mouseY - centerY, s.mouseX - centerX) / s.TWO_PI;//follow mouse
            //let pct = 0;//dont follow mouse
            let pixToAngularPct = 1/((INNER_RADIUS+RADIUS_VARIATION/2)*s.TWO_PI);
            for (var i = 0; i < textToWrite.length; i++) {
                let charWidth = s.textWidth(textToWrite.charAt(i));
                pct += charWidth/2 * pixToAngularPct;
                
                //calculate angle
                let leftP = s.pointForIndex(pct-0.01);
                let rightP = s.pointForIndex(pct+0.01);
                let angle = s.atan2(leftP.y - rightP.y, leftP.x - rightP.x) + s.PI;
                
                s.push();
                    s.fill(128);
                    let p = s.pointForIndex(pct);
                    //apply angle
                    s.translate(p.x, p.y);
                    s.rotate(angle);
                    s.translate(-p.x, -p.y);
                    s.text(textToWrite.charAt(i), p.x-charWidth/2, p.y);
                s.pop();       
                pct += charWidth/2 * pixToAngularPct;
            }//for
        };

        s.pointForIndex = (pct) => {
                const NOISE_SCALE   = 1.5;
                let angle = pct * s.TWO_PI;
                let cosAngle = s.cos(angle);
                let sinAngle = s.sin(angle);
                let time = s.frameCount / 100;
                let noiseValue = s.noise(NOISE_SCALE * cosAngle + NOISE_SCALE, NOISE_SCALE * sinAngle + NOISE_SCALE, time);
                let radius = INNER_RADIUS + RADIUS_VARIATION * noiseValue;
                return {
                        x: radius * cosAngle + centerX,
                        y: radius * sinAngle + centerY
                    };
            }


    }
    return sk;     
}
