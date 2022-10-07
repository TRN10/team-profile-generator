// Import required modules
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const teamMembers = [];

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
        message: "What is the intern's employee ID?",
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is the intern's email address",
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the name of the intern's school?",
    }

];

// Function to intialise app



function init() {

    managerPrompt();

}

// Function to obtain manager details from inquirer and build manager object using manager class

function managerPrompt() {
    inquirer.prompt(managerQuestions).then((managerResponses) => {
        const manager = new Manager(
            managerResponses.managerName,
            managerResponses.managersId,
            managerResponses.managerEmail,
            managerResponses.officeNumber,
        )
        teamMembers.push(manager);
        createMemberPrompt();
    })

}

// Function to ask user if they want to add another team member

function createMemberPrompt() {
    inquirer.prompt(addTeamMembers).then(({ addAdditional }) => {
        if (addAdditional === 'Add Engineer') {
            engineerPrompt();
        } else if (addAdditional === 'Add Intern') {
            internPrompt();
        } else {
            renderHTML();
        }

    })
    //console.log(teamMembers);
}

// Function to obtain engineer details from inquirer and build engineer object using engineer class

function engineerPrompt() {
    inquirer.prompt(engineerQuestions).then((engineerResponses) => {
        const engineer = new Engineer(
            engineerResponses.engineerName,
            engineerResponses.engineerId,
            engineerResponses.engineerEmail,
            engineerResponses.github,
        )
        teamMembers.push(engineer);
        createMemberPrompt();
    })

}

// Function to obtain intern details and build intern object

function internPrompt() {
    inquirer.prompt(internQuestions).then((internResponses) => {
        const intern = new Intern(
            internResponses.internName,
            internResponses.internId,
            internResponses.internEmail,
            internResponses.school,
        )
        teamMembers.push(intern);
        createMemberPrompt();
    })

}


// Function call to initialise app

init();

