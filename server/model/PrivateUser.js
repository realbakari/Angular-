class PrivateUser {

    constructor(username, email, birthdate, password){
            this.username = username;
            this.email = email;
            this.birthdate = birthdate;
            this.password = password;
        }

    validate(username, pw){
        return this.username === username && this.password === pw;
    }

    user(){
        return {
            username: this.username,
            email: this.email,
            birthdate: this.birthdate,
            age: this.age()
        }
    }

    age(){
        // returns the age of the user
        // calculated from their DOB

        const CURRENT = new Date();
        const DOB = new Date(this.birthdate); 
        const ageInMs = CURRENT.getTime() - DOB.getTime();
        // convert milliseconds to years
        const msInYear = 365 * 24 * 60 * 60 * 1000;
        return Math.floor(ageInMs / msInYear);
    }
}

module.exports = PrivateUser;