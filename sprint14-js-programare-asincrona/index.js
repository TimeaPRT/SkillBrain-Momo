// Load the JSON file using fetch and promises
function loadJsonData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          reject("The JSON file could not be loaded");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        resolve(data); 
        // Return the JSON data when successfully loaded
      })
      .catch((error) => {
        reject(error); 
        // Reject the promise in case of an error
      });
  });
}

// Load and retrieve JSON data
async function loadProgram() {
  try {
    const data = await loadJsonData("data.json");
    const { destinations, crew, technology } = data;

    // Retrieve destinations, crew, and technologies from the JSON file
    const destinationsObj = createObjectByKey(destinations, "name");
    const crewObj = createObjectByKey(crew, "role");
    const technologyObj = createObjectByKey(technology, "name");

    // Set event listeners for destinations, crew, and technology
    setEventListeners(destinationsObj, crewObj, technologyObj);
  } catch (error) {
    console.error("Error loading the JSON file:", error);
  }
}

// Utility function to create an object with keys based on a property
function createObjectByKey(array, key) {
  return array.reduce((acc, item) => {
    acc[item[key].toLowerCase()] = item;
    return acc;
  }, {});
}

// Set event listeners for destinations, crew, and technology
function setEventListeners(destinations, crew, technology) {
  document.getElementById("destination").addEventListener("click", () => {
    getDestinationInfo(destinations.moon); 
    // Default to Moon
    document.body.style.backgroundImage = "url('assets/destination/background-destination-desktop.jpg')";
  });

  document.getElementById("crew").addEventListener("click", () => {
    getCrewInformation(crew.commander); 
    // Default to Commander
    document.body.style.backgroundImage = "url('assets/crew/background-crew-desktop.jpg')";
  });

  document.getElementById("technology").addEventListener("click", () => {
    getTechnologyInfo(technology["launch vehicle"]); 
    // Default to Launch Vehicle
    document.body.style.backgroundImage = "url('assets/technology/background-technology-desktop.jpg')";
    updateTechnologyStyles(0); 
    // Highlight the Launch Vehicle button
  });

  document.getElementById("home").addEventListener("click", backToHome);

  // Dynamically set events for destinations
  Object.keys(destinations).forEach((name) => {
    const button = createButton("planet", `explore-${name}`, name);
    document.querySelector(".information-planet .mb38").appendChild(button);

    button.addEventListener("click", () => {
      getDestinationInfo(destinations[name]);
      document.body.style.backgroundImage = "url('assets/destination/background-destination-desktop.jpg')";
    });
  });

  // Dynamically set events for crew
  Object.keys(crew).forEach((role) => {
    const button = createButton("crew-button", `${role}-button`, role);
    document.querySelector(".next-crew").appendChild(button);

    button.addEventListener("click", () => {
      getCrewInformation(crew[role]);
    });
  });

  // Dynamically set events for technology
  Object.keys(technology).forEach((name, index) => {
    const button = createButton("button-tech", `technology${index + 1}`, index + 1);
    document.querySelector(".container-technology .button").appendChild(button);

    button.addEventListener("click", () => {
      getTechnologyInfo(technology[name]);
      updateTechnologyStyles(index);
    });
  });
}

// Function to create a button element
function createButton(className, id, text) {
  const button = document.createElement("button");
  button.className = className;
  button.id = id;
  button.textContent = typeof text === "string" ? capitalizeFirstLetter(text) : text;
  return button;
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function to update styles for technology buttons
function updateTechnologyStyles(index) {
  const buttons = document.querySelectorAll(".button-tech");
  buttons.forEach((button, idx) => {
    button.style.backgroundColor = idx === index ? "white" : "black";
  });
}

// Function to display information about the selected destination
function getDestinationInfo(destination) {
  setImage("destination-image", destination.images);

  document.getElementById("nameDestination").textContent = destination.name;
  document.getElementById("destinationDescription").textContent = destination.description;
  document.getElementById("destinationDistance").textContent = destination.distance;
  document.getElementById("destinationTravel").textContent = destination.travel;

  toggleSections("destination-section");
}

// Function to display information about the selected crew member
function getCrewInformation(crewMember) {
  setImage("crew-image", crewMember.images);

  document.getElementById("crew-name").textContent = crewMember.name;
  document.getElementById("crew-role").textContent = crewMember.role.toUpperCase();
  document.getElementById("crew-bio").textContent = crewMember.bio;

  toggleSections("crew-section");
}

// Function to display information about the selected technology
function getTechnologyInfo(technology) {
  setImage("technology-image", technology.images);

  document.getElementById("technology-name").textContent = technology.name;
  document.getElementById("technology-description").style.display = "none";
    document.getElementById("crew-section").style.display = "none";
    document.getElementById("technology-section").style.display = "none";
  
    document.body.style.backgroundImage = "url('assets/home/background-home-desktop.jpg')";
  }
  
  // Start the program
  loadProgram();

