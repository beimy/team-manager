function Employee(name, email, id) {
    this.name = name;
    this.id = id || Math.floor(Math.random() * 10);
    this.email = email;
}

//method for getting the name
Employee.prototype.getName = function() {
    return this.name;
}

//method for getting the id
Employee.prototype.getId = function() {
    return this.id;
}

Employee.prototype.getEmail = function() {
    return this.email;
}

Employee.prototype.getRole = function() {
    return 'Employee';
}

module.exports = Employee;