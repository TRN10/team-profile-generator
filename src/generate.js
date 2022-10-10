// Functions to create card for each type of team member

const Employee = require('../lib/Employee.js');

const generateTeam = (teamMembers) => {


    const generateManager = (Manager) => {
        return `
        <div class="card bg-light mb-3 shadow" style="max-width: 18rem;">
        <div class="card-header bg-primary"><i class="fa-solid fa-mug-hot"></i> <strong>Manager</strong></div>
            <div class="card-header bg-dark">
                <h4>${Manager.name}</h4>
            </div>
            <div class="card-body">
                <ul>
                    <li>ID: ${Manager.id}</li>
                    <li>Email: <a href="mailto:${Manager.email}">${Manager.email}</a></li>
                    <li>Office number: ${Manager.officeNumber}</li>
                </ul>

            </div>
        </div>
    `;
    };

    const generateEngineer = (Engineer) => {
        return `
        <div class="card bg-light mb-3 shadow" style="max-width: 18rem;">
        <div class="card-header bg-success"><i class="fa-solid fa-glasses"></i> <strong>Engineer</strong></div>
            <div class="card-header bg-dark">
                <h4>${Engineer.name}</h4>
            </div>
            <div class="card-body">
                <ul>
                    <li>ID: ${Engineer.id}</li>
                    <li>Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></li>
                    <li>Github: <a href="https://github.com/${Engineer.github}" target="_blank" rel="noopener noreferrer">${Engineer.github}</a></li>
                </ul>

            </div>
        </div>
    `;
    };


    const generateIntern = (Intern) => {
        return `
        <div class="card bg-light mb-3 shadow" style="max-width: 18rem;">
        <div class="card-header bg-warning"> <i class="fa-solid fa-user-graduate"></i> <strong>Intern</strong></div>
            <div class="card-header bg-dark">
                <h4>${Intern.name}</h4>
            </div>
            <div class="card-body">
                <ul>
                    <li>ID: ${Intern.id}</li>
                    <li>Email: <a href="mailto:${Intern.email}">${Intern.email}</a></li>
                    <li>School: ${Intern.school}</li>
                </ul>

            </div>
        </div>
    `;
    };

    let members = teamMembers.map(member => {
        if (member.getRole() === "Manager") {
            //console.log(member)
            return generateManager(member);
        } else if (member.getRole() === "Engineer") {

            return generateEngineer(member);
        } else {

            return generateIntern(member);
        }
    }).join("");
    //console.log(members)
    return members;
};




module.exports = generateTeam;