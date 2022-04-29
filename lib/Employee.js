class Employee {
    constructor(name, email, id){
        this.name = name;
        this.id = id || Math.floor(Math.random() * 10);
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
    
}

module.exports = Employee;