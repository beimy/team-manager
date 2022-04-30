const Employee = require("./Employee")

class Manager extends Employee {

    constructor(managerObj){
        super(managerObj);
        const {name, email, officeNumber, id} = managerObj;


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