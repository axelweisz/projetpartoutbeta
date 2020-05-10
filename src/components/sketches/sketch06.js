import tracery from 'tracery-grammar';
import TextParticle from './textparticle.js'

export default function sketch06(data) {
    let sk = (s) => {
        let canvas;
        let teste;
        let width = data.width;
        let height = data.height;  
        //optional vars
        let story = {
              start: '#[hero:#character#]story#',
              character: ['dragon', 'unicorn', 'rainbow'],
              story: 'A #adj# #hero# fights the #adj# monster. Go #hero# go!',
              adj: ['dark', 'sleepy', 'quiet']
            };
        let grammar;
        let button;
        let sentence = [];
        let words;
        let w = 0;
        let wo = 0; 
        let wor = 0;

        let startPosW = width/10;
        let startPosH = height/10;
        let spaceBetweenWords = width/4.5;
        let font;

        s.windowResized = () => { 
            width = s.windowWidth;
            height = s.windowHeight;
            s.resizeCanvas(width, height);  
        }

        s.preload = () => { 
            font = s.loadFont("../../assets/SpaceGrotesk-Regular.otf");
        }

        s.setup = () => {  
            canvas =  s.createCanvas(width, width); 
            canvas.position(0, 0);
            canvas.style('z-index', '-1');
            //OPTIONAL setup stuff
            grammar = tracery.createGrammar(story);
            var result = grammar.flatten('#start#');
            words = result.split(' ');

            for(let i =0 ; i< 3; i++){
                let pos;
                i == 0? pos = width/6: pos = width/6+(width/3*i);
                sentence[i]  = new TextParticle(words[i], pos, startPosH*2.2, font, s);
           
            }
            for(let i = 0; i< 4; i++){
                let pos;
               i == 0? pos = width/10: pos = width/8+(width/4*i);
                sentence[i+3]  = new TextParticle(words[i+3], pos, startPosH*4.8, font, s);
                console.log("word["+(i+3)+"]: " + words[i+3] + " pos: " + pos);
            }

             for(let i = 0; i< 3; i++){
                let pos;
                i == 0? pos = width/6: pos = width/6+(width/3*i);
                sentence[i+7]  = new TextParticle(words[i+7], pos, startPosH*7.2, font, s);
            }


        };

        
        s.draw = () => {
            s.background(0);
            for(let i = 0; i < sentence.length; i++){
                sentence[i].update();
                sentence[i].show();
            }

            s.fill(255, 128, 64);
            s.rect(0, 0, width/3, 50);
            s.fill(128, 255, 64);
            s.rect(width/3, 0, width/3, 50);
            s.fill(64, 128, 255);
            s.rect((2*width/3), 0, width/3, 50);
 


            s.fill(255, 128, 64);
            s.rect(0, 50, width/4, 50);
            s.fill(128, 255, 64);
            s.rect(width/4, 50, width/4, 50);
            s.fill(64, 128, 255);
            s.rect((2*width/4), 50, width/4, 50);
            s.fill(255, 128, 64);
            s.rect((3*width/4), 50, width/4, 50);
        };
        //OPTIONAL p5 functions and custom functions and classes
        s.mousePressed = () => {

        };
        

    }
    return sk;     
}
