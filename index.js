// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
// Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username",
    },
    {
        type: "input",
        message: "what is the name of your repo?",
        name: "repo",
    },
    {
        type: "input",
        message: "What is the name of your project?",
        name: "project",
    },
    {
        type: "input",
        message: "Please provide a description of your project.",
        name: "description",
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "install",
    },
    {
        type: "input",
        message: "Write instructions for using your project.",
        name: "instructions",
    },
    {
        type: "input",
        answer: "Please list any contributors to your project, use commas to seperate contributors.",
        name: "contributors",
    },
    {
        type: "input",
        message: "Please input your email to be contacted at.",
        name: "email",
    },
    {
        type: "list",
        message: "What license are you using?",
        choices: ["MIT", "GNU LGPL 3.0", "Mozilla Public License 2.0", "Apache License 2.0",],
        name: "license",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data){
        console.log(data)
    })
}

// Function call to initialize app
init();
