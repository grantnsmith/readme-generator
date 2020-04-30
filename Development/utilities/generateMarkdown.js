function generateMarkdown(data) {
  
  return `
# ${data.title}
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

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

This project is license under the ${data.license} license.

## Contributing

${data.contributing}

## Tests

To run test, run the following command:

${data.tests}

## Questions

If you have any questions about the repo contact ${data.username} at ${data.email}

`
}


module.exports = generateMarkdown;
