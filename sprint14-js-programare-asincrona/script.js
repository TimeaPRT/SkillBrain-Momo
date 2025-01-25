document.addEventListener("DOMContentLoaded", () => {
    // Get all the HTML elements needed
    const homeSection = document.getElementById('home-section');
    const destinationSection = document.getElementById('destination-section');
    const crewSection = document.getElementById('crew-section');
    const technologySection = document.getElementById('technology-section');
    const exploreButton = document.getElementById('explore');
    const destinationButtonsContainer = document.querySelector('.grafix .mb38');
    const crewButtonsContainer = document.querySelector('.next-crew');
    const technologyButtonsContainer = document.querySelector('.button');

    // Load the data from JSON
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP error! Status: ${response.status}');
            }
            return response.json();
        })
        .then(data => {
            // Store data in variables for easy access
            const { destinations, crew, technology } = data;

            // Create the destination buttons dynamically
            destinations.forEach((destination, index) => {
                const button = document.createElement('button');
                button.textContent = destination.name;
                button.classList.add('destination-button');
                button.addEventListener('click', () => displayDestination(destination));
                destinationButtonsContainer.appendChild(button);
            });

            // Create the crew buttons dynamically
            crew.forEach((member, index) => {
                const button = document.createElement('button');
                button.textContent = member.name;
                button.classList.add('crew-button');
                button.addEventListener('click', () => displayCrew(member));
                crewButtonsContainer.appendChild(button);
            });

            // Create the technology buttons dynamically
            technology.forEach((tech, index) => {
                const button = document.createElement('button');
                button.textContent = tech.name;
                button.classList.add('technology-button');
                button.addEventListener('click', () => displayTechnology(tech));
                technologyButtonsContainer.appendChild(button);
            });

            // Handle Explore button click to show destination section
            exploreButton.addEventListener('click', () => {
                showSection(destinationSection);
            });

            // Display destination data
            function displayDestination(destination) {
                document.getElementById('nameDestination').textContent = destination.name;
                document.getElementById('destinationDescription').textContent = destination.description;
                document.getElementById('destinationDistance').textContent = destination.distance;
                document.getElementById('destinationTravel').textContent = destination.travel;
                document.getElementById('destination-image').src = destination.images.png;
            }

            // Display crew member data
            function displayCrew(member) {
                document.getElementById('crew-name').textContent = member.name;
                document.getElementById('crew-role').textContent = member.role;
                document.getElementById('crew-bio').textContent = member.bio;
                document.getElementById('crew-image').src = member.images.png;
            }

            // Display technology data
            function displayTechnology(tech) {
                document.getElementById('technology-name').textContent = tech.name;
                document.getElementById('technology-description').textContent = tech.description;
                document.getElementById('technology-image').src = tech.images.png;
            }

            // Function to show only one section at a time
            function showSection(sectionToShow) {
                homeSection.style.display = 'none';
                destinationSection.style.display = 'none';
                crewSection.style.display = 'none';
                technologySection.style.display = 'none';

                sectionToShow.style.display = 'block';
            }

            // Handle navigation buttons
            document.getElementById('destination').addEventListener('click', () => {
                showSection(destinationSection);
            });

            document.getElementById('crew').addEventListener('click', () => {
                showSection(crewSection);
            });

            document.getElementById('technology').addEventListener('click', () => {
                showSection(technologySection);
            });

            // Ensure the home section is visible by default
            showSection(homeSection);
        })
        .catch(error => {
            console.error('Error loading the JSON data:', error);
        });
});