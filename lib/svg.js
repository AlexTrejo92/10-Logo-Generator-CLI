// Code to create SVG files with data gathered from the terminal
// const cli = require('./cli.js');
// const { Circle,Square,Triangle } = require('./shapes.js');

class SVGgenerator {
    constructor() {
        this.logoText = '';
        this.shape = '';
        this.textColor = '';
    }
    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        <rect width="100%" height="100%" fill="white" />

        ${this.shape}

        ${this.logoText}`
    }

    printLogoText(logoText, textColor) {
        this.logoText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${logoText}</text> </svg>`;
    }

    setShape(shape) {
        // this.shape = shape.render();
        if (shape === 'circle') {
            return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
        } else if (shape === 'triangle') {
            return `<polygon points="150,18 244, 182 56, 182" fill="${this.shapeColor}" />`;
        } else {
            return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />` 
        }
    }

}

// function generateSVG(data) {
//     return `<svg version="1.1"
//     width="300" height="200"
//     xmlns="http://www.w3.org/2000/svg">

//  <rect width="100%" height="100%" fill=${data.backgroundColor} />

//  <circle cx="150" cy="100" r="80" fill=${data.shapeColor} />

//  <text x="150" y="125" font-size="60" text-anchor="middle" fill=${data.textColor}>${data.logoText}</text>

// </svg>`
// }

// function generateCircle(data) {
    
// }

// function generateTriangle(data) {

// }
// function generateSquare(data) {

// }

module.exports = SVGgenerator;