var inquirer = require("inquirer");
var generateMarkdown = require("./utilities/generateMarkdown.js");

const emailValidation = value => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        return true;
    } else {
    return "That doesn't look like an email address";
    }
};

const urlValidation = value => {
    if (/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(value)) {
        return true;
    } else {
    return "That doesn't look like a URL";
    }
};

const emptyResponseValidation = value => {
    if (/\w/.test(value)) {
        return true;
    } else {
    return "Input required";
    }
};



inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: emptyResponseValidation
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project:",
        validate: emptyResponseValidation
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        validate: emptyResponseValidation
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: emailValidation
    },
    {
        type: "input",
        name: "projectUrl",
        message: "What is the URL to your project?",
        validate: urlValidation
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
        default: "npm i",
        validate: emptyResponseValidation
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?",
        default: "npm test",
        validate: emptyResponseValidation
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?",
        validate: emptyResponseValidation
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?",
        default: "Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.",
        validate: emptyResponseValidation
    },

]).then(function(data) {

    generateMarkdown(data);

}).catch(function(err) {
    console.log(err);
});
