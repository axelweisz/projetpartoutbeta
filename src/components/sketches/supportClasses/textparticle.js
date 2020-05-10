export default class TextParticle {

        constructor(_word, _x, _y, _font, _p5){
                this.p5 = _p5
                this.x = _x;
                this.y = _y;
                this.alpha = 0;
                this.word = _word;
                this.txtTaille = 32;
                this.tailleMax = 80;
                this.scaleFactor = 0.25;
                this.scaleAcc = 0.15;
                this.alphaFactor = 2.5;
                this.txtWidth;
                this.font = _font;
        }
      
        update() {
              this.alpha += this.scaleFactor;
              this.txtTaille >= this.tailleMax? this.txtTaille = this.tailleMax: this.txtTaille += this.alphaFactor;
              this.scaleFactor += this.scaleAcc;
        }
  
        show() {
              this.p5.fill(this.alpha);
              this.p5.textSize(this.txtTaille);
              this.p5.textAlign(this.p5.CENTER, this.p5.CENTER);
              this.p5.text(this.word, this.x, this.y);  
              this.p5.push();
                this.txtWidth =  this.font.textBounds(this.word, this.x, this.y, this.txtTaille);  
                this.p5.fill(128, 64, 255);
                this.p5.rect(this.txtWidth.x, this.txtWidth.y+75, this.txtWidth.w, this.txtWidth.h/3);
              this.p5.pop();
            
        }
}