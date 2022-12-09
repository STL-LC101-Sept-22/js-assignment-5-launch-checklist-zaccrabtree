// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">
    `;

}

function validateInput(testInput) {
   if(testInput === "") {
        return "Empty";
     }
        if(isNaN(testInput) === false) {
            return "Is a Number";
        } else {
            return "Not a Number";
        }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
    } else if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert("Make sure to enter valid information for each field!");
    } else if(validateInput(fuelLevel) === "Is Not a Number" || validateInput(cargoLevel) === "Is Not a Number") {
        alert("Make sure to enter valid information for each field!");
    } else {
        list.style.visibility = "visible"
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
        if(fuelLevel < 10000) {
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
        } else if(cargoLevel > 10000) {
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color = "rgb(199, 37, 78)";
        } else {
            document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
            document.getElementById("launchStatus").style.color = "rgb(65, 159, 106)";
        }
    
}
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then((response) => response.json());

    return planetsReturned;
}

function pickPlanet(planetsReturned) {
    //should take in the array of planets as a parameter and return a single planet object randomly.
    let randomPlanet = planetsReturned[Math.floor(Math.random() * planetsReturned.length)];
    return randomPlanet;

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;