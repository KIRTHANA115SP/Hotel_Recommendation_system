// hotel-script.js

// Mock data for hotels
const hotels = [
    { 
        id: 1, 
        name: "JKInn", 
        location: "Vellore", 
        price: "mid-range", 
        rating: 3, 
        amenities: ["shared lounge", "WiFi", "mountain view"],
        image: "https://picsum.photos/200/300?random=1" // Placeholder image
    },
    { 
        id: 2, 
        name: "Hotel Golden Gateway", 
        location: "Vellore", 
        price: "mid-range", 
        rating: 3, 
        amenities: ["WiFi", "spa"],
        image: "https://example.com/images/golden_gateway.jpg" // Add image URL here
    },
    { 
        id: 3, 
        name: "VANTARA SUITEs", 
        location: "Vellore", 
        price: "mid-range", 
        rating: 3, 
        amenities: ["WiFi", "Parking", "city view"],
        image: "https://example.com/images/vantara_suites.jpg" // Add image URL here
    },
    { 
        id: 4, 
        name: "ANNAI RESIDENCY", 
        location: "Vellore", 
        price: "mid-range", 
        rating: 3, 
        amenities: ["WiFi", "breakfast", "garden", "parking"],
        image: "https://example.com/images/annai_residency.jpg" // Add image URL here
    },
    { 
        id: 5, 
        name: "Regency Sameera Vellore", 
        location: "Vellore", 
        price: "luxury", 
        rating: 5, 
        amenities: ["fort view", "WiFi", "Gym"],
        image: "https://example.com/images/regency_sameera.jpg" // Add image URL here
    },
    { 
        id: 6, 
        name: "Treebo Kingsbury Fiesta", 
        location: "Vellore", 
        price: "mid-range", 
        rating: 3, 
        amenities: ["WiFi", "private bathroom", "breakfast"],
        image: "https://example.com/images/treebo_kingsbury.jpg" // Add image URL here
    },
    { 
        id: 7, 
        name: "Kanna Fiesta", 
        location: "Vellore", 
        price: "mid-range", 
        rating: 4, 
        amenities: ["shared lounge", "WiFi", "on-site bar", "free parking"],
        image: "https://example.com/images/kanna_fiesta.jpg" // Add image URL here
    },
    { 
        id: 8, 
        name: "GRAND GANPAT", 
        location: "Vellore", 
        price: "mid-range", 
        rating: 3, 
        amenities: ["WiFi", "parking"],
        image: "https://example.com/images/grand_ganpat.jpg" // Add image URL here
    },
    { 
        id: 9, 
        name: "Aloka Stay", 
        location: "Vellore", 
        price: "mid-range", 
        rating: 3, 
        amenities: ["WiFi", "Parking", "breakfast"],
        image: "https://example.com/images/aloka_stay.jpg" // Add image URL here
    },
    { 
        id: 10, 
        name: "Benzz Park Vellore", 
        location: "Vellore", 
        price: "luxury", 
        rating: 5, 
        amenities: ["WiFi", "pool", "rooftop", "Breakfast", "airport transfer", "gym", "shuttle service"],
        image: "https://example.com/images/benzz_park.jpg" // Add image URL here
    },
    { 
        id: 11, 
        name: "Fabhotel Prince Park", 
        location: "Vellore", 
        price: "luxury", 
        rating: 5, 
        amenities: ["laundry service", "WiFi", "Gym", "luggage service"],
        image: "https://example.com/images/fabhotel_prince_park.jpg" // Add image URL here
    },
    { 
        id: 12, 
        name: "Hotel Essence", 
        location: "Vellore", 
        price: "luxury", 
        rating: 4, 
        amenities: ["WiFi", "coffee shop", "parking", "gym", "restaurants"],
        image: "https://example.com/images/hotel_essence.jpg" // Add image URL here
    },
    { 
        id: 13, 
        name: "Zip", 
        location: "Vellore", 
        price: "luxury", 
        rating: 4, 
        amenities: ["park", "WiFi", "shuttle service", "free parking"],
        image: "https://example.com/images/zip.jpg" // Add image URL here
    },
    { 
        id: 14, 
        name: "Nannilam Organic Farmstay", 
        location: "Vellore", 
        price: "luxury", 
        rating: 4, 
        amenities: ["WiFi", "parking", "pool", "gym"],
        image: "https://example.com/images/nannilam_organic_farmstay.jpg" // Add image URL here
    },
    { 
        id: 15, 
        name: "Park Inn", 
        location: "Vellore", 
        price: "mid-range", 
        rating: 3, 
        amenities: ["WiFi", "gaming centre", "breakfast", "couple spots"],
        image: "https://example.com/images/park_inn.jpg" // Add image URL here
    },
    { 
        id: 16, 
        name: "Fortune Park", 
        location: "Vellore", 
        price: "luxury", 
        rating: 4, 
        amenities: ["WiFi", "Breakfast", "pool", "parking", "sky dining", "city view"],
        image: "https://example.com/images/fortune_park.jpg" // Add image URL here
    },
    { 
        id: 17, 
        name: "Golden Gateway", 
        location: "Vellore", 
        price: "luxury", 
        rating: 5, 
        amenities: ["Pool", "WiFi", "Gym"],
        image: "https://example.com/images/golden_gateway.jpg" // Add image URL here
    },
    { 
        id: 18, 
        name: "Murugan Residency", 
        location: "Vellore", 
        price: "budget", // Fixed spelling error from "budgemid-range"
        rating: 3, 
        amenities: ["WiFi"],
        image: "https://example.com/images/murugan_residency.jpg" // Add image URL here
    }
];

// Function to filter hotels based on user input
function filterHotels() {
    const location = document.getElementById('location').value.toLowerCase();
    const priceRange = document.getElementById('priceRange').value;
    const rating = document.getElementById('rating').value;

    // Filter hotels based on user inputs
    const filteredHotels = hotels.filter(hotel => {
        const matchesLocation = hotel.location.toLowerCase().includes(location);
        const matchesPrice = priceRange === "all" || hotel.price === priceRange;
        const matchesRating = rating === "all" || hotel.rating == rating;
        return matchesLocation && matchesPrice && matchesRating;
    });

    displayHotels(filteredHotels);
}

// Function to display filtered hotels
function displayHotels(hotelList) {
    const hotelListDiv = document.getElementById('hotelList');
    hotelListDiv.innerHTML = ''; // Clear previous results

    if (hotelList.length === 0) {
        hotelListDiv.innerHTML = '<p>No hotels found based on the selected criteria.</p>';
        return;
    }

    hotelList.forEach(hotel => {
        const hotelCard = `
            <div class="hotel-card">
                <h4>${hotel.name}</h4>
                <p>Location: ${hotel.location}</p>
                <p>Rating: ${hotel.rating} Stars</p>
                <p class="price">Price: ${hotel.price.charAt(0).toUpperCase() + hotel.price.slice(1)}</p>
            </div>
        `;
        hotelListDiv.innerHTML += hotelCard;
    });
}

// Function to clear filters
function clearFilters() {
    // Reset all form fields to default values
    document.getElementById('location').value = '';
    document.getElementById('priceRange').value = 'all';
    document.getElementById('rating').value = 'all';
    
    // Optionally, clear hotel suggestions when filters are cleared
    document.getElementById('hotelList').innerHTML = '<p>No hotels found. Please search again.</p>';
}
