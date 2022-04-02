// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  return `
  # ${data.title}
  ${data.license}
`;
}

// TODO: Create a function that returns the license link 
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

// url:
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `
    ## License
    ${data.license}
`;

}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {

  const { title, description, ...email } = data;
 
  return `
  # ${data.title}
  ![GitHub](${data.license})
  ## Description
  ${data.description}

  ## Table of Contents
  - [Project Title](#project-title)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribute](#contribute)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  ## License
 
  ## Contribute
  ${data.contribute}
  ## Questions

  [GitHub](https://.com/${data.github})

  <a href="${data.link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
  (${data.link})
 - Please send requests for additional information to:
  <${data.email}>
`;
}

module.exports = generateMarkdown;

