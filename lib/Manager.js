const Employee = require("./Employee")

class Manager extends Employee {

    constructor(name, email, officeNumber, id){
        super();

        this.name = name;
        this.email = email;
        this.officeNumber = officeNumber || Math.floor(Math.random() * 10);
        this.id = id || Math.floor(Math.random() * 10); 
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;