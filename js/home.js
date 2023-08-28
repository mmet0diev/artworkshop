document.addEventListener('DOMContentLoaded', function () {
    let currentLanguage = localStorage.getItem('selectedLanguage') || "en"; // Get the selected language from local storage or default to English

    // Function to change the language on both pages
    function switchLanguage(language) {
        currentLanguage = language;
        localStorage.setItem('selectedLanguage', language); // Store the selected language

        // Create a new XMLHttpRequest object
        var request = new XMLHttpRequest();

        // Define the URL for the JSON data
        var url = 'langs/home_langs.json';

        // Set up the request
        request.open('GET', url, true);

        // Define the callback function to handle the response
        request.onload = function () {
            if (request.status === 200) {
                // Parse the JSON response
                var data = JSON.parse(request.responseText);

                // Update the content on the home page
                document.getElementById('sitetitle').textContent = data[language].sitetitle;
                document.getElementById('home-link').textContent = data[language].home;
                document.getElementById('gallery-link').textContent = data[language].gallery;
                document.getElementById('about-link').textContent = data[language].about;
                document.getElementById('pic1txt').textContent = data[language].pic1txt;
                document.getElementById('pic2txt').textContent = data[language].pic2txt;
            } else {
                console.error("Error fetching data:", request.statusText);
            }
        };

        // Handle network errors
        request.onerror = function () {
            console.error("Network error while fetching data");
        };

        // Send the request
        request.send();

        // Trigger a custom event to inform the gallery page to update its content
        var event = new Event('languageChange');
        document.dispatchEvent(event);
    }

    // Add event listeners to the language flags
    document.getElementById('en-flag').addEventListener('click', function () {
        switchLanguage('en');
    });

    document.getElementById('bg-flag').addEventListener('click', function () {
        switchLanguage('bg');
    });

    // Initially set the language
    switchLanguage(currentLanguage);
});