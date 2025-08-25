class User {
    constructor(username, birthdate, age, email, password, valid = true) {
        this.username = username;
        this.birthdate = birthdate;
        this.age = age;
        this.email = email;
        this.password = password;
        this.valid = valid;
    }

    // Method to get user data without password
    getPublicData() {
        return {
            username: this.username,
            birthdate: this.birthdate,
            age: this.age,
            email: this.email,
            valid: this.valid
        };
    }
}

module.exports = User;
