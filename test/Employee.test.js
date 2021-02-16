const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Intialization", () => {
        it("should create an object with a name, id, and email if provided valid arguments", () => {
            const employee = new Employee("Manager", "Jacqueline", 44, "jr@gmail.com");
            expect(employee.role).toEqual("Manager")
            expect(employee.name).toEqual("Jacqueline");
            expect(employee.id).toEqual(44);
            expect(employee.email).toEqual("jr@gmail.com");
        });
        it("should throw an error if provided no arguments", () => {
            const employee = () => new Employee();
            expect(employee).toThrow(Error("No Parameters Given")); 
        });
        it("should throw an error if name is not a string", () => {
            const employee = () => new Employee("Manager", 1, 1, "jr@gmail.com");
            expect(employee).toThrow(Error("Expected parameter of 'name' is not a string"));
        });
        it("should throw an error if id is not a number", () => {
            const employee = () => new Employee("Manager", "Jacqueline", "one", "jr@gmail.com");
            expect(employee).toThrow(Error("Expected parameter is not a number")); 
        }); 
        it("should throw an error if email is not a string", () => {
            const employee = () => new Employee("Manager", "Jacqueline", 1, 22);
            expect(employee).toThrow(Error("Expected parameter of 'email' is not a string")); 
        }); 
    });
});


