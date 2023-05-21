const inquirer = require('inquirer');

// Class constructor that triggers inquirer and gathers the input from the user
class CLI {
    constructor(){

    }
    runApp(){
        return inquirer.prompt([
            {
                type: 'input',
                name: 'logoText',
                message: 'Enter text for the logo. (Must not be more than 3 characters.)'
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter a text color'
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
                message: 'Enter a shape color'
            }
        ])
    }
}

module.exports = CLI;