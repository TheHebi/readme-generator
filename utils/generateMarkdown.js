// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if(data.license === "MIT"){
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }else if(data.license === "GNU LGPL 3.0"){
    licenseBadge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
  }else if(data.license ==="Mozilla Public License 2.0"){
    licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }else if(data.license === "Apache License 2.0"){
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0`
  }else{
    licenseBadge = ""
  }return
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge
  renderLicenseBadge()
  return `
  # ${data.project}
  ![badmath](https://img.shields.io/github/repo-size/${data.username}/${data.repo})
  ${licenseBadge}
  ## Table of Contents
* [Installation](#installation)
* [Instructions](#instructions)
* [Contributors](#contributors)
* [Questions](#questions)
* [License](#license)

  ## Description:
  ${data.description}

  ## Installation
  ${data.install}

  ## Instructions
  ${data.instructions}

  ## Contributors
  ${data.contributors}

  ## Quesions
  If you have any questions, contact me <a href="https://github.com/${data.username}" target="_blank">here</a>, or send me an email at ${data.email}.

  ## License
`;
}

module.exports = generateMarkdown;
