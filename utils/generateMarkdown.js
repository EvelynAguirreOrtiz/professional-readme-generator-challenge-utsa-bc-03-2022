// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
function renderLicenseBadge(license) {
  // const { title, description, ...email } = data;

  if (!license) {
    return '';

  } else if (license == 'MIT') {
    return `
  ![${license}](https://img.shields.io/badge/License-MIT-yellow.svg)
  `
  } else if (license == 'Apache') {
    return `
  ![${license}](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
  `
  } else if (license == 'Eclipse') {
    return `
  ![${license}](https://img.shields.io/badge/License-EPL_1.0-red.svg)
  `
  } else if (license == 'GNU') {
    return `
  ![${license}](https://img.shields.io/badge/License-GPLv3-blue.svg)
  `
  } else if (license == 'ISC') {
    return `
  ![${license}](https://img.shields.io/badge/License-ISC-blue.svg)
  `
  } else if (license == 'Mozilla') {
    return `
  ![${license}](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)
  `
  }
};

// TODO: Create a function that returns the license link 
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';

  } else if (license == 'MIT') {
    return `
  This application is covered under [The MIT License](https://opensource.org/licenses/MIT) 
  `
  } else if (license == 'Apache') {
    return `
  This application is covered under [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)
    `
  } else if (license == 'Eclipse') {
    return `
  This application is covered under [Eclipse Public License 1.0](https://opensource.org/licenses/EPL-1.0)
    `
  } else if (license == 'GNU') {
    return `
  This application is covered under [GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0) 
  `
  } else if (license == 'ISC') {
    return `
  This application is covered under [ISC License (ISC)](https://opensource.org/licenses/ISC)
    `
  } else if (license == 'Mozilla') {
    return `
  This application is covered under [Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)
    `
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    return `## License`
  };
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {

  const { title, description, ...email } = data;

  return `
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Project Title](# (#${data.title}))
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribute](#contribute)
  
  ## Installation
  ${data.install}
  
  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  
  ## Contribute
  ${data.contribute}

  ## Questions

  GitHub:
  <https://github.com/${data.github}>

  Project URL:
  <${data.link}>

  Please send requests for additional information to:
  <${data.email}>
`;
}
module.exports = generateMarkdown;
