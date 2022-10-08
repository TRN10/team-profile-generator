// Generate 'my team' HTML

// import teamMembers array
const teamMembers = require('./index.js');

const generateTeam = (teamMembers) => {

}

const generateManager = (Manager) => {
    return `
        <div class="card bg-light mb-3 shadow" style="max-width: 18rem;">
                <div class="card-header bg-primary"><i class="fa-solid fa-mug-hot"></i> Manager</div>
                <div class="card-header bg-dark">
                    <h4>${Manager.managerName}</h4>
                </div>
                <div class="card-body">
                    <ul>
                        <li>ID: ${Manager.managersId}</li>
                        <li>Email: <a href="mailto:${Manager.managerEmail}">${Manager.managerEmail}</a></li>
                        <li>Office number: ${manager.officeNumber}</li>
                    </ul>

                </div>
            </div>
    `;
};

const generateEngineer = (Engineer) => {
    return `
         <div class="card bg-light mb-3 shadow" style="max-width: 18rem;">
            <div class="card-header bg-success"><i class="fa-solid fa-glasses"></i> Engineer</div>
            <div class="card-header bg-dark">
                <h4>${Engineer.engineerName}</h4>
            </div>
            <div class="card-body">
                <ul>
                    <li>ID: ${Engineer.engineerId}</li>
                    <li>Email: <a href="mailto:${Engineer.engineerEmail}">${Engineer.engineerEmail}</a></li>
                    <li>Github: <a href="https://github.com/${Engineer.github}" target="_blank" rel="noopener noreferrer">${Engineer.github}</a></li>
          </ul>

            </div>
        </div>
    `;
};


const generateIntern = (Intern) => {
    return `
        <div class="card bg-light mb-3 shadow" style="max-width: 18rem;">
                <div class="card-header bg-primary"><i class="fa-solid fa-mug-hot"></i> Manager</div>
                <div class="card-header bg-dark">
                    <h4>${Intern.internName}</h4>
                </div>
                <div class="card-body">
                    <ul>
                        <li>ID: ${Intern.internId}</li>
                        <li>Email: <a href="mailto:${Intern.internEmail}">${Intern.internEmail}</a></li>
                        <li>School: ${Intern.school}</li>
                    </ul>

                </div>
            </div>
    `;
};



// HTML index template literal
`
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/fd09075e37.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=MuseoModerno&family=Pridi&family=Prompt:wght@300;400;500&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container fluid">
        <div class="row">
            <div class="col-12 jumbotron jumbotron-fluid bg-danger">
                <h1 class="display-4">My Team </h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                
            </div>
        </div>
    </div>
</body>

</html>
`