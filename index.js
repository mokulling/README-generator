const inquirer = require("inquirer");
const fs = require('fs')

// array of questions for user
const questions = ['what is the title of your project?', 'What is the description of the project?', 'What license would you like for your application?', 'what is your github username?', 'what is your email address?'
];

 



// function to write README file
function writeToFile(fileName, data) {
   
    const inputs = [`${data.title}`, `${data.description}`, `${data.license}`, `${data.github}`, `${data.email}`]
        const filename = `${data.title.toLowerCase().split(' ').join('')}.MD`;
        fs.writeFile(filename, '\n\n## Description' +
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
