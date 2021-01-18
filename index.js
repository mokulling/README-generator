const inquirer = require("inquirer");
const fs = require('fs')

// array of questions for user
const questions = ['what is the title of your project?', 'What is the description of the project?', 'What license would you like for your application?', 'what is your github username?', 'what is your email address?'
];

const cc = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'
const mit = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
const apache = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
const gnu = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)' 



// function to write README file
function writeToFile(fileName, data, badgeLink) {
   
    const inputs = [`${data.title}`, `${data.description}`, `${data.license}`, `${data.github}`, `${data.email}`]
        const filename = `${data.title.toLowerCase().split(' ').join('')}.MD`;
        fs.writeFile(filename, badgeLink + '\n\n## Description' +
        '\n\n'+ inputs[1] + '\n\n# Table of Contents \n\n' + '1. [Description](#Description)\n 2. [Questions](#Questions?) \n\n 3. [Installation](#Installation) \n\n 4. [Usage](#Usage) \n\n 5. [Contributing](#Contributing) \n\n6. [License](#License) \n\n 7. [Tests](#Tests)', (err) =>{
    if (err) throw (err)        
        }
        )
        fs.appendFile(filename, 
             '\n\n' + '## Installation\n\n\n' + '## Usage\n\n\n' + '## Contributing\n\n\n'+
            '## Questions?\n\n\n' +
             'Contact me here:\n\n' + 
             '[GitHub Profile](https://www.github.com/' + inputs[3] + ')' + 
            '\n\n[Email](mailto:'+inputs[4] +')' + '\n\n Reach out to me at either of the links above if you have any questions regarding the project or if you want to become a collaborator.', 
             (err) => console.log(err))
             
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
        choices: ['Apache', 'CC', 'MIT', 'GNU'],
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
        if (`${data.license}` =='CC') {
            badgeLink = cc
        } else if (`${data.license}` == 'Apache') {
            badgeLink = apache
        } else if (`${data.license}` == 'GNU') {
            badgeLink = gnu
        } else badgeLink = mit
        writeToFile(`${data.title.toLowerCase().split(' ').join('')}.MD`, data, badgeLink)

    })}

        
        
    
    
    




    
    // function call to initialize program
init()
