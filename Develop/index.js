//packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown.js');
const api = require('./utils/api.js');
//array of questions for user input
const questions = () => {
  return inquirer.createPromptModule([
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log('Please enter a valid GitHub username');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'repo',
      message: 'What is the name of your GitHub repo?',
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log('Please enter name repo name.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log('Please enter the title of your project.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a brief description of your project?',
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log('Please enter a valid description of your project.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps to install your project?',
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log('Please provide steps to install your project.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How would you use this app?',
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log('Please enter a description on how to use.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Provide a list of any of your collaborators.',
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log('Please enter links for your collaborators.');
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license is applicable to this project?',
      choices: ['MIT', 'GNU'],
      default: ["MIT"],
      validate: userInput => {
        if (userInput) {
          return true;
        } else {
          console.log('Please enter a valid license.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'test',
      message: 'How can you test this application?',
      default: 'npm test',
    },
  ]);
};


//function to write README file
function writeToFile(fileName, data) {
  fs.writeToFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }
    console.log("README.md file has been generated.")
  });
}

const writeFileAsync = util.promisify(writeToFile);

//function to initialize app
async function init() {
  try {
    //inquirer
    const answers = await inquirer.createPromptModule(questions);
    console.log("Your answer: ", answers);

    //GitHub api
    const userInfo = await api.getUser(answers);
    console.log("Your GitHub info: ", userInfo);

    //generate markdown
    console.log("Generating your README,")
    const markdown = generateMarkdown(answers, userInfo);
    console.log(markdown);

    await writeFileAsync('ExampleREADME.md', markdown);
  } catch (error) {
    console.log(error);
  }
};

// Function call to initialize app
init();
