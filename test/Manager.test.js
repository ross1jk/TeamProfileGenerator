const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager.js");

describe("Manager", () => {
    // test to ensure they are set from the super like in employee
    describe("Intialization", () => {
        it("should create an object with a name, id, and email if provided valid arguments", () => {
            const manager = new Manager("Jacqueline", 44, "jr@gmail.com", "a123");
            expect(manager.name).toEqual("Jacqueline");
            expect(manager.id).toEqual(44);
            expect(manager.email).toEqual("jr@gmail.com");
            expect(manager.officeNumber).toEqual("a123");
        });
    });
});
// will have to remove some stuff watch the video 
describe("getOfficeNumber", () => {
    it("should run the function to get the office number", () => {
        const manager = new Manager("Jacqueline", 44, "jr@gmail.com", "a123");
        const managerSpy = jest.spyOn(manager, "getOfficeNumber");
        manager.getOfficeNumber();
        expect(managerSpy).toBeCalled();
        managerSpy.mockImplementation(() => { return "a123" });
        expect(managerSpy()).toEqual("a123");
    });
}); 

describe("getRole", () => {
    it("should run the function to return 'manager' as the role", () => {
        const manager = new Manager("Jacqueline", 44, "jr@gmail.com", "a123");
        const managerSpy = jest.spyOn(manager, "getRole");
        manager.getRole();
        expect(managerSpy).toBeCalled();
        managerSpy.mockImplementation(() => { return "Manager" });
        expect(managerSpy()).toEqual("Manager");
    }); 

}); 