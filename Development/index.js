var inquirer = require("inquirer");
var generateMarkdown = require("./utilities/generateMarkdown.js");

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project:"
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "projectUrl",
        message: "What is the URL to your project?"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT","Apache","GPL 3.0", "No License"]
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependecies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?",
        default: "npm test"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?",
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?",
    },

]).then(function(data) {

    generateMarkdown(data);

}).catch(function(err) {
    console.log(err);
});
