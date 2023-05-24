const inquirer = require('inquirer');
const SVGgenerator = require('./svg.js');
const { Circle, Triangle, Square } = require('./shapes.js')
const fs = require('fs');

// Class constructor that triggers inquirer and gathers the input from the user
class CLI {
    constructor(){}
    runApp(){
        return inquirer.prompt([
            {
                type: 'input',
                name: 'logoText',
                message: 'Enter text for the logo. (Must not be more than 3 characters.)',
                validate: (input) => {
                    if (input.length > 3) {
                        return 'Must not be more than 3 characters';
                    }
                    return true;
                },
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter a text color',
                // Decided to remove this validation as it was going to block HexCodes or RGB codes from being used
                // validate: (input) => {
                //     if (validColorSelection.includes(input)) {
                //         return true;
                //     }
                //     return 'Must contain a valid color selection';
                // },
            },
            {
                type: 'input',
                name: 'backgroundColor',
                message: 'Enter a color for the background of the logo',
                // validate: (input) => {
                //     if (validColorSelection.includes(input)) {
                //         return true;
                //     }
                //     return 'Must contain a valid color selection';
                // },
            },
            {
                type: 'list',
                name: 'shapeSelection',
                message: 'Select a shape for the logo',
                choices: ['Circle','Triangle','Square']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter a shape color',
                // validate: (input) => {
                //     if (validColorSelection.includes(input)) {
                //         return true;
                //     }
                //     return 'Must contain a valid color selection';
                // },
            }
            ])
            .then((data)=>{
            console.log(data);
            let shape;
            switch (data.shapeSelection) {
                case "Circle":
                    shape = new Circle();
                    break;

                case "Square":
                    shape = new Square();
                    break;
                case "Triangle":
                    shape = new Triangle();
                    break;
            }

            shape.setColor(data.shapeColor)

            const svgFile = new SVGgenerator();
            svgFile.setShape(shape);
            svgFile.setBackgroundColor(data.backgroundColor)
            svgFile.printLogoText(data.logoText,data.textColor);
            fs.writeFileSync('./examples/logo.svg', svgFile.render());
            })
            .then(()=>{
            console.log('Logo generated! Check Examples Folder')
            }).catch((err)=>{console.log(err);console.log('An error ocurred try again');})
    }
}

const validColorSelection = ['red', 'blue', 'green', 'yellow', 'purple', 'white', 'aqua', 'black', 'orange'];

module.exports = CLI;