// Import required modules
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Inquirer question arrays

// Manager questions
const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: "What is the name of the team manager?",
    },
    {
        type: 'input',
        name: 'managersId',
        message: "What is the team manager's employee ID?",
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the team manager's email address?",
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office number?",
    },
];

// Option to add additional team members
const addTeamMembers = [
    {
        type: 'list',
        name: 'addAdditional',
        message: 'Would you like to add additional team members?',
        choices: ['Add Engineer', 'Add Intern', 'Finish building team'],
    },

]


// Engineer questions
const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the name of the engineer?',
    },
    {
        type: 'input',
        name: 'engineerId',
        message: "What is the engineer's employee ID?",
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the engineer's email address",
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?",
    }
];

// Intern questions
const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'What is the name of the intern?',
    },
    {
        type: 'input',
        name: 'internId',
        message: "What is the engineer's employee ID?",
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is the engineer's email address",
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the name of the intern's school?",
    }

];

// Function to intialise app

function init() {
    inquirer.prompt(managerQuestions).then(managerResponses);

    inquirer.prompt(addTeamMembers).then(addTeamResponse);

}

// Function to run inquirer questions to add engineer to team

function engineerPrompt() {
    inquirer.prompt(engineerQuestions).then(engineerResponses);
}


// Function to run inquirer questions to add intern to team

function internPrompt() {
    inquirer.prompt(internQuestions).then(internResponses);
}


// Function call to initialise app

init();

