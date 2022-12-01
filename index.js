// Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// Create an array of questions for user input
const questions = 
    [
        {
          type: 'input',
          message: 'Project title:',
          name: 'title',
        },
        {
          type: 'input',
          message: 'Include a description for your ReadMe:',
          name: 'description',
        },
        {
          type: 'input',
          message: 'Include installation instructions:',
          name: 'installation',
        },
        {
          type: 'input',
          message: 'Include usage information:',
          name: 'usage',
        },
        {
          type: 'list',
          choices: ['license a', 'license b'],
          name: 'license',
        },
        {
          type: 'input',
          message: 'Include contributing information:',
          name: 'contributing',
        },
        {
          type: 'input',
          message: 'Include tests:',
          name: 'tests',
        },
        {
          type: 'input',
          message: 'Email:',
          name: 'questions',
        }
      ]


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(function (response) {

          const readmeText =
`# ${response.title}
------------------------------------------------

## Description
------------------------------------------------
${response.description}


## Installation
------------------------------------------------
${response.installation}


## Usage
------------------------------------------------
${response.usage}


## License
------------------------------------------------
${response.license}


## Contributing Info
------------------------------------------------
${response.contributing}





For any questions contact me at: ${response.questions}
` 
          fs.writeFile('readme.md', readmeText, 
        (err) => err ? console.error(err) : console.log('logged') 
        )
        })
}

// Function call to initialize app
init();