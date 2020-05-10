export default class Vehicle {

    constructor(x, y, size, _p5, w, h){
        
        this.pos = _p5.createVector(_p5.windowWidth/4, _p5.windowWidth/4);
        //console.log("this.pos: " + this.pos);
        this.target = _p5.createVector(x, y);
         console.log("this.target " + this.target);
        this.vel = _p5.createVector(_p5.random(), _p5.random())
        //p5.Vector.random2D(); it seems we can't call static methods in instance mode
        this.acc = _p5.createVector();
        size != null? this.r = size : this.r = 8; 
        this.maxspeed = 90;
        this.maxforce = 1;
        this.p5 = _p5;
    }

    behaviors(){
        var arrive = this.arrive(this.target);
        var mouse = this.p5.createVector(this.p5.mouseX, this.p5.mouseY);
        var flee = this.flee(mouse);

        arrive.mult(1);
        flee.mult(5);

        this.applyForce(arrive);
        this.applyForce(flee);
    }

    applyForce(f){
        this.acc.add(f);
    }

    update(){
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.mult(0);
    }

    show(){
        this.p5.stroke(255);
        this.p5.strokeWeight(this.r);
        this.p5.point(this.pos.x, this.pos.y);
    }

    arrive(target){
        var desired = target.sub(this.pos[0], this.pos[1], this.pos[2]);
        var d = desired.mag();
        var speed = this.maxspeed;
        if (d < 100) {
            speed = this.p5.map(d, 0, 100, 0, this.maxspeed);
        }
        desired.setMag(speed);
        var steer = desired.sub(this.vel[0], this.vel[1], 0);
        steer.limit(this.maxforce);
        return steer;
    }

    flee(target){
        var desired = target.sub(this.pos[0], this.pos[1], this.pos[2]);
        var d = desired.mag();
        if (d < 50) {
            desired.setMag(this.maxspeed);
            desired.mult(-1);
            var steer = desired.sub(this.vel[0], this.vel[1], 0);
            steer.limit(this.maxforce);
            return steer;
        } else {
            return this.p5.createVector(0, 0);
        }
    }

    clone(){
        var v = new Vehicle(this.pos.x, this.pos.y);

        v.pos.x = this.pos.x;
        v.pos.y = this.pos.y;

        v.vel.x = this.vel.x;
        v.vel.y = this.vel.y;

        v.acc.x = this.acc.x;
        v.acc.y = this.acc.y;

        return v;
    }

}

