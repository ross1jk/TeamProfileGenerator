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
        addTeamMember(); 
    }
    );
};

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
            generateHTML();
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

manager(); 

function generateCard(){
    for (i = 0; i < team.length; i++){
        let type = team[i].office || team[i].github || team[i].school; 
        let card = `
<div class="card">
  <h5 class="card-header">${team[i].name}</h5>
  <div class="card-body">
    <h5>${team[i].role}</h5>
    <h6>${team[i].id}</h6>
    <h6>${team[i].email}</h6>
    <h6>${type}</h6>
  </div>
</div>
` 
return card 
 }
}

function generateHTML(){
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <title>Team Profile</title>
</head>
<body> 
    ${generateCard()}
</body>
</html>`

console.log(html); 
}