const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer"); 

describe("Engineer", () => {
    describe("Intialization", () => {
        it("should create an object with a name, id, email, and github username if provided valid arguments", () => {
            const engineer = new Engineer("Engineer", "Jacqueline", 44, "jr@gmail.com", "ross1jk");
            expect(engineer.role).toEqual("Engineer"); 
            expect(engineer.name).toEqual("Jacqueline");
            expect(engineer.id).toEqual(44);
            expect(engineer.email).toEqual("jr@gmail.com");
            expect(engineer.github).toEqual("ross1jk");
        });
    });
});

describe("getGithub", () => {
    it("should run the function to get the engineer's github", () => {
        const engineer = new Engineer("Engineer", "Jacqueline", 44, "jr@gmail.com", "ross1jk");
        const engineerSpy = jest.spyOn(engineer, "getGithub");
        engineer.getGithub();
        expect(engineerSpy).toBeCalled();
        engineerSpy.mockImplementation(() => { return "ross1jk" });
        expect(engineerSpy()).toEqual("ross1jk");
    });
}); 

describe("getRole", () => {
    it("should run the function to return 'Engineer' as the role", () => {
        const engineer = new Engineer("Engineer", "Jacqueline", 44, "jr@gmail.com", "ross1jk");
        const engineerSpy = jest.spyOn(engineer, "getRole");
        engineer.getRole();
        expect(engineerSpy).toBeCalled();
        engineerSpy.mockImplementation(() => { return "Engineer" });
        expect(engineerSpy()).toEqual("Engineer");
    }); 
}); 