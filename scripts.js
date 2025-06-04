document.addEventListener('DOMContentLoaded', function() {
    // Data for flags
    const countries = [
        { name: 'Israel', flag: 'IS-flag.jpg', coordinates: [31.7683, 35.2137] },
        { name: 'Georgia', flag: 'GG-flag.jpg', coordinates: [41.7151, 44.8271] },
        { name: 'Kenya', flag: 'KE-flag.jpg', coordinates: [-1.286389, 36.817223] },
        { name: 'Tanzania', flag: 'TZ-flag.jpg', coordinates: [-6.1630, 35.7516] },
        { name: 'Rwanda', flag: 'Flag_of_Rwanda.jpg', coordinates: [-1.9403, 29.8739] },
        { name: 'UAE', flag: 'AE-flag.jpg', coordinates: [25.2048, 55.2708] },
        { name: 'Nepal', flag: 'nepalflag.jpg', coordinates: [27.7172, 85.3240] },
        { name: 'Thailand', flag: 'TH-flag.jpg', coordinates: [13.7563, 100.5018] },
        { name: 'Laos', flag: 'LA-flag.jpg', coordinates: [17.9757, 102.6331] },
        { name: 'Cambodia', flag: 'CB-flag.jpg', coordinates: [11.5564, 104.9282] },
        { name: 'China', flag: 'CH-flag.jpg', coordinates: [30.5728, 104.0668] },
        { name: 'Vietnam', flag: 'VM-flag.jpg', coordinates: [21.0285, 105.8544] },
        { name: 'Singapore', flag: 'SN-flag.jpg', coordinates: [1.3521, 103.8198] },
        { name: 'Philippines', flag: 'RP-flag.jpg', coordinates: [9.9432, 123.3966] }
    ];
    
    // Data for blog posts with excerpts
    const blogs = [

        {
            title: "June 2025: Indonesia",
            date: "June 2025",
            excerpt: "INDO INDO INDO",
            image: "images/test.jpg",
            link: "june-2025.html"
        },
        {
            title: "May 2025: Island Hopping in the Phillipines",
            date: "May 2025",
            excerpt: "Turquoise waterfalls, epic snorkeling, crazy surfing, and laid-back beach vibes — the Philippines hits hard in every direction.",
            image: "images/canyoneering.jpg",
            link: "may-2025.html"
        },
        {
            title: "April 2025: Motorbiking Vietnam",
            date: "April 2025",
            excerpt: "Ride with me across terraced rice fields while enjoying traditional Vietnamese cuisine.",
            image: "images/droneshotrice.jpg",
            link: "april-2025.html"
        },
        {
            title: "March 2025: Chilling in Cambodia",
            date: "March 2025",
            excerpt: "From the ancient temples of Angkor Wat to the pristine beaches of Koh Rong, exploring the wonders of Cambodia.",
            image: "images/kohsdach.jpg",
            link: "march-2025.html"
        },
        {
            title: "February 2025: Adventures in Laos",
            date: "February 2025",
            excerpt: "Journeying through Laos' traditional villages and beautiful landscapes, discovering the heart of Southeast Asia.",
            image: "images/laosfall-2.jpg",
            link: "february-2025.html"
        },
        {
            title: "January 2025: Thailand Discos",
            date: "January 2025",
            excerpt: "From island parties to serene sunsets, experiencing the allure of Thailand.",
            image: "images/fullmoon-2.jpg",
            link: "january-2025.html"
        },
        {
            title: "December 2024: Trekking in Nepal",
            date: "December 2024",
            excerpt: "Exploring the majestic Himalayas and vibrant streets of Kathmandu. From ancient temples to mountain adventures.",
            image: "images/namaste8-2.jpg",
            link: "december-2024.html"
        },
        {
            title: "November 2024: Safaris of East Africa",
            date: "November 2024",
            excerpt: "From the vast savannas of Tanzania to the perfectious coffee of Rwanda.",
            image: "images/serengeti-2.jpg",
            link: "november-2024.html"
        },
        {
            title: "October 2024: Investing in Georgia",
            date: "October 2024",
            excerpt: "Discovering the rich culture and ancient traditions of Georgia, from the vibrant streets of Tbilisi to the stunning mountains of Gudauri.",
            image: "images/blarg-2.jpg",
            link: "october-2024.html"
        },
        {
            title: "September 2024: Connecting in Israel",
            date: "September 2024",
            excerpt: "The start of my world adventure, from the final days in Florida to the first experiences in Israel.",
            image: "images/holyholy.jpg",
            link: "september-2024.html"
        }
    ];

    // Add flags dynamically
    const flagsGrid = document.querySelector('.flags-grid');
    if (flagsGrid) {
        countries.forEach(country => {
            const flagItem = document.createElement('div');
            flagItem.className = 'flag-item';
            flagItem.innerHTML = `
                <img src="images/${country.flag}" alt="${country.name} flag" loading="lazy">
                <span>${country.name}</span>
            `;
            flagsGrid.appendChild(flagItem);
        });
    }

    // Add blog posts dynamically
    const blogGrid = document.querySelector('.blog-grid');
    if (blogGrid) {
        blogs.forEach(blog => {
            const blogCard = document.createElement('div');
            blogCard.className = 'blog-card';
            blogCard.innerHTML = `
                <img src="${blog.image}" alt="${blog.title}" loading="lazy">
                <div class="blog-content">
                    <div class="blog-date">${blog.date}</div>
                    <h3 class="blog-title">${blog.title}</h3>
                    <p class="blog-excerpt">${blog.excerpt}</p>
                    <a href="${blog.link}" class="btn-primary">Read More</a>
                </div>
            `;
            blogGrid.appendChild(blogCard);
        });
    }

    // Initialize slideshow
    initSlideshow();

    // Initialize map
    initMap();

    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

let map;
let animationFrame;

// Slideshow functionality
const slides = [
    { image: 'images/slide1.jpg' },
    { image: 'images/slide2.jpg' },
    { image: 'images/slide3.jpg' },
    { image: 'images/slide4.jpg' }
];

let currentSlide = 0;

function initSlideshow() {
    const slideshow = document.querySelector('.slideshow');
    if (!slideshow) return;
    
    slides.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.className = `slide ${index === 0 ? 'active' : ''}`;
        slideElement.style.backgroundImage = `url(${slide.image})`;
        slideshow.appendChild(slideElement);
    });

    setInterval(nextSlide, 5000);
}

