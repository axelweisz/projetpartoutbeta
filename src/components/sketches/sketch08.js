import Vehicle from './vehicleclass.js';

export default function sketch08(data) {
    //do stuff with data?
    let sk = (s) => {
        let canvas;
        let teste;
        let width = data.width;
        let height = data.height;  
        //optional vars
        var font;
        var vehicles = [];

        var texts = ['Testano!!'];
        var nextT = 0;
        var maxChangeForce = 30;

        var instructions = [];
        var insText = '';

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
            s.background(64,128,32);
            
            //get the text edges (and put them in texts?) check textBounds in docs
            // var bounds = font.textBounds(texts[nextT], 0, 0, 192);
            // var posx = width / 2 - bounds.w / 2;
            // var posy = height / 2 + bounds.h / 2;
            //get the points (sample factor determines the dist between the points)
            var points = font.textToPoints(texts[nextT], width / 2, height / 2, 192, {
                sampleFactor: 0.1
            });
            //we make a new vehicle for each point
            for (var i = 0; i < points.length; i++) {
                var pt = points[i];
                var vehicle = new Vehicle(pt.x, pt.y, null, s, width, height);
                vehicles.push(vehicle);
            }

            //now wtf is this other texBounds? pro mouseclicked?
            var boundsIns = font.textBounds(insText, 0, 0, 30);
            var posxIns = width / 2 - boundsIns.w / 2;
            var posyIns = height / 6 + boundsIns.h / 2;

            var insAr = s.split(insText, ' ');

            for (var i = 0; i < insAr.length; i++) {
                var bounds2 = font.textBounds(insAr[i], 0, 0, 30);
                var posx2 = posxIns;
                var posy2 = posyIns;
                posxIns += bounds2.w + 10;
                var points2 = font.textToPoints(insAr[i], posx2, posy2, 30, {
                    sampleFactor: 0.3
                });
                for (var j = 0; j < points2.length; j++) {
                    var pt = points2[j];
                    var v = new Vehicle(pt.x, pt.y, 3, s, width, height);
                    instructions.push(v);
                }
            }
      
        };

        s.draw = () => {
               s.background(64,128,32);
              for (var i = 0; i < instructions.length; i++) {
                  var v = instructions[i];
                  v.behaviors();
                  v.update();
                  v.show();
              }
              for (var i = 0; i < vehicles.length; i++) {
                  var v = vehicles[i];
                  v.behaviors();
                  v.update();
                  v.show();
              }
        };
       
        function mouseClicked() {
              console.log("cricked!!");
              nextT++;
              nextT > (text.length-1) ? nextT = 0 : ''; 

              var bounds = font.textBounds(texts[nextT], 0, 0, 192);
              var posx = width / 2 - bounds.w / 2;
              var posy = height / 2 + bounds.h / 2;
              var points = font.textToPoints(texts[nextT], posx, posy, 192, {
                  sampleFactor: 0.1
              });

              if (points.length < vehicles.length) {
                  var toSplice = vehicles.length - points.length;
                  vehicles.splice(points.length - 1, toSplice);
                  for (var i = 0; i < points.length; i++) {
                        vehicles[i].target.x = points[i].x;
                        vehicles[i].target.y = points[i].y;
                        var force = p5.Vector.random2D();
                        force.mult(s.random(maxChangeForce));
                        vehicles[i].applyForce(force);
                  }
              } else if (points.length > vehicles.length) {

                  for (var i = vehicles.length; i < points.length; i++) {
                      var v = vehicles[i - vehicles.length].clone();
                      vehicles.push(v);
                  }

                  for (var i = 0; i < points.length; i++) {
                      vehicles[i].target.x = points[i].x;
                      vehicles[i].target.y = points[i].y;

                      var force = p5.Vector.random2D();
                      force.mult(s.random(maxChangeForce));
                      vehicles[i].applyForce(force);
                  }

              } else {
                  for (var i = 0; i < points.length; i++) {
                      vehicles[i].target.x = points[i].x;
                      vehicles[i].target.y = points[i].y;
                      var force = p5.Vector.random2D();
                      force.mult(s.random(maxChangeForce));
                      vehicles[i].applyForce(force);
                  }
              }
        }
    }
    return sk;     
}
