const Employee = require('../lib/Employee')

const generateCards = employeeList => {
    return `
    <div id="holder">
        ${employeeList
        .filter((Manager) => Manager.officeNumber)
        .map(( {name, id, email, officeNumber}) => {
            console.log(name)
            return `
            <div class="card" style="width: 250px;">
                <div class="card-header container  bg-primary text-white">
                    <div class="row">
                        <h3>${name}</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-fill col-sm-2" viewBox="0 0 16 16">
                          <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z"/>
                        </svg>
                        <p id="role" class="col-sm">Manager</p>
                    </div>
                </div>
        
                <div class="card-body container bg-secondary">
                    <ul class="list-group">
                        <li id="id" class="list-group-item">ID: ${id}</li>
                        <li id="email" class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                        <li id="officeNumber" class="list-group-item">Office Number: ${officeNumber}</li>
                    </ul>
                </div>
    
            </div>
            `;
        })
        .join('')} 

        ${employeeList
            .filter((Engineer) => Engineer.gitHub)
            .map(( {name, id, email, gitHub}) => {
                return `
                <div class="card" style="width: 250px;">
                    <div class="card-header container  bg-primary text-white">
                        <div class="row">
                            <h3>${name}</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-fill col-sm-2" viewBox="0 0 16 16">
                              <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z"/>
                            </svg>
                            <p id="role" class="col-sm">Engineer</p>
                        </div>
                    </div>
            
                    <div class="card-body container bg-secondary">
                        <ul class="list-group">
                            <li id="id" class="list-group-item">ID: ${id}</li>
                            <li id="email" class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                            <li id="gitHubName" class="list-group-item">GitHub Name: <a href="https://github.com/${gitHub}" target="_blank">${gitHub}</a></li>
                        </ul>
                    </div>
        
                </div>
                `;
            })
            .join('')} 

        ${employeeList
            .filter((Intern) => Intern.school)
            .map(( {name, id, email, school}) => {
                return `
                <div class="card" style="width: 250px;">
                    <div class="card-header container  bg-primary text-white">
                        <div class="row">
                            <h3>${name}</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-fill col-sm-2" viewBox="0 0 16 16">
                                <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z"/>
                            </svg>
                            <p id="role" class="col-sm">Intern</p>
                        </div>
                    </div>
            
                    <div class="card-body container bg-secondary">
                        <ul class="list-group">
                            <li id="id" class="list-group-item">ID: ${id}</li>
                            <li id="email" class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                            <li id="school" class="list-group-item">School: ${school}</li>
                        </ul>
                    </div>
        
                </div>
                `;
            })
            .join('')} 
    </div>
    `;
};


module.exports = teamData => {
    return `    
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Page</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header class="text-center bg-danger text-white h1 py-3">My Team
        </header>

        <main>
        ${generateCards(teamData)}
        </main>
    </body>
</html>
`
}