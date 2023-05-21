class Shape {
    constructor (size, color) {
        this.size = size;
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(size,color,circle){
    super(size, color);
    this.circle = circle;
    }
}

class Triangle extends Shape {
    constructor(size,color,triangle){
    super(size, color);
    this.triangle = triangle;
    }
}

class Square extends Shape {
    constructor(size,color,circle){
    super(size, color);
    this.circle = circle;
    }
}

module.exports = Circle;
module.exports = Triangle;
module.exports = Square;