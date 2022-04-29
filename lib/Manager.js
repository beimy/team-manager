const Employee = require("./Employee")

class Manager extends Employee {

    constructor(name, email, id, officeNumber){
        super();

        this.name = name;
        if (!id) {
            this.id = id || Math.floor(Math.random() * 10);
        }
        this.email = email;
        if (!officeNumber) {
            this.officeNumber = officeNumber || Math.floor(Math.random() * 10);
        } else { this.officeNumber = officeNumber  }
        
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;