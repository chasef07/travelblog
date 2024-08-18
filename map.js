// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 2); // Default view

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add markers for your travel locations
var locations = [
    { lat: 48.8566, lng: 2.3522, title: 'Paris' },
    { lat: 35.6895, lng: 139.6917, title: 'Tokyo' }
    // Add more locations as needed
];

locations.forEach(function(location) {
    L.marker([location.lat, location.lng])
        .addTo(map)
        .bindPopup(location.title);
});
