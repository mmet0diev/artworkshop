document.addEventListener('DOMContentLoaded', async function () {
    let currentLanguage = "en"; // Default language

    // Function to change the language
    async function switchLanguage(language) {
        currentLanguage = language;
        localStorage.setItem('selectedLanguage', language); // Store the selected language

        try {
            // Fetch and parse the JSON data for the selected language
            const response = await fetch(`langs/home_langs.json`);
            const data = await response.json();

            // Update the content on your page with the language data
            document.getElementById('sitetitle').textContent = data[language].sitetitle;
            document.getElementById('home-link').textContent = data[language].home;
            document.getElementById('gallery-link').textContent = data[language].gallery;
            document.getElementById('about-link').textContent = data[language].about;
            document.getElementById('pic1txt').textContent = data[language].pic1txt;
            document.getElementById('pic2txt').textContent = data[language].pic2txt;
        } catch (error) {
            console.error("Error fetching or parsing data:", error);
        }
    }

    // Add event listeners to the language flags
    document.getElementById('en-flag').addEventListener('click', () => switchLanguage('en'));
    document.getElementById('bg-flag').addEventListener('click', () => switchLanguage('bg'));

    // Initially set the language to English
    switchLanguage(currentLanguage);
});