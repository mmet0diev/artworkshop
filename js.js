// Define a function to change the language to English
function switchToEnHome() {
    // Fetch and parse the English JSON data
    fetch('langs/home_en.json')
        .then(response => response.json())
        .then(data => {
            // Update the content on your page with the English data
            document.getElementById('home-link').textContent = data.home;
            document.getElementById('gallery-link').textContent = data.gallery;
            document.getElementById('about-link').textContent = data.about;
            document.getElementById('pic1').textContent = data.pic1;
            document.getElementById('pic2').textContent = data.pic2;
        });
}

// Define a function to change the language to Bulgarian
function switchToBgHome() {
    // Fetch and parse the Bulgarian JSON data
    fetch('langs/home_bg.json')
        .then(response => response.json())
        .then(data => {
            // Update the content on your page with the Bulgarian data
            document.getElementById('home-link').textContent = data.home;
            document.getElementById('gallery-link').textContent = data.gallery;
            document.getElementById('about-link').textContent = data.about;
            document.getElementById('pic1').textContent = data.pic1;
            document.getElementById('pic2').textContent = data.pic2;
        });
}