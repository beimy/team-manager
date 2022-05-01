const Inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

class Team {
    constructor(){
        this.teamMembersArr = [];
    }
    
    buildTeam(){
        // start with making a manager
        Inquirer
        .prompt({
            type: 'confirm',
            message: 'Would you like to build a new team?',
            name: 'intro'
        })
        .then(({intro}) => {
            if(intro) {
                Inquirer.prompt([
                    {
                    type: 'text',
                    name: 'name',
                    message: "Please enter the team manager's name."
                    },
                    {
                        type: "text",
                        name: "id",
                        message: "Please enter the manager's employee ID number."
                    },
                    {
                        type: 'text',
                        name: 'email',
                        message: "Please enter the manager's email address"
                    },
                    {
                        type: 'text',
                        name: 'officeNumber',
                        message: "Please enter the manager's office number"
                    },
                ])
                .then(managerData => {
                    const manager = new Manager(managerData);
                    this.teamMembersArr.push(manager);

                    this.addMembers();
                })
                
            } else { console.log('Goodbye') };   
        })
    }

    addMembers() {
        Inquirer
        .prompt({
            type: 'list',
            name: 'addOrEnd',
            message: 'Choose a type of employee to add, or finish building team.',
            choices: ['Add an Intern', 'Add an Engineer', 'Finish, and build team page']
        })
        .then(({addOrEnd}) => {
            switch(addOrEnd) {
                case 'Add an Intern':
                    console.log('Adding an intern');
                    Inquirer.prompt([
                        {
                            type: 'text',
                            name: 'name',
                            message: "Please enter the intern's name."
                            },
                            {
                                type: "text",
                                name: "id",
                                message: "Please enter the intern's employee ID number."
                            },
                            {
                                type: 'text',
                                name: 'email',
                                message: "Please enter the intern's email address"
                            },
                            {
                                type: 'text',
                                name: 'school',
                                message: "Please enter the intern's school"
                            },
                    ])
                    .then(data => {
                        const intern = new Intern(data);
                        this.teamMembersArr.push(intern);
                        console.log(`Intern ${data.name} added.`);
                        this.addMembers();
                    });
                    break;
                case 'Add an Engineer':
                    console.log('adding an engineer');
                    Inquirer.prompt([
                        {
                            type: 'text',
                            name: 'name',
                            message: "Please enter the Engineer's name."
                            },
                            {
                                type: "text",
                                name: "id",
                                message: "Please enter the Engineer's employee ID number."
                            },
                            {
                                type: 'text',
                                name: 'email',
                                message: "Please enter the Engineer's email address."
                            },
                            {
                                type: 'text',
                                name: 'gitHub',
                                message: "Please enter the Engineer's github account name."
                            },
                    ])
                    .then(data => {
                        const engineer = new Engineer(data);
                        this.teamMembersArr.push(engineer);
                        console.log(`Engineer ${data.name} added.`);
                        this.addMembers();
                    });
                    break;
                case 'Finish, and build team page':
                    console.log('Building page');
                    this.createPage();
                    break;
            }
        })

    }

    createPage() {
        const pageHTML = generatePage(this.teamMembersArr);

        fs.writeFile('./index.html', pageHTML, err => {
            if (err) throw new Error(err);

            console.log('Page Made.');
        })

    }

}

const mockData = [
    {Manager: {
        name: 'asdf',
        id: 'asdf',
        email: 'asdf',
        officeNumber: 'asdf'
      }},
      {Intern: {
            name: 'dfgh',
            id: 'dfgh',
            email: 'dfgh', 
            school: 'dfgh' 
        }},
      {Engineer: { 
            name: 'cvbn', 
            id: 'cvbn', 
            email: 'cvbn', 
            gitHub: 'cvbn' 
        }}
]

// const team = new Team();
// team.teamMembersArr = mockData;
// team.createPage();

new Team().buildTeam();


