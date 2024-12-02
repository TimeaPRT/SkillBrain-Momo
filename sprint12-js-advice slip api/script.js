// Select DOM elements
const adviceID = document.getElementById("advice-id");
const textAdvice = document.getElementById("advice-text");
const button = document.getElementById("dice-button");

// Functions to update the DOM with advice and ID
const randomAdvice = (text) => {
    textAdvice.textContent = text;
};

const randomId = (id) => {
    adviceID.textContent = `ADVICE #${id}`;
};

// Fetch advice from API and update the DOM
async function tellAdvice() {
    const url = "https://api.adviceslip.com/advice";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const advice = data.slip.advice;
        const id = data.slip.id;

        // Update DOM with fetched advice and ID
        randomAdvice(`"${advice}"`);
        randomId(id);
    } catch (e) {
        console.error("Error fetching advice:", e);
        randomAdvice("Oops! Could not fetch advice.");
        randomId("???");
    }
}

// Add event listener to button
button.addEventListener("click", tellAdvice);
