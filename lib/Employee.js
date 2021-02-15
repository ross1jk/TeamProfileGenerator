class Employee{
    constructor(name, id, email){
        this.name = name; 
        this.id = id; 
        this.email = email;
        if(this.name === undefined || this.id === undefined || this.email === undefined){
            throw new Error("No Parameters Given"); 
        }
        if(typeof this.name !== "string"){
            throw new Error("Expected parameter of 'name' is not a string"); 
        }
        if(typeof this.id !== "number"){
            throw new Error("Expected parameter is not a number"); 
        }
        if(typeof this.email !== "string"){
            throw Error("Expected parameter of 'email' is not a string"); 
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