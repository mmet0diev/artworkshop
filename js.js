// js.js

// Function to change the language for the home page
async function switchHomeLang(language) {
    try {
        // Fetch and parse the JSON data for the selected language
        const response = await fetch(`langs/home_langs.json`);
        const data = await response.json();

        // Update the content on your home page with the language data
        document.getElementById('sitetitle').textContent = data[language].sitetitle;
        document.getElementById('home-link').textContent = data[language].home;
        document.getElementById('gallery-link').textContent = data[language].gallery;
        document.getElementById('about-link').textContent = data[language].about;
        document.getElementById('pic1txt').textContent = data[language].pic1txt;
        document.getElementById('pic2txt').textContent = data[language].pic2txt;
    } catch (error) {
        console.error("Error fetching or parsing home data:", error);
    }
}

// Function to change the language for the gallery page
async function switchGalleryLang(language) {
    try {
        // Fetch and parse the JSON data for the selected language
        const response = await fetch(`langs/gallery_langs.json`);
        const data = await response.json();

        // Update the content on your gallery page with the language data
        const images = data[language].images;

        for (let i = 0; i < images.length; i++) {
            const image = images[i];
            const imageId = `pic${i + 1}`;

            // Update image title, description, origin, and price
            document.getElementById(`${imageId}title`).textContent = image.title;
            document.getElementById(`${imageId}description`).textContent = image.description;
            document.getElementById(`${imageId}origin`).textContent = image.origin;
            document.getElementById(`${imageId}price`).textContent = image.price;
        }
    } catch (error) {
        console.error("Error fetching or parsing gallery data:", error);
    }
}

// Add event listeners to the language flags for the home page
document.getElementById('en-flag').addEventListener('click', () => switchHomeLang('en'));
document.getElementById('bg-flag').addEventListener('click', () => switchHomeLang('bg'));

// Add an event listener to the language flags for the gallery page
document.getElementById('en-flag').addEventListener('click', () => switchGalleryLang('en'));
document.getElementById('bg-flag').addEventListener('click', () => switchGalleryLang('bg'));

// Initially set the language to English for both home and gallery pages
switchHomeLang('en');
switchGalleryLang('en');