const inquirer = require("inquirer");
const fs = require("fs");
const questions = [
  "What is your name",
  "What is the title of your project?",
  "Description: ",
  "Table Of Contents:",
  "Installation:",
  "Usage",
  "License",
  "Contributing",
  "Tests",
  "Questions",
];

inquirer
  .prompt([
    {
      type: "input",
      name: "userName",
      message: questions[0],
    },
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
      type: "input",
      name: "license",
      message: questions[6],
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
      name: "questions",
      message: questions[9],
    },
  ])
  .then((userResponse) => {
    const data = writeHTML(userResponse);
    fs.writeFile(`${userResponse.userName}.md`, data, function () {
      console.log("success");
    });
  });

function writeHTML(userObj) {
  console.log("inside of the HTML FUNC", userObj);
  return `
# ${userObj.title}

## Table of Contents
${userObj.tableOfCont}

## Installation

 ${userObj.installation}

## Usage

${userObj.usage}

## Contributing
${userObj.contributing}

## License
${userObj.license}


## Questions  
${userObj.questions}
  `;
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
