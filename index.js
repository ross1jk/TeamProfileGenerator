const inquirer = require("inquirer"); 
const fs = require("fs"); 
const { ENGINE_METHOD_RAND } = require("constants");

let team = []; 

function manager(){
    inquirer.prompt([
        {
          type: "input",
          name: "name",  
          message: "Provide your name"
        },
        {
            type: "input",
            name: "id",
            message: "Provide your employee ID"
        },
        {
            type: "input",
            name: "email",
            message: "Provide your email"
        },
        {
            type: "input",
            name: "office",
            message: "Provide your office number"
        }
    ]).then(function (data){
        const role = 'manager'
        const name = data.name;
        const id = data.id; 
        const email = data.email; 
        const office = data.office; 
        let manager = {role, name, id, email, office}; 
        team.push(manager); 
        addTeamMember(); 
    }
    );
};
manager(); 

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
                        "Engineer",
                        "Intern"
                    ]
                }
            ]).then(function (data){
                if (data.employeeType === "Engineer"){
                    addEngineer();
                } if (data.employeeType === "Intern"){
                    addIntern(); 
                }
            });
        } if (data.add === "No"){
            console.log(team);
        }
    }); 
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
            message: "Provide their email"
        },
        {
            type: "input",
            name: "github",
            message: "Provide their github username"
        }
    ]).then(function (data){
        const role = 'engineer'
        const name = data.name;
        const id = data.id; 
        const email = data.email; 
        const github = data.github; 
        let engineer = {role, name, id, email, github}; 
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
            message: "Provide their email"
        },
        {
            type: "input",
            name: "school",
            message: "Provide the school they attend"
        }
    ]).then(function (data){
        const role = 'intern'
        const name = data.name;
        const id = data.id; 
        const email = data.email; 
        const school = data.school; 
        let intern = {role, name, id, email, school}; 
        team.push(intern); 
        addTeamMember(); 
    }
    );
}; 

