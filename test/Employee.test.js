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
            const employee = () => new Employee();
            // looks for this exact error with this exact words 
            expect(employee).toThrow(Error("No Parameters Given")); 
        });
        it("should throw an error if name is not a string", () => {
            const employee = () => new Employee(1, 1, "jr@gmail.com");
            expect(employee).toThrow(Error("Expected parameter of 'name' is not a string"));
        });
        it("should throw an error if id is not a number", () => {
            const employee = () => new Employee("Jacqueline", "one", "jr@gmail.com");
            expect(employee).toThrow(Error("Expected parameter is not a number")); 
        }); 
        it("should throw an error if email is not a string", () => {
            const employee = () => new Employee("Jacqueline", 1, 22);
            expect(employee).toThrow(Error("Expected parameter of 'email' is not a string")); 
        }); 
    });
});


