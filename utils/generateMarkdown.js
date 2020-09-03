// EMPTY STRING TO HOLD SELECTED LICENSE CHOICE
let licenseD = "";

// ARRAY CONTAINING LICENSE CHOICES FROM PROMPT
const licenseChoices = ["MIT", "GPLv3", "AGPL"];

// FUNCTION TO GENERATE MARKDOWN FOR README
function generateMarkdown(userObj) {
  // IF USER SELECTS MIT DISPLAY ON README
  if (userObj.license === licenseChoices[0]) {
    userObj.license =
      "[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)";
    licenseD = "[MIT](https://choosealicense.com/licenses/mit/)";
  } else if (
    // IF USER SELECTS GPLv3 DISPLAY ON README
    userObj.license === licenseChoices[1]
  ) {
    userObj.license =
      "[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)";
    licenseD = "[GPLv3](https://choosealicense.com/licenses/gpl-3.0/)";
  } else {
    // IF USER SELECTS AGPL DISPLAY ON README
    userObj.license =
      "[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0) ";
    licenseD = "[AGPL](https://choosealicense.com/licenses/gpl-3.0/)";
  }

  // RETURN MARKDOWN FILE WITH USER INPUT
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
${licenseD}

## Tests
${userObj.tests}

## Questions  
GitHub: https://github.com/${userObj.github}  

Email: ${userObj.email}

Feel free to email me with any questions with the application or troubleshooting. Provide your name and or contact info and I will get back to you ASAP.`;
}

// MAKING A NEW OBJECT AS THE EXPORT
module.exports = { generateMarkdown: generateMarkdown };
