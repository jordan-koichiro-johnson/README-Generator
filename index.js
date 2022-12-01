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
      choices: ["MIT", "Apache 2.0", "GPL 3.0", "Unlicensed", "Other"],
      default: "Unlicensed",
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
      let badgeURL;
      let licenseURL;
      switch (response.license) {
        case "MIT":
          badgeURL = "https://img.shields.io/badge/License-MIT-red"
          licenseURL = "https://opensource.org/licenses/MIT"
          break;
        case "Apache 2.0":
          badgeURL = "https://img.shields.io/badge/License-Apache%202.0-red"
          licenseURL = "https://opensource.org/licenses/Apache-2.0"
          break;
        case "GPL 3.0":
          badgeURL = "https://img.shields.io/badge/License-GPL%203.0-red"
          licenseURL = "https://opensource.org/licenses/GPL-3.0"
          break;
        case "Unlicensesd":
          badgeURL = "https://img.shields.io/badge/-Unlicensed-red"
          licenseURL = "https://opensource.org/licenses"
          break;
        case "Other":
          badgeURL = "https://img.shields.io/badge/-See%20License%20Section-red"
          licenseURL = "https://opensource.org/licenses"
          break;
      }

      const readmeText =
        `


# ${response.title}
------------------------------------------------

![license badge](${badgeURL})


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license) 
- [Contributions](#contributions) 
- [Tests](#tests) 
- [Questions](#questions) 


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
[${response.license}](${licenseURL})


## Contributing Info
------------------------------------------------
${response.contributing}

## Tests
------------------------------------------------
${response.tests}


For any questions contact me at: ${response.questions}
`
      fs.writeFile('readme.md', readmeText,
        (err) => err ? console.error(err) : console.log('logged')
      )
    })
}

// Function call to initialize app
init();