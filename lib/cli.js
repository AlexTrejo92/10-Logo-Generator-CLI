const inquirer = require('inquirer');
const generateSVG = require('./svg.js');
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
                validate: (input) => {
                    if (validColorSelection.includes(input)) {
                        return true;
                    }
                    return 'Must contain a valid color selection';
                },
            },
            {
                type: 'input',
                name: 'backgroundColor',
                message: 'Enter a color for the background of the logo',
                validate: (input) => {
                    if (validColorSelection.includes(input)) {
                        return true;
                    }
                    return 'Must contain a valid color selection';
                },
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Select a shape for the logo',
                choices: ['circle','triangle','square']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter a shape color',
                validate: (input) => {
                    if (validColorSelection.includes(input)) {
                        return true;
                    }
                    return 'Must contain a valid color selection';
                },
            }
        ])
        .then((data)=>{
            console.log(data);
            fs.writeFileSync('./examples/logo.svg',generateSVG(data));
            return data
        })
        .then(()=>{
            console.log('Logo generated! Check Examples Folder')
        }).catch((err)=>{console.log(err);})
    }
}

const validColorSelection = ['red', 'blue', 'green', 'yellow', 'purple']

module.exports = CLI;