const Employee = require("../lib/Employee");

describe("Employee", () => {
    //anything you want tessted inside this constructor
    describe("Intialization", () => {
        it("should create an object with a name, id, and email if provided valid arguments", () => {
            const employee = new Employee("Jacqueline", 44, "jr@gmail.com"); 
            expect(employee.name).toEqual("Jacqueline");
            expect(employee.id).toEqual(44); 
            expect(employee.email).toEqual("jr@gmail.com");
        });
        // not provided argument
        it("should throw an error if provided no arguments", () => {
            const cb = () => new Employee(); 
            expect(cb).toThrow("No Parameters Given"); 
        }); 
        // not provided a name string
        // not provided email string
        // not provided id 
        // it("should thrown an error if name is not a string", () => {
        //     const employee = new Employee(1, 1, "jr@gmail.com");
        //     expect(employee).toThrowError(new Error("Expected parameter of 'name' is not a string"));
        // })
    }); 
}); 