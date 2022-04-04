// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    // title of project
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (Required)',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter your project title!');
        return false;
      }
    }
  },
  {
    // description of project
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project (Required)',
    validate: projectDescriptionInput => {
      if (projectDescriptionInput) {
        return true;
      } else {
        console.log('Please enter your project description!');
        return false;
      }
    }
  },
  {
    // table of contents prompt
    type: 'confirm',
    name: 'confirmTOC',
    message: 'Would you like to add a Table of Contents?',
    default: true
  },
  {
    // Installation section prompt
    type: 'confirm',
    name: 'confirmInstallation',
    message: 'Would you like to add an Installation section?',
    default: true
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide your Installation instructions:',
    when: ({ confirmInstallation }) => {
      if (confirmInstallation) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    // Usage section prompt
    type: 'confirm',
    name: 'confirmUsage',
    message: 'Would you like to include Usage instructions?',
    default: true
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide your Usage instructions:',
    when: ({ confirmUsage }) => {
      if (confirmUsage) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    // license information
    type: 'checkbox',
    name: 'license',
    message: 'Which license did you need for this project?',
    choices: ['MIT', 'Apache', 'Eclipse', 'GNU', 'ISC', 'Mozilla']

  },
  {
    type: 'confirm',
    name: 'confirmContribute',
    message: 'Would you like to include a Contribute section?',
    default: true
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'Provide your Contribute information:',
    when: ({ confirmContribute }) => {
      if (confirmContribute) {
        return true;
      } else {
        return false;
      }
    }
  },
  // Questions section
  {
    // add GitHub user name
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username (Required)',
    validate: userNameInput => {
      if (userNameInput) {
        return true;
      } else {
        console.log('Please enter your user name!');
        return false;
      }
    }
  },
  {
    // add GitHub link
    type: 'input',
    name: 'link',
    message: 'Enter the GitHub link to your project. (Required)',
    validate: linkInput => {
      if (linkInput) {
        return true;
      } else {
        console.log('Please enter your GitHub link!');
        return false;
      }
    }
  },
  {
    // add email
    type: 'input',
    name: 'email',
    message: 'Enter you email address. (Required)',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your email address!');
        return false;
      }
    }
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {

  fs.writeFile('README.md', generateMarkdown(data), err =>

    err ? console.error(err) : console.log('README created!')
  );

}

// TODO: Create a function to initialize app                                                         
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile(data);
  });
}
// Function call to initialize app
init();
