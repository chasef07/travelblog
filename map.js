// Ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map, centered on Israel (or any location), without setting an explicit zoom
    var map = L.map('map').setView([31.0461, 34.8516], 2); // Centered on Israel, but zoom is handled by fitBounds

    // Add a tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);

// Add markers for your travel locations
var locations = [
    { lat: 32.7767, lng: -96.7970, title: 'Dallas, Texas' },
    { lat: 27.9759, lng: -82.8001, title: 'Clearwater, Florida' },
    { lat: 40.7128, lng: -74.0060, title: 'New York, New York' },
    { lat: 41.9028, lng: 12.4964, title: 'Rome, Italy' },
    { lat: 31.7683, lng: 35.2137, title: 'Jerusalem, Israel' },
    { lat: 41.7151, lng: 44.8271, title: 'Tbilisi, Georgia' },
    { lat: 25.2048, lng: 55.2708, title: 'Dubai, UAE' },
    { lat: -1.286389, lng: 36.817223, title: 'Nairobi, Kenya' },
    { lat: -3.3869, lng: 36.6829, title: 'Arusha, Tanzania' },
    { lat: -4.2871, lng: 39.5944, title: 'Diani Beach, Kenya' },
    { lat: -1.286389, lng: 36.817223, title: 'Nairobi, Kenya' },
    { lat: -1.94995, lng: 30.05885, title: 'Kigali, Rwanda' },
    { lat: 9.010793, lng: 38.761252, title: 'Addis Ababa, Ethiopia' }, // Added Addis Ababa
    { lat: 25.2048, lng: 55.2708, title: 'Dubai, UAE' },
];


    // Create an array for the coordinates to connect
    var latLngs = locations.map(location => [location.lat, location.lng]);

    // Loop through the locations and add markers with popups
    locations.forEach(function(location) {
        L.marker([location.lat, location.lng])
            .addTo(map)
            .bindPopup(location.title);
    });

    // Create a polyline to connect the markers
    var polyline = L.polyline(latLngs, { color: 'blue', weight: 4 }).addTo(map);

    // Fit the map to the bounds of the polyline with padding
    // Add extra padding for better fit on mobile
    var isMobile = window.matchMedia("(max-width: 768px)").matches;
    var padding = isMobile ? [20, 20] : [10, 10]; // More padding on mobile devices
    map.fitBounds(polyline.getBounds(), {
        padding: padding // Add padding to ensure everything fits nicely
    });
});






