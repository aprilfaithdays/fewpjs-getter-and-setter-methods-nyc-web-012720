class Circle {
    constructor(radius){
        this.radius = radius;
    }
    get diameter(){
        return this.radius * 2;
    }
    get circumference() {
        return Math.PI * this.diameter;
    }
    get area() {
        return Math.PI * this.radius * this.radius;
    }
    set diameter(newdm){
        this.radius = newdm / 2;
    }
    set circumference(newCm) {
        this.diameter = newCm / Math.PI  
    }
    set area(newArea) {
        this.radius = Math.sqrt(newArea/Math.PI)
    }
}