function generateHTML(managerQuestions, engineerQuestions, internQuestions) {
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
        </header>`;
}

    function addManager(manager){
        return `
         <div class="card" style="width: 18rem;">
            <div class="card-header"> Manager</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${managerName.data}</li>
                <li class="list-group-item">ID: ${managerID.data}</li>
                <li class="list-group-item"><a href="mailto:${managerEmail.data}">Email: ${managerEmail.data}</a></li>
                <li class="list-group-item">Office Number: ${officeNumber.data}</li>
            </ul>
        </div>
        `
    };
       
    `
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
            crossorigin="anonymous"></script>
    </body>
    
    </html>
`