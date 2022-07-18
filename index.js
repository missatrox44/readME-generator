// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
// inquirer.prompt ([
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

generateMarkdown(data);

function init() {
  //ask all the questions for you readme
  inquirer.prompt(questions)
    .then((answers) => {
      console.log(answers);
      //make a readme string
      let createREADME = generateREADME(answers);
      console.log(createREADME);
      fs.writeFile('generatedREADME.md', createREADME, function (err) {

      })
    });
};


// Function call to initialize app
init();


// );

// .then(answers) => {
//   console.log(answers);
//   fs.writeFile('generatedREADME.md', generateREADME(answers), (err)) =>
//   err ? console.log(err) : console.log('Success!')
// }



// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// // function init() {
// //     inquirer.prompt(questions)
// //     .then((answers) => fs.writeFileSync('README.md', generateREADME(answers)))
// //     .then(() => console.log('Successfully wrote to README.md'))
// //     .catch((err) => console.error(err));
// // }





// // const generateHTML = ({ name, location, github, linkedin }) =>
// //   `markdown stuff`;

