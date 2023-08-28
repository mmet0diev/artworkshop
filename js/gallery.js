document.addEventListener('DOMContentLoaded', function () {
    let currentLanguage = localStorage.getItem('selectedLanguage') || "en"; // Get the selected language from local storage or default to English

    // Function to change the language
    function switchLanguage(language) {
        currentLanguage = language;
        localStorage.setItem('selectedLanguage', language); // Store the selected language

        // Create a new XMLHttpRequest object
        var request = new XMLHttpRequest();

        // Define the URL for the JSON data
        var url = '../langs/gallery_langs.json'; // Change the URL to gallery_langs.json

        // Set up the request
        request.open('GET', url, true);

        // Define the callback function to handle the response
        request.onload = function () {
            if (request.status === 200) {
                // Parse the JSON response
                var data = JSON.parse(request.responseText);
                console.log(data)

                // Update the content on the gallery page
                Object.keys(data[language].translations).forEach((elementId) => {
                    // Get the translation for the current element
                    const translation = data[language].translations[elementId];
                    
                    // Update the text content of the HTML element
                    document.getElementById(elementId).textContent = translation;
                });
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

        // Trigger a custom event to inform the home page to update its content
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