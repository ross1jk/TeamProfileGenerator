class Employee{
    constructor(name, id, email){
        this.name = name; 
        this.id = id; 
        this.email = email;
        if(this.name === undefined || this.id === undefined || this.email === undefined){
            throw new Error("No Parameters Given"); 
        }
    }
    getName(){
       return this.name; 
    }

    getId(){
        return this.id;
    }
    getEmail(){
        return this.email; 

    }
    getRole(){
        return "Employee";  
    }
}

module.exports = Employee; 