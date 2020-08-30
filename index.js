const inquirer = require("inquirer");
const fs = require("fs");
let licenseDes = "";
const questions = [
  "What is your email address?",
  "What is the title of your project?",
  "Description: ",
  "Table Of Contents:",
  "Installation:",
  "Usage",
  "License",
  "Contributing",
  "Tests",
  "What's your GitHub username",
];
const licenseChoices = ["MIT", "GPLv3", "AGPL"];
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
      name: "tableOfCont",
      message: questions[3],
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
      console.log("success");
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
${userObj.tableOfCont}

## Installation
${userObj.installation}

## Usage
${userObj.usage}

## Contributing
${userObj.contributing}

## License
${licenseDes}

## Questions  
https://github.com/${userObj.github}  

${userObj.email}

Feel free to email me with any questions with the application or troubleshooting. Provide your name and or contact info and I will get back to you ASAP.`;
}

// .then(function (data) {
//   var filename = data.name.toLowerCase().split(" ").join("") + ".json";

//   fs.writeFile(filename, JSON.stringify(data, null, "\t"), function (err) {
//     if (err) {
//       return console.log(err);
//     }

//     console.log("Success!");
//   });
// });

// title of your project and sections entitled Description, Table of Contents,
// Installation, Usage, License, Contributing, Tests, and Questions

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
