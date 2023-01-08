const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const generateTeam = require('./dist/generateHTML');

const team = [];

// function for start app
function managerQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of the Manager?',
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'Please enter the Managers ID number.',
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Please enter the email of the Manager.',
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: 'Please enter the office number of the Manager.',
        },
    ]).then(answers => {
        const manager = new Manager(answers.managerQuestions, answers.data.push(manager));
        menu();

    });
};
// function for menu
function menu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'select',
            message: 'Would you like to add a team member or finish building your team?',
            choices: ['Add Engineer', 'Add Intern', 'Finished'],
        },
    ]).then(selected => {
        switch (selected.employee) {
            case 'Add Engineer':
                engineerQuestions();
                break;
            case 'Add Intern':
                internQuestions();
                break;
            case 'Finished':
                generateTeam();
                break;
        }
    });
};

//function for engineer
function engineerQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineer',
            message: 'Please enter the Engineers name.',
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'Please enter the Engineers ID.',
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Please enter the Engineers email.',
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'Please enter the Engineers GitHub username.',
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerQuestions, answers.data.push(engineer));
        menu();

    });
};

//funciton for intern
function internQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'intern',
            message: 'Please enter the Interns name.',
        },
        {
            type: 'input',
            name: 'internID',
            message: 'Please enter the Interns ID.',
        },
        {
            type: 'input',
            name: 'internsEmail',
            message: 'Please enter the Interns email.',
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'Please enter the Interns school name.',
        },

    ]).then(answers => {
        const intern = new Intern(answers.internQuestions, answers.data.push(intern));
        menu();
    });
};

function createTeam() {
    fs.writeFileSync('./dist/team.html', generateTeam(team));
};
