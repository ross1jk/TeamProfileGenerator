const inquirer = require("inquirer"); 
const fs = require("fs"); 
const generateHTML = require("./generateHTML");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

let team = []; 

function createTeam(){
    inquirer.prompt([
        {
            type: "list",
            name: "intro",
            message: "Welcome To The Team Profile Generator! What is your current role?",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
            ]
        }
    ]).then(function (data){
        if (data.intro === "Manager"){
            addManager()
        }if (data.intro === "Engineer"){
            addEngineer()
        }if (data.intro === "Intern"){
            addIntern()
        }
    })
}

function addTeamMember(){
    inquirer.prompt([
        {
            type: "list", 
            name: "add", 
            message: "Would you like to add more team members?",
            choices: [
                "Yes",
                "No"
            ]
        }
    ]).then(function (data){
        if (data.add === "Yes"){
            inquirer.prompt([
                {
                    type: "list",
                    name: "employeeType",
                    message: "What is the team members role?",
                    choices:[
                        "Manager",
                        "Engineer",
                        "Intern"
                    ]
                }
            ]).then(function (data){
                if (data.employeeType === "Manager"){
                    addManager(); 
                }
                if (data.employeeType === "Engineer"){
                    addEngineer();
                } if (data.employeeType === "Intern"){
                    addIntern(); 
                }
            });
        } if (data.add === "No"){
            console.log(team);
            writeToFile(team); 
        }
    }); 
}; 

function addManager(){
    inquirer.prompt([
        {
          type: "input",
          name: "name",  
          message: "Provide their name"
        },
        {
            type: "input",
            name: "id",
            message: "Provide their employee ID"
        },
        {
            type: "input",
            name: "email",
            message: "Provide their email",
            validate: function (email)
            {
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
            }

        },
        {
            type: "input",
            name: "office",
            message: "Provide their office number"
        }
    ]).then(function (data){
        const role = 'Manager'
        const name = data.name;
        const id = parseInt(data.id); 
        const email = data.email; 
        const office = data.office; 
        let manager = new Manager(role, name, id, email, office); 
        team.push(manager); 
        addTeamMember(); 
    }
    );
};

function addEngineer(){
    inquirer.prompt([
        {
          type: "input",
          name: "name",  
          message: "Provide their name"
        },
        {
            type: "input",
            name: "id",
            message: "Provide their employee ID"
        },
        {
            type: "input",
            name: "email",
            message: "Provide their email", 
            validate: function (email)
            {
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
            }
        },
        {
            type: "input",
            name: "github",
            message: "Provide their github username"
        }
    ]).then(function (data){
        const role = 'Engineer'
        const name = data.name;
        const id = parseInt(data.id); 
        const email = data.email; 
        const github = data.github; 
        let engineer = new Engineer(role, name, id, email, github); 
        team.push(engineer); 
        addTeamMember(); 
    }
    );
}

function addIntern(){
    inquirer.prompt([
        {
          type: "input",
          name: "name",  
          message: "Provide their name"
        },
        {
            type: "input",
            name: "id",
            message: "Provide their employee ID"
        },
        {
            type: "input",
            name: "email",
            message: "Provide their email",
            validate: function (email)
            {
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
            }
        },
        {
            type: "input",
            name: "school",
            message: "Provide the school they attend"
        }
    ]).then(function (data){
        const role = 'Intern'
        const name = data.name;
        const id = parseInt(data.id); 
        const email = data.email; 
        const school = data.school; 
        let intern = new Intern(role, name, id, email, school); 
        team.push(intern); 
        addTeamMember(); 
    }
    );
}; 

createTeam();


function writeToFile(data) {
    fs.writeFile("teamprofile.html", generateHTML(data) , (err) =>
    err ? console.log(err) : console.log('Your Team Profile Application has been generated successfully!'))
}