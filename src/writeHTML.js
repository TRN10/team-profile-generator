// Function to write index.html using teamMembers html

const fs = require('fs');
let generateTeam = require('./generate');

function exportHTML(teamMembers) {
    let teamMembersHTML = `
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
                <h1 class="display-4"><i class="fa-solid fa-people-group"></i> My Team </h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-members col-12 d-flex justify-content-center">
                ${generateTeam(teamMembers)}
            </div>
        </div>
    </div>
</body>

</html>
`
    fs.writeFileSync(
        "./dist/index.html",
        teamMembersHTML,
        "utf-8")
};

module.exports = exportHTML;