export default class Type {
    
                constructor(_str, _x, _y, _z, _width, _s, _font) {
                    this.str = _str;
                    this.x = _x;
                    this.y = _y;
                    this.z = _z;
                    this.width = _width;
                    this.s = _s;
                    this.font = _font;
                }

                update() {
                    this.z += 10;
                    if(this.z > this.width/2){
                        this.z = -this.width*5;
                    }
                }
                display() {
                    this.s.push();
                        this.s.translate(this.x, this.y, this.z);
                        this.s.textAlign(this.s.CENTER, this.s.CENTER);
                        this.s.textFont(this.font);
                        this.s.textSize(100);
                        this.s.fill(0,0,100);
                        this.s.text(this.str, 0, 0);
                    this.s.pop();
                }
}