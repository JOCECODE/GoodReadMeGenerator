const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown");
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
    const data = markdown.generateMarkdown(userResponse);
    fs.writeFile(`${userResponse.title}.md`, data, function () {
      console.log(`${userResponse.title}.md has been created successfully!`);
    });
  });
