// Write your JavaScript code here!

window.addEventListener("load", function() {
      //need to add alert if any of the form fields are empty
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        
        let document = window.document;
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let list = document.getElementById("faultyItems");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        
        formSubmission(document, list, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value)
        event.preventDefault()
        


    })

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch()  
   // Use console.log() to print the value of listedPlanetsResponse
   console.log(listedPlanetsResponse);
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
         let planet = pickPlanet(listedPlanets);
            addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
   })
   
});
