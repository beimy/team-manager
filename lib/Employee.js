function Employee(name, email, id) {
    this.name = name;
    this.id = id || Math.floor(Math.random() * 10);
    this.email = email;
}

module.exports = Employee;