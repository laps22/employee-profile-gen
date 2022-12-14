const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const generateHTML = require('./src/generateHTML');

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
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOffice);
        team.push(manager)
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
        switch (selected.select) {
            case 'Add Engineer':
                engineerQuestions();
                break;
            case 'Add Intern':
                internQuestions();
                break;
            default:
                createTeam();
        }
    });
};

//function for engineer
function engineerQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
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
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub)
        team.push(engineer);
        menu();

    });
};

//funciton for intern
function internQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'Please enter the Interns name.',
        },
        {
            type: 'input',
            name: 'internID',
            message: 'Please enter the Interns ID.',
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Please enter the Interns email.',
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'Please enter the Interns school name.',
        },

    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool)
        team.push(intern);
        menu();
    });
};

function createTeam() {
    fs.writeFileSync('./dist/team.html', generateHTML(team));
};

managerQuestions();
