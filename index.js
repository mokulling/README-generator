const inquirer = require("inquirer");
const fs = require('fs')

// array of questions for user
const questions = ['what is the title of your project?', 'What is the description of the project?', 'What license would you like for your application?', 'what is your github username?', 'what is your email address?'
];


// function to write README file
function writeToFile(fileName, data) {
        const inputs = [`${data.title}`, `${data.description}`, `${data.license}`, `${data.github}`, `${data.email}`]
        
        console.log(inputs)
        const filename = `${data.title.toLowerCase().split(' ').join('')}.MD`;
        fs.writeFile(filename, 
            '## Description' +'\n\n'+ inputs[1] + '\n\n' + '[GitHub Profile](https://www.github.com/' +  inputs[3]+ ')' + '\n\n' + '## email' +'\n\n'+ inputs[4], (err) => console.log(err)
            
            )
       /* for (let i = 0; i < inputs.length; i++) {
            const currentInput = inputs[i];
            fs.appendFile(filename, currentInput + '\n', (err) =>
            err? console.log(err) : console.log(currentInput)
            
            
            )
            
        }*/


      };


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
        message: questions[1],
        name: 'description'
        } ,
        {
        type: 'list',
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
    


    ])
    .then((data) => {
    writeToFile(`${data.title.toLowerCase().split(' ').join('')}.MD`, data)

    })}
    // function call to initialize program
init()
