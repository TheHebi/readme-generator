// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

let licenseBadge
let licenseLink
let licenseSection

function renderLicenseBadge(data) {
  if(data.license === "MIT"){
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }else if(data.license === "GNU LGPL 3.0"){
    licenseBadge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
  }else if(data.license ==="Mozilla Public License 2.0"){
    licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }else if(data.license === "Apache License 2.0"){
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }else{
    licenseBadge = ``
  }
}   

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if(data.license !== "No License"){
    licenseLink = `* [License](#license)`
  }else{
    licenseLink = ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if(data.license !== "No License"){
    licenseSection = `## License \n This project uses the ${data.license} License`
  }else{
    licenseSection = ``
  }
}
function renderContributorsSection(data){
  if (data.contributors !== ""){
    contSection = `## Contributors`
  }else{
    contSection = ``
  }
}

function renderContributorsLink(data){
  if (data.contributors !== ""){
    contLink = `* [Contributors](#contributors)`
  }else{
    contLink = ``
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 
  renderLicenseBadge(data)
  renderLicenseLink(data)
  renderLicenseSection(data)
  renderContributorsLink(data)
  renderContributorsSection(data)
  return `
 # ${data.project}
![badmath](https://img.shields.io/github/repo-size/${data.username}/${data.repo})
${licenseBadge}
 ## Table of Contents
* [Installation](#installation)
* [Instructions](#instructions)
${contLink}
* [Questions](#questions)
${licenseLink}

## Description:
${data.description}

## Installation
${data.install}

## Instructions
${data.instructions}

${contSection}
${data.contributors}

## Quesions
If you have any questions, contact me <a href="https://github.com/${data.username}" target="_blank">here</a>, or send me an email at ${data.email}.

${licenseSection}
`;
}

module.exports = generateMarkdown;