function nextSlide() {
    const slideElements = document.querySelectorAll('.slide');
    if (!slideElements.length) return;
    
    slideElements[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slideElements[currentSlide].classList.add('active');
}

function initMap() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
        console.error('Map container not found');
        return;
    }

    // Initialize the map
    map = L.map('map', {
        minZoom: 2,
        maxBounds: [[-90, -180], [90, 180]],
        worldCopyJump: true,
        zoomControl: false,
        scrollWheelZoom: true,
        dragging: true
    }).setView([20, 80], 3);

    // Add zoom control to the right side
    L.control.zoom({
        position: 'topright'
    }).addTo(map);
    
    // Add dark theme map tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    const orderedLocations = [
        { name: 'Israel', coordinates: [31.7683, 35.2137] },
        { name: 'Georgia', coordinates: [41.7151, 44.8271] },
        { name: 'Kenya', coordinates: [-1.286389, 36.817223] },
        { name: 'Tanzania', coordinates: [-6.1630, 35.7516] },
        { name: 'Rwanda', coordinates: [-1.9403, 29.8739] },
        { name: 'UAE', coordinates: [25.2048, 55.2708] },
        { name: 'Nepal', coordinates: [27.7172, 85.3240] },
        { name: 'Thailand', coordinates: [13.7563, 100.5018] },
        { name: 'Laos', coordinates: [17.9757, 102.6331] },
        { name: 'Cambodia', coordinates: [11.5564, 104.9282] },
        { name: 'China', coordinates: [30.5728, 104.0668] },
        { name: 'Vietnam', coordinates: [21.0285, 105.8544] },
        { name: 'Singapore', coordinates: [1.3521, 103.8198] },
        { name: 'Philippines', coordinates: [9.9432, 123.3966] }
    ];
        
    // Add markers and collect coordinates for the path
    const pathCoordinates = [];
    orderedLocations.forEach((location, index) => {
        // Create marker
        const marker = L.marker(location.coordinates).addTo(map);

        // Add popup
        marker.bindPopup(`
            <div class="custom-popup">
                <h3>${location.name}</h3>
                <p>Stop #${index + 1}</p>
            </div>
        `);

        pathCoordinates.push(location.coordinates);
    });

    // Create the path
    L.polyline(pathCoordinates, {
        color: '#FF6B6B',
        weight: 3,
        opacity: 0.8
    }).addTo(map);

    // Fit bounds to show all markers with padding
    const bounds = L.latLngBounds(pathCoordinates);
    map.fitBounds(bounds, {
        padding: [50, 50]
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        map.invalidateSize();
    });
}



// Add custom styles for the markers and popups
const style = document.createElement('style');
style.textContent = `
    .custom-marker {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .marker-pin {
        width: 20px;
        height: 20px;
        background: #FF6B6B;
        border: 3px solid white;
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(0,0,0,0.3);
        transition: transform 0.3s ease;
    }

    .marker-label {
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        white-space: nowrap;
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
        margin-bottom: 5px;
    }

    .custom-marker:hover .marker-pin {
        transform: scale(1.2);
    }

    .custom-marker:hover .marker-label {
        opacity: 1;
    }

    .custom-popup {
        text-align: center;
    }

    .custom-popup h3 {
        color: #2a5298;
        margin: 0 0 5px 0;
        font-size: 14px;
        font-weight: 600;
    }

    .custom-popup p {
        color: #666;
        margin: 0;
        font-size: 12px;
    }

    .leaflet-popup-content-wrapper {
        border-radius: 8px;
        padding: 5px;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(5px);
    }

    .leaflet-popup-tip {
        background: rgba(255, 255, 255, 0.95);
    }
`;
document.head.appendChild(style);

// Add this to your JavaScript file or in a <script> tag at the end of your HTML
document.addEventListener('DOMContentLoaded', function() {
    function adjustContentPadding() {
      const headerHeight = document.querySelector('.header-content').offsetHeight;
      const navHeight = document.querySelector('.nav').offsetHeight;
      const totalHeight = headerHeight + navHeight;
      
      const contentPages = document.querySelectorAll('.blog-posts, .transportation-page, .food-page, .packing-checklist-page');
      contentPages.forEach(page => {
        page.style.paddingTop = (totalHeight + 20) + 'px'; // Add 20px for spacing
      });
    }
  
    // Run on load and resize
    adjustContentPadding();
    window.addEventListener('resize', adjustContentPadding);
  });

  /* Add this JavaScript to make the checkboxes functional */

document.addEventListener('DOMContentLoaded', function() {
  const checklistItems = document.querySelectorAll('.checklist-column li');
  checklistItems.forEach(item => {
    item.addEventListener('click', function() {
      this.classList.toggle('checked');
    });
  });
});
