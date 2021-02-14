const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager.js");

describe("Manager", () => {
    // describe intialization 
    // test to ensure they are set from the super like in employee
    // but do not need to test if string etc 
    // will need to double check get role probs 
})
// will have to remove some stuff watch the video 
describe("getOfficeNumber", () => {
    it("should run the function to get the office number", () => {
    const manager = new Manager("jac", 1, "jr@gmail.com", "a123"); 
    const managerSpy = jest.spyOn(manager, "getOfficeNumber"); 
    manager.getOfficeNumber(); 
    expect(managerSpy).toBeCalled(); 
    managerSpy.mockImplementation(() => { return "a123"}); 
    expect(managerSpy()).toEqual("a123"); 
    });
}); 
