const inquirer = require("inquirer");
const fs = require("fs");
let licenseDes = "";
const questions = [
  "What is your email address?",
  "What is the title of your project?",
  "Description: ",
  "Table Of Contents:",
  "Installation instructions:",
  "Usage information:",
  "License",
  "Contributions guidelines:",
  "Tests instructions:",
  "What's your GitHub username?",
];
const licenseChoices = ["MIT", "GPLv3", "AGPL"];
// PROMPT SEQUENCE TO TAKE IN USER INPUT
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: questions[1],
    },
    {
      type: "input",
      name: "description",
      message: questions[2],
    },
    {
      type: "input",
      name: "installation",
      message: questions[4],
    },
    {
      type: "input",
      name: "usage",
      message: questions[5],
    },
    {
      type: "list",
      name: "license",
      message: questions[6],
      choices: licenseChoices,
    },
    {
      type: "input",
      name: "contributing",
      message: questions[7],
    },
    {
      type: "input",
      name: "tests",
      message: questions[8],
    },
    {
      type: "input",
      name: "github",
      message: questions[9],
    },
    {
      type: "input",
      name: "email",
      message: questions[0],
    },
  ])
  .then((userResponse) => {
    const data = writeHTML(userResponse);
    fs.writeFile(`${userResponse.title}.md`, data, function () {
      console.log(`${userResponse.title}.md has been created successfully!`);
    });
  });

function writeHTML(userObj) {
  if (userObj.license === licenseChoices[0]) {
    userObj.license =
      "[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)";
    licenseDes = "[MIT](https://choosealicense.com/licenses/mit/)";
  } else if (userObj.license === licenseChoices[1]) {
    userObj.license =
      "[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)";
    licenseDes = "[GPLv3](https://choosealicense.com/licenses/gpl-3.0/)";
  } else {
    userObj.license =
      "[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0) ";
    licenseDes = "[AGPL](https://choosealicense.com/licenses/gpl-3.0/)";
  }
  return `# ${userObj.title}
  
  ${userObj.license}

## Table of Contents

1. [Description](#Description)
1. [Installation](#Installation)
1. [Usage](#Usage)
1. [Contributing](#Contributing)
1. [License](#License)
1. [Tests](#Tests)
1. [Questions](#Questions)

## Description
${userObj.description}

## Installation
${userObj.installation}

## Usage
${userObj.usage}

## Contributing
${userObj.contributing}

## License
${licenseDes}

## Tests
${userObj.tests}

## Questions  
GitHub: https://github.com/${userObj.github}  

Email: ${userObj.email}

Feel free to email me with any questions with the application or troubleshooting. Provide your name and or contact info and I will get back to you ASAP.`;
}
