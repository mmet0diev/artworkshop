// Define a function to change the language to English
function switchToEnglish() {
    // Fetch and parse the English JSON data
    fetch('langs/en.json')
        .then(response => response.json())
        .then(data => {
            // Update the content on your page with the English data
            document.getElementById('home-link').textContent = data.home;
            document.getElementById('gallery-link').textContent = data.gallery;
            document.getElementById('about-link').textContent = data.about;
            document.getElementById('welcome-text').textContent = data.welcome;
            document.getElementById('paragraph1').textContent = data.paragraph1;
        });
}

// Define a function to change the language to Bulgarian
function switchToBulgarian() {
    // Fetch and parse the Bulgarian JSON data
    fetch('langs/bg.json')
        .then(response => response.json())
        .then(data => {
            // Update the content on your page with the Bulgarian data
            document.getElementById('home-link').textContent = data.home;
            document.getElementById('gallery-link').textContent = data.gallery;
            document.getElementById('about-link').textContent = data.about;
            document.getElementById('welcome-text').textContent = data.welcome;
            document.getElementById('paragraph1').textContent = data.paragraph1;
        });
}