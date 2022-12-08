// Write your JavaScript code here!

window.addEventListener("load", function() {
      //need to add alert if any of the form fields are empty
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        console.log("Submitted")
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
            alert("All fields are required!");
        } else if (isNaN(pilotNameInput.value) === true || isNaN(copilotNameInput.value) === true || isNaN(fuelLevelInput.value) === false || isNaN(cargoMassInput.value) === false) {
            alert("Make sure to enter valid information for each field!");
        }   
        event.preventDefault()

    })

   let listedPlanets = [];
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});
