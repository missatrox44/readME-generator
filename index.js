// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
              type: 'input',
              name: 'title',
              message: 'What is the title of your project?',
            },
            {
              type: 'input',
              name: 'location',
              message: 'Where are you from?',
            },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions)
//     .then((answers) => fs.writeFileSync('README.md', generateREADME(answers)))
//     .then(() => console.log('Successfully wrote to README.md'))
//     .catch((err) => console.error(err));
// }

function init() {
    //ask all the questions for you readme
    inquirer.prompt(questions)
    .then((answers) => {
    console.log(answers);
    //make a readme string
    let createREADME = generateMarkdown(answers);
    console.log(createREADME);
    fs.writeFile('generatedREADME.md', createREADME, function(err){

    })
    });
};


// Function call to initialize app
init();



// const inquirer = require('inquirer');
// // import inquirer from 'inquirer';
// const fs = require('fs');

// // Use writeFileSync method to use promises instead of a callback function

// const promptUser = () => {
//   return inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your full name?',
//     },
//     {
//       type: 'input',
//       name: 'location',
//       message: 'Where are you from?',
//     },
//     {
//       type: 'input',
//       name: 'hobby',
//       message: 'What is your favorite hobby?',
//     },
//     {
//       type: 'input',
//       name: 'food',
//       message: 'What is your favorite food?',
//     },
//     {
//       type: 'input',
//       name: 'github',
//       message: 'Enter your GitHub Username',
//     },
//     {
//       type: 'input',
//       name: 'linkedin',
//       message: 'Enter your LinkedIn URL.',
//     },
//   ]);
// };

// const generateHTML = ({ name, location, github, linkedin }) =>
//   `markdown stuff`;

// // Bonus using writeFileSync as a promise
// const init = () => {
//   promptUser()
//     // Use writeFileSync method to use promises instead of a callback function
//     .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
//     .then(() => console.log('Successfully wrote to index.html'))
//     .catch((err) => console.error(err));
// };

// init();
