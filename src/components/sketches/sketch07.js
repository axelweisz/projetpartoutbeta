export default function sketch07(data) {
    let sk = (s) => {
        let canvas;
        let teste;
        let width = data.width;
        let height = data.height;  
        let vidWidth = width/2;
        let vidHeight = vidWidth*0.5628;
        //optional vars
        let vid;
        
        //REQUIRED 
        // windoResized can do stuff to the code of the sketch too if needed (like respawn stuff) 
        s.windowResized = () => { 
            width = s.windowWidth;
            height = s.windowHeight;
            s.resizeCanvas(width, height); 
            vid.position(s.windowWidth/4, s.windowHeight/4); 
            vidWidth = width/2
            vidHeight = vidWidth*0.5628;
            vid.attribute('width', vidWidth);
            vid.attribute('height', vidHeight);
        }
        
        //OPTIONAL d
        //in preload we load stuff from the assets folder (elsewhere it seems it doesn't work)
        s.preload = () => { 
        }

        s.setup = () => {  
            canvas =  s.createCanvas(width, height); 
            canvas.position(0, 0);
            canvas.style('z-index', '-1');
            //OPTIONAL setup stuff
            vid = s.createElement('iframe');
            vid.attribute('src', 'https://www.youtube.com/embed/BHJPlZL8S3Y?&autoplay=1');
            vid.attribute('width', vidWidth);
            vid.attribute('height', vidHeight);
            vid.attribute('allow', 'autoplay');
            vid.position(s.windowWidth/4, s.windowHeight/4);

        };
        //OPTIONAL
        s.draw = () => {
            s.background(128, 32, 32);
            s.fill(128);
            s.rect(0,0, 30, 30);
            
        };
        //OPTIONAL p5 functions and custom functions and classes
        s.mousePressed = () => {

        };
        //other optional stuff
    }
    return sk;     
}
