const Employee = require('./Employee');

class Intern extends Employee {
    constructor(internObj){
        super(internObj);
        const {name, email, school, id} = internObj;


        this.name = name;
        this.email = email;
        this.school = school;
        this.id = id || Math.floor(Math.random() * 10); 
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;