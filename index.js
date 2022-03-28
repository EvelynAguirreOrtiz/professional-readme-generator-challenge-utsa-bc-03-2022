// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];


//  , Installation, Usage, License, Contributing, Tests, and Questions
const promptUser = () => {
  return inquirer.prompt([
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
      type: 'input',
      name: 'tableOfContents',
      message: 'Provide your Table of Contents:',
      when: ({ confirmTableOfContents }) => {
        if (confirmTableOfContents) {
          return true;
        } else {
          return false;
        }
      }
    }
  ]);
};



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
