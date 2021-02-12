const inquirer = require("inquirer"); 
const fs = require("fs"); 

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
        console.log(team);
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
            ])
        }
    })
}

