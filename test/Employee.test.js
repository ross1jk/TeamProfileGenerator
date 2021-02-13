const Employee = require("../lib/Employee");

describe("Employee", () => {
    //anything you want tessted inside this constructor
    describe ("Intialization", () => {
        it("should create an object wit ha name and age if provide alid arguments", () => {
            expect(employee.name).toequal("jacqueline");
            expect(employee.email).toequal("jr@gmail.com");
        });
    })
    it("should thrown an error if name is not a string", () => {
        const employee = () => new Employee (1, 1, "jr@gmail.com");
        expect(employee).toThrowError(Error("Expected parameter XYZ")); 
    })
})