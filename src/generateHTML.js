function generateHTML(team) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>My Team!</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
    </head>
    <body> 
    
    <div class="container">
      <div class="jumbotron d-flex justify-content-sm-center bg-secondary mb-3">
        <h1>My Team</h1>           
    </div>
     
    <div class="container">
      <div class="card-deck">

      ${buildTeam(team)}
 
     
      </div>  
      </div>
    </div>
    
    </body>
    </html>
    
`;
};

function buildTeam(team) {

    function addManager(manager) {
        return `
        <div class="card bg-basic">
        <div class="card-body text-center">
          <p class="card-header bg-primary">Manager</p>
          <ul class="list-unstyled">
          <li class="card-list">Name: ${manager.getName()}</li>
          <li class="card-list">ID: ${manager.getId()}</li>
          <li class="card-list"><a href="mailto:${manager.getEmail()}">Email: ${manager.getEmail()}</a></li>
          <li class="card-list">Office Number: ${manager.getOfficeNumber()}</li>
          </ul>
        </div>
      </div>
        `
    };

    function addEngineer(engineer) {
        return `
        <div class="card bg-basic">
        <div class="card-body text-center">
          <p class="card-header bg-primary">Engineer</p>
          <ul class="list-unstyled">
          <li class="card-list">Name: ${engineer.getName()}</li>
          <li class="card-list">ID: ${engineer.getId()}</li>
          <li class="card-list"><a href="mailto:${engineer.getEmail()}">Email: ${engineer.getEmail()}</a></li>
          <li class="card-list"><a href="https://github.com/${engineer.getGithub()}">GitHub</a></li>
          </ul>
        </div>
      </div>
        `
    };


    function addIntern(intern) {
        return`
        <div class="card bg-basic">
        <div class="card-body text-center">
          <p class="card-header bg-primary">Intern</p>
          <ul class="list-unstyled">
          <li class="card-list">Name: ${intern.getName()}</li>
          <li class="card-list">ID: ${intern.getId()}</li>
          <li class="card-list"><a href="mailto:${intern.getEmail()}">Email: ${intern.getEmail()}</a></li>
          <li class="card-list">School: ${intern.getSchool()}</li>
          </ul>
        </div>
      </div>
        ` };


const finalHtml = []

finalHtml.push(team.filter(teamMember => teamMember.getRole() === 'Manager').map(manager => addManager(manager)));

finalHtml.push(team.filter(teamMember => teamMember.getRole() === 'Engineer').map(engineer => addEngineer(engineer)));

finalHtml.push(team.filter(teamMember => teamMember.getRole() === 'Intern').map(intern => addIntern(intern)));

return finalHtml.join('')
};

module.exports = generateHTML

