var fs = require("fs");

function generateMarkdown(data) {
  
const markdown = `
# ${data.title}

## Description
${data.description}

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

If you have any questions about the repo contact ${data.username} at ${data.email}

`
fs.writeFile("README.md", markdown, function(err) {
  if (err) {
      return console.log(err);
  } else {
      console.log("Success!")
  }
})
}

module.exports = generateMarkdown;
