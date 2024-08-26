// Ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map with a better initial view
    var map = L.map('map').setView([31.0461, 34.8516], 2); // Centered on Israel with zoom level 6

    // Add a tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);

    // Add markers for your travel locations
    var locations = [
        { lat: 32.7767, lng: -96.7970, title: 'Dallas' }
        // Add more locations as needed
    ];

    locations.forEach(function(location) {
        L.marker([location.lat, location.lng])
            .addTo(map)
            .bindPopup(location.title);
    });
});




