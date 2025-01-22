document.addEventListener('DOMContentLoaded', function() {
    // Load Google Maps API
    var script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAmycMUSSKZkk77QpEXMmSi2d3Ynlz1gTc&callback=initMap";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Data for flags
    const countries = [
        { name: 'Israel', flag: 'IS-flag.jpg' },
        { name: 'Georgia', flag: 'GG-flag.jpg' },
        { name: 'Kenya', flag: 'KE-flag.jpg' },
        { name: 'Tanzania', flag: 'TZ-flag.jpg' },
        { name: 'Rwanda', flag: 'Flag_of_Rwanda.jpg' },
        { name: 'UAE', flag: 'AE-flag.jpg' },
        { name: 'Nepal', flag: 'nepalflag.jpg' },
        { name: 'Thailand', flag: 'TH-flag.jpg' },
        { name: 'Laos', flag: 'LA-flag.jpg' }
    ];

    // Data for blog posts
    const blogs = [
        { title: 'January 2025', link: 'january-2025.html' },
        { title: 'December 2024', link: 'december-2024.html' },
        { title: 'November 2024', link: 'november-2024.html' },
        { title: 'October 2024', link: 'october-2024.html' },
        { title: 'September 2024', link: 'september-2024.html' }
    ];

    // Add flags dynamically
    const flagsGrid = document.querySelector('.flags-grid');
    countries.forEach(country => {
        const flagItem = document.createElement('div');
        flagItem.innerHTML = `<img src="images/${country.flag}" alt="${country.name} flag" loading="lazy"><p>${country.name}</p>`;
        flagItem.className = 'flag-item'; // Add a class for styling
        flagsGrid.appendChild(flagItem);
    });

    // Add blog posts dynamically
    const blogPosts = document.querySelector('.blog-posts');
    blogs.forEach(blog => {
        const post = document.createElement('article');
        post.innerHTML = `<h3>${blog.title}</h3><a href="${blog.link}" class="btn-primary">Read More</a>`;
        post.className = 'blog-post'; // Add a class for styling
        blogPosts.appendChild(post);
    });
});

function toggleMap() {
    const mapElement = document.getElementById('map');
    const mapContainer = document.querySelector('.map-container');
    if (mapContainer.style.display === "none" || mapContainer.style.display === "") {
        mapContainer.style.display = "block";
        if (!window.mapInitialized) {
            initMap();
            window.mapInitialized = true;
        }
    } else {
        mapContainer.style.display = "none";
    }
}

function initMap() {
    var mapOptions = {
        zoom: 2,
        center: { lat: 20.0, lng: 0.0 },
        styles: [
            {featureType: 'all', elementType: 'geometry', stylers: [{ color: '#ebe3cd' }]},
            {featureType: 'all', elementType: 'labels.text.fill', stylers: [{ color: '#523735' }]},
            {featureType: 'all', elementType: 'labels.text.stroke', stylers: [{ color: '#f5f1e6' }]},
            {featureType: 'water', elementType: 'geometry.fill', stylers: [{ color: '#c9c9c9' }]},
        ],
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Marker locations and titles
    var locations = [
        { lat: 32.7767, lng: -96.7970, title: 'Dallas, USA' },
        { lat: 27.9759, lng: -82.8001, title: 'Clearwater, USA' },
        { lat: 40.7128, lng: -74.0060, title: 'New York, USA' },
        { lat: 41.9028, lng: 12.4964, title: 'Rome, Italy' },
        { lat: 31.7683, lng: 35.2137, title: 'Jerusalem, Israel' },
        { lat: 41.7151, lng: 44.8271, title: 'Tbilisi, Georgia' },
        { lat: 25.2048, lng: 55.2708, title: 'Dubai, UAE' },
        { lat: -1.286389, lng: 36.817223, title: 'Nairobi, Kenya' },
        { lat: -3.3869, lng: 36.6829, title: 'Arusha, Tanzania' },
        { lat: -4.2871, lng: 39.5944, title: 'Diani Beach, Kenya' },
        { lat: -1.94995, lng: 30.05885, title: 'Kigali, Rwanda' },
        { lat: 9.010793, lng: 38.761252, title: 'Addis Ababa, Ethiopia' },
        { lat: 25.2048, lng: 55.2708, title: 'Dubai, UAE' },
        { lat: 27.7172, lng: 85.3240, title: 'Kathmandu, Nepal' },
        { lat: 13.7563, lng: 100.5018, title: 'Bangkok, Thailand' },
        { lat: 19.8864, lng: 102.1355, title: 'Luang Prabang, Laos' }
    ];

    var infoWindow = new google.maps.InfoWindow();

    locations.forEach(function (location) {
        var marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.title,
            icon: { url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png' }
        });

        marker.addListener('click', function () {
            infoWindow.setContent(`<h3>${location.title}</h3>`);
            infoWindow.open(map, marker);
        });
    });

    // Fit map to markers
    var bounds = new google.maps.LatLngBounds();
    locations.forEach(loc => bounds.extend(new google.maps.LatLng(loc.lat, loc.lng)));
    map.fitBounds(bounds);

    // Draw a polyline
    var pathCoordinates = locations.map(function (location) {
        return { lat: location.lat, lng: location.lng };
    });

    var polyline = new google.maps.Polyline({
        path: pathCoordinates,
        geodesic: true,
        strokeColor: '#FF5733',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        icons: [
            {
                icon: {
                    path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
                    scale: 3,
                    strokeColor: '#FF5733',
                },
                offset: '100%',
            },
        ],
    });

    polyline.setMap(map);
}