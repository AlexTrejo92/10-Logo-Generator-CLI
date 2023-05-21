// This will be the parent constructor for all of the shapes, that will inherit the color selected by the user via inquirer
class Shape {
    constructor () {
        this.shapeColor = '';
    }
    printShapeColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    constructor(){
    super(shapeColor);
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
}

class Triangle extends Shape {
    constructor(){
        super(shapeColor);
        }
        render() {
            return `<polygon points="150,18 244, 182 56, 182" fill="${this.shapeColor}" />`;
        }
    }

class Square extends Shape {
    constructor(){
        super(shapeColor);
        }
        render() {
            return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`;
        }
    }

module.exports = { Circle, Triangle, Square };