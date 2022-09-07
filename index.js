// TODO: Include packages needed for this application
const {prompt} = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'myTitle',
    message: 'What is your project title?'

},
{
    type: 'input',
    name: 'myDescription',
    message: 'Describe your project.'

},
{
    type: 'input',
    name: 'myInstuctions',
    message: 'List your installation instructions.'

},
{
    type: 'input',
    name: 'myUsage',
    message: 'What is the usage for your project.'

},
{
    type: 'input',
    name: 'myContribution',
    message: 'What are the contribution guidelines for your project?'

},
{
    type: 'input',
    name: 'myTests',
    message: 'How do you run tests for your project?'

},
{
    type: 'input',
    name: 'myGithub',
    message: 'What is your github profile username?'

},
{
    type: 'input',
    name: 'myEmail',
    message: 'What is your email address?'

},
{
    type: 'list',
    name: 'myLicense',
    message: 'What license is attatched to this project?',
    choices: [
        'MIT',
        'Apache',
        'GNU',
        'Boost',
        'none'
    ]

},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        console.log(err);
    } )
}

// TODO: Create a function to initialize app. Destructured by removing "answers" and putting in the keys created by the object key "name."
function init() {
    prompt(questions).then (answers => {
        writeToFile('./dist/README.md', answers);
    }) 
}

// Function call to initialize app
init();
