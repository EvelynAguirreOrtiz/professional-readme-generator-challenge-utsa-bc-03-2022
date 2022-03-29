// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!li) {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  - Project Title
  - Description
  - Table of Contents
  - Installation
  ${data.installation}
  - Usage
  ${data.usage}
  ## Contribute
  ## License
  ## Questions
  // github username
  // projectlink
  // email

`;
}

module.exports = generateMarkdown;
