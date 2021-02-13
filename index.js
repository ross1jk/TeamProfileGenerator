const inquirer = require("inquirer"); 
const fs = require("fs"); 
// const generateHTML = require("./generateHTML");
const { create } = require("domain");

let team = []; 

function createTeam(){
    inquirer.prompt([
        {
            type: "list",
            name: "intro",
            message: "Welcome To The Team Profile Generator! What is our current role?",
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
            writeToFile(); 
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
            message: "Provide your email"
        },
        {
            type: "input",
            name: "office",
            message: "Provide their office number"
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

createTeam();

function generateCard(){
    for (i = 0; i < team.length; i++){        
        if (team[i].role === "manager"){
            return `
            <div class="card">
              <h5 class="card-header">${team[i].name}</h5>
              <div class="card-body">
                <h5>${team[i].role}</h5>
                <h6>${team[i].id}</h6>
                <h6>${team[i].email}</h6>
                <h6>${team[i].office}</h6>
              </div>
            </div>
            ` 
        } if(team[i].role === "engineer"){
            return `
            <div class="card">
              <h5 class="card-header">${team[i].name}</h5>
              <div class="card-body">
                <h5>${team[i].role}</h5>
                <h6>${team[i].id}</h6>
                <h6>${team[i].email}</h6>
                <h6>${team[i].github}</h6>
              </div>
            </div>
            ` 
         }if (team[i].role === "intern"){
            return `
            <div class="card">
              <h5 class="card-header">${team[i].name}</h5>
              <div class="card-body">
                <h5>${team[i].role}</h5>
                <h6>${team[i].id}</h6>
                <h6>${team[i].email}</h6>
                <h6>${team[i].school}</h6>
              </div>
            </div>
          ` 
        }
  }
}

function generateHTML(data){
    return `
<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
</head>
<body> 
    ${generateCard(data)}
</body>
</html>`
}


function writeToFile(data) {
    fs.writeFile("teamprofile.html", generateHTML(data) , (err) =>
    err ? console.log(err) : console.log('Your Team Profile Application has been generated successfully!'))
}