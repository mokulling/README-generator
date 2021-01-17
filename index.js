const inquirer = require("inquirer");
const fs = require('fs')

// array of questions for user
const questions = ['what is the title of your project?', 'What is the description of the project?', 'What license would you like for your application?', 'what is your github username?', 'what is your email address?'
];


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
    .prompt ([
        {
        type: 'input',
        message:questions[0],
        name: 'title'
        } ,
        {
        type: 'input',
        message:questions[1],
        name: 'description'
        } ,
        {
            type: 'choices',
            message: questions[2],
            choices: ['Academic', 'CC', 'MIT', 'GNU'],
            name: 'license'
            } ,

        {
                type: 'input',
                message:questions[3],
                name: 'github'
        } ,  
                {
                    type: 'input',
                    message:questions[4],
                    name: 'email'
                    } ,  
    


    ]).then((response) =>
        console.log(response)
    );


}

// function call to initialize program
init();
