// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const { questions } = require("./utils/questions");

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName,data,function(err){
      if(err){
          throw err
      }
      console.log("File Written")
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("output/readme.md", generateMarkdown(data))
  });
}

// Function call to initialize app
init();
