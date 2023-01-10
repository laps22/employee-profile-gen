function generateHTML(team) {
    return `
    <!doctype html>
    <html lang="en">
    
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
            <link rel="stylesheet" href="/employee-profile-gen/dist/team.style.css"/>
    
    </head>
    
    <body>
        <header>
            <h1 class="navbar bg-body-tertiary">My Team</h1>
        </header>
        
            ${buildTeam(team)}
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"></script>
</body>

</html>
`;
};


function buildTeam(team) {

    function addManager(manager) {
        return `
         <div class="card" style="width: 18rem;">
            <div class="card-header"> Manager</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${manager.getName()}</li>
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item"><a href="mailto:${manager.getEmail()}">Email: ${manager.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
        `
    };


    function addEngineer(engineer) {
        return `
             <div class="card" style="width: 18rem;">
                <div class="card-header"> Manager</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name: ${engineer.getName()}</li>
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item"><a href="mailto:${engineer.getEmail()}">Email: ${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a src="www.github.com/${engineer.getGithub()}</a></li>
                </ul>
            </div>
            `
    };

    function addIntern(intern) {
        return `
             <div class="card" style="width: 18rem;">
                <div class="card-header"> Manager</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name: ${intern.getName()}</li>
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item"><a href="mailto:${intern.getEmail()}">Email: ${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
            `
    };


    const finalHtml = []

    finalHtml.push(team.filter(teamMember => teamMember.getRole() === 'Manager').map(manager => addManager(manager)));

    finalHtml.push(team.filter(teamMember => teamMember.getRole() === 'Engineer').map(engineer => addEngineer(engineer)));

    finalHtml.push(team.filter(teamMember => teamMember.getRole() === 'Intern').map(intern => addIntern(intern)));

    return finalHtml.join('')
};

module.exports = generateHTML 

