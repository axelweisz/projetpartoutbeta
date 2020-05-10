/** 
    P_2_3_3_01

    Generative Gestaltung, ISBN: 978-3-87439-759-9
    First Edition, Hermann Schmidt, Mainz, 2009
    Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
    Copyright 2009 Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni

    http://www.generative-gestaltung.de

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/
/**
    * draw tool. shows how to draw with dynamic elements. 
    * 
    * MOUSE
    * drag                : draw with text
    * 
    * KEYS
    * del, backspace      : clear screen
    * arrow up            : angle distortion +
    * arrow down          : angle distortion -
    * s                   : save png
 */

export default function sketch4(data) {
    let sk = (s) => {
        //REQUIRED basic vars for configuration, screensize, etc 
        let canvas;
        let width = data.width;
        let height = data.height;  
        //optional vars
        let x = 0, y = 0;
        let stepSize = 6.0;
        let letters = "P-ART.Tout est un projet qui veut comprendre la tansition des arts et de la litterature pour les moyens numeriques, en faisant des expérimentations avec la espatialization du texte en Réalité Augmenté et en pensant et utilisant le detournement des outils de programmation pour créer des expériences esthétiques par le biais du \"creative coding\"";
        let fontSizeMin = 14;
        let angleDistortion = 0.0;
        let counter = 0;   
        //REQUIRED 
        // windoResized can do stuff to the code of the sketch too if needed (like respawn stuff) 
        s.windowResized = () => { 
            width = s.windowWidth;
            height = s.windowHeight;
            s.resizeCanvas(width, height);  
            //we have to redo the background 
            s.background(255);
        }
        //OPTIONAL 
        //in preload we load stuff from the assets folder (elsewhere it seems it doesn't work)
        s.preload = () => { 
        }

        s.setup = () => {  
            //REQUIRED 
            //this is for use the canvas in windowSize as background 
            canvas =  s.createCanvas(width, width); 
            canvas.position(0, 0);
            canvas.style('z-index', '-1');
            //OPTIONAL setup stuff
            s.background(255);
            s.smooth();
            s.cursor(s.CROSS);
            x = s.mouseX;
            y = s.mouseY;
            s.textAlign(s.LEFT);
            s.fill(0);
        };
        //OPTIONAL
        s.draw = () => {
            if (s.mouseOver) {
                let d = s.dist(x,y, s.mouseX, s.mouseY);
                s.textFont('Georgia');
                s.textSize(fontSizeMin+d/2)
                let newLetter = letters.charAt(counter);;
                stepSize = s.textWidth(newLetter);
                if (d > stepSize) {
                    let angle = s.atan2(s.mouseY-y, s.mouseX-x); 
                    s.push();
                        s.translate(x, y);
                        s.rotate(angle + s.random(angleDistortion));
                        s.text(newLetter, 0, 0);
                    s.pop();
                    counter++;
                    if (counter > letters.length-1) counter = 0;
                    x = x + s.cos(angle) * stepSize;
                    y = y + s.sin(angle) * stepSize; 
                }
            }
        };
        //OPTIONAL p5 functions and custom functions and classes
       s.mouseOver = () => {
            x = s.mouseX;
            y = s.mouseY;
        }

        s.keyTyped = () => {
            if (s.key == 's' || s.key == 'S') s.save("P_2_3_3_01.png");
        }
        s.keyPressed = () => {
            // angleDistortion ctrls arrowkeys up/down 
            if (s.keyCode == s.DELETE || s.keyCode == s.BACKSPACE) s.background(255);
            if (s.keyCode == s.UP_ARROW) angleDistortion += 0.1;
            if (s.keyCode == s.DOWN_ARROW) angleDistortion -= 0.1; 
        }
    }
    return sk;     
}
