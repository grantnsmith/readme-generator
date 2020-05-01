var fs = require("fs");

function generateMarkdown(data, name, profileURL, photo) {
  
const markdown = `
# ${data.title}

## Description
${data.description}

## Deployed Application

[Deployed Application](${data.projectUrl})

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install the necessary dependecies, run the following command:

${data.installation}

## Usage

${data.usage}

## License

This project is licensed under: ${data.license}.

## Contributing

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

${data.contributing}

## Tests

To run test, run the following command:

${data.tests}

## Questions

![profile picture](${photo})

Thanks for checking out my project! See more of my projects at my [Github Profile](${profileURL}). If you have any questions, please contact contact me, ${name} at ${data.email}

`
fs.writeFile("README_2.md", markdown, function(err) {
  if (err) {
      return console.log(err);
  } else {
      console.log("Success!")
  }
})
}

module.exports = generateMarkdown;
