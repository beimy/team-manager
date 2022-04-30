const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(engineerObj){
        super(engineerObj);
        const {name, email, gitHub, id} = engineerObj;

        this.name = name;
        this.email = email;
        this.gitHub = gitHub || 'N/A';
        this.id = id || Math.floor(Math.random() * 10);
    }

    getGitHub() {
        return this.gitHub;
    }

    getRole() {
        return 'Engineer';
    }

}   

module.exports = Engineer;