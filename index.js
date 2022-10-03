// Import required modules
const inquirer = require('inquirer');
const fs = require('fs');

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
        message: "What is the team manager's employee ID?"
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the team manager's email address?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office number?",
    }
];

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
        message: "What is the engineer's GitHub username?"
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
        message: "What is the name of the intern's school?"
    }

];

function init() {
    inquirer.prompt(managerQuestions).then(managerResponses => {
        const managerAnswers
    })
}

init();