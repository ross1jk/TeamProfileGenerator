function generateCard(team) {
  let finalCards = '';
  for (i = 0; i < team.length; i++) {
    if (team[i].role === "Manager") {
      let managerCard = `
      <div class="card">
        <h5 class="card-header">${team[i].name}</h5>
        <div class="card-body">
          <h5>${team[i].role}</h5>
          <h6>Employee ID: ${team[i].id}</h6>
          </h6><a href="mailto:${team[i].email}">${team[i].email}</a></h6>
          <h6>Office Number: ${team[i].officeNumber}</h6>
        </div>
      </div>
      `
      finalCards += managerCard;
    } if (team[i].role === "Engineer") {
      let engineerCard = `
      <div class="card">
        <h5 class="card-header">${team[i].name}</h5>
        <div class="card-body">
          <h5>${team[i].role}</h5>
          <h6>Employee ID: ${team[i].id}</h6>
          </h6><a href="mailto:${team[i].email}">${team[i].email}</a></h6>
          <h6>GitHub Username: <a href="https://github.com/${team[i].github}" target="_blank"> ${team[i].github}</a></h6>
        </div>
      </div>
      `
      finalCards += engineerCard;
    } if (team[i].role === "Intern") {
      let internCard = `
      <div class="card">
        <h5 class="card-header">${team[i].name}</h5>
        <div class="card-body">
          <h5>${team[i].role}</h5>
          <h6>Employee ID: ${team[i].id}</h6>
          </h6><a href="mailto:${team[i].email}">${team[i].email}</a></h6>
          <h6>School:${team[i].school}</h6>
        </div>
      </div>
    `
      finalCards += internCard;
    }
  }
  return finalCards; 
}


function generateHTML(data) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
      <link rel="stylesheet" href="./src/style.css">
</head>
<body>
<div class="jumbotron jumbotron-fluid">
<div class="container">
  <h1 class="heading">Team Profile</h1>
</div>
</div>
<div class="container">
<div class="row">
    ${generateCard(data)}
</div>
</div>
</body>
</html>`;
}

module.exports = generateHTML; 