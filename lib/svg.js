// SVG class constructor

class SVGgenerator {
    constructor() {
        this.logoText = '';
        this.shapeEl = '';
        this.textColor = '';
        this.backgroundColor = '';
    }
    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        <rect width="100%" height="100%" fill="${this.backgroundColor}" />

        ${this.shapeEl}

        ${this.logoText}`
    }

    setBackgroundColor(backgroundColor) {
        this.backgroundColor = `${backgroundColor}`
    }

    printLogoText(logoText, textColor) {
        this.logoText = `<text x="150" y="125" font-size="50" text-anchor="middle" fill="${textColor}">${logoText}</text> </svg>`;
    }

    setShape(shape) {
        this.shapeEl = shape.render();
    }

}

module.exports = SVGgenerator;