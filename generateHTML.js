function generateCard(team) {
    
    for (i = 0; i < team.length; i++) {
        if (team[i].role === "manager") {
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
        } if (team[i].role === "engineer") {
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
        } if (team[i].role === "intern") {
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

function generateHTML(data) {
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
</html>`;
}

module.exports = generateHTML; 