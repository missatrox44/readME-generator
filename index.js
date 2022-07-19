// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')
// const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What packages need to be installed to run your program?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please input your directions for usage',
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Choose your license from the options below:',
    choices: ['None', 'MIT', 'The Unlicense'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'List all collaborators',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Write out any tests for this program',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your github username.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address.',
  },
]

const init = () => {
  inquirer.prompt(questions)
    .then((answers) => fs.writeFileSync('generatedREADME.md', generateMarkdown(answers)))
    .then(() => console.log('Success!'))
    .catch((err) => console.error(err));
};

init();






// // //alternate code using path
// // function to write README file
// function writeToFile(fileName, data) {
//   return fs.writeFileSync(path.join(process.cwd(), fileName), data);
// }

// // function to initialize program
// function init() {
//   inquirer.prompt(questions).then((inquirerResponses)=>{
//       writeToFile("generatedREADME.md", generateMarkdown({...inquirerResponses}))
//   })
// }


