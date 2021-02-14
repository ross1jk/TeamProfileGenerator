const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern.js");

describe("Intern", () => {
    describe("Intialization", () => {
        it("should create an object with a name, id, and email if provided valid arguments", () => {
            const intern = new Intern("Jacqueline", 44, "jr@gmail.com", "CMU");
            expect(intern.name).toEqual("Jacqueline");
            expect(intern.id).toEqual(44);
            expect(intern.email).toEqual("jr@gmail.com");
            expect(intern.school).toEqual("CMU");
        });
    });
});

describe("getSchool", () => {
    it("should run the function to get the students school", () => {
        const intern = new Intern("Jacqueline", 44, "jr@gmail.com", "CMU");
        const internSpy = jest.spyOn(intern, "getSchool");
        intern.getSchool();
        expect(internSpy).toBeCalled();
        internSpy.mockImplementation(() => { return "CMU" });
        expect(internSpy()).toEqual("CMU");
    });
}); 

describe("getRole", () => {
    it("should run the function to return 'Intern' as the role", () => {
        const intern = new Intern("Jacqueline", 44, "jr@gmail.com", "CMU");
        const internSpy = jest.spyOn(intern, "getRole");
        intern.getRole();
        expect(internSpy).toBeCalled();
        internSpy.mockImplementation(() => { return "Intern" });
        expect(internSpy()).toEqual("Intern");
    }); 
}); 