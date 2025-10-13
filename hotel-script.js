const hotels = [
    { 
        id: 1, 
        name: "JKInn", 
        location: "Vellore", 
        price: 2000, 
        rating: 3, 
        amenities: ["shared lounge", "WiFi", "mountain view"],
        image: "https://picsum.photos/200/300?random=1"
    },
    { 
        id: 2, 
        name: "Hotel Golden Gateway", 
        location: "Vellore", 
        price: 1365, 
        rating: 3, 
        amenities: ["WiFi", "spa"],
        image: "https://example.com/images/golden_gateway.jpg"
    },
    { 
        id: 3, 
        name: "VANTARA SUITEs", 
        location: "Vellore", 
        price: 1650, 
        rating: 3, 
        amenities: ["WiFi", "Parking", "city view"],
        image: "https://example.com/images/vantara_suites.jpg"
    },
    { 
        id: 4, 
        name: "ANNAI RESIDENCY", 
        location: "Vellore", 
        price: 2223, 
        rating: 3, 
        amenities: ["WiFi", "breakfast", "garden", "parking"],
        image: "https://example.com/images/annai_residency.jpg"
    },
    { 
        id: 5, 
        name: "Regency Sameera Vellore", 
        location: "Vellore", 
        price: 3250, 
        rating: 5, 
        amenities: ["fort view", "WiFi", "Gym"],
        image: "https://example.com/images/regency_sameera.jpg"
    },
    { 
        id: 6, 
        name: "Treebo Kingsbury Fiesta", 
        location: "Vellore", 
        price: 5608, 
        rating: 3, 
        amenities: ["WiFi", "private bathroom", "breakfast"],
        image: "https://example.com/images/treebo_kingsbury.jpg"
    },
    { 
        id: 7, 
        name: "Kanna Fiesta", 
        location: "Vellore", 
        price: 3400, 
        rating: 4, 
        amenities: ["shared lounge", "WiFi", "on-site bar", "free parking"],
        image: "https://example.com/images/kanna_fiesta.jpg"
    },
    { 
        id: 8, 
        name: "GRAND GANPAT", 
        location: "Vellore", 
        price: 1635, 
        rating: 3, 
        amenities: ["WiFi", "parking"],
        image: "https://example.com/images/grand_ganpat.jpg"
    },
    { 
        id: 9, 
        name: "Aloka Stay", 
        location: "Vellore", 
        price: 1700, 
        rating: 3, 
        amenities: ["WiFi", "Parking", "breakfast"],
        image: "https://example.com/images/aloka_stay.jpg"
    },
    { 
        id: 10, 
        name: "Benzz Park Vellore", 
        location: "Vellore", 
        price: 4700, 
        rating: 5, 
        amenities: ["WiFi", "pool", "rooftop", "Breakfast", "airport transfer", "gym", "shuttle service"],
        image: "https://example.com/images/benzz_park.jpg"
    },
    { 
        id: 11, 
        name: "FabHotel", 
        location: "Vellore", 
        price: 1314, 
        rating: 3, 
        amenities: ["WiFi"],
        image: "https://example.com/images/fabhotel.jpg"
    },
    { 
        id: 12, 
        name: "Hotel Essence", 
        location: "Vellore", 
        price: 3010, 
        rating: 4, 
        amenities: ["WiFi", "coffee shop", "parking", "gym", "restaurants"],
        image: "https://example.com/images/hotel_essence.jpg"
    },
    { 
        id: 13, 
        name: "Zip", 
        location: "Vellore", 
        price: 2343, 
        rating: 4, 
        amenities: ["park", "WiFi", "shuttle service", "free parking"],
        image: "https://example.com/images/zip.jpg"
    },
    { 
        id: 14, 
        name: "Nannilam Organic Farmstay", 
        location: "Vellore", 
        price: 4650, 
        rating: 4, 
        amenities: ["WiFi", "parking", "pool", "gym"],
        image: "https://example.com/images/nannilam_organic_farmstay.jpg"
    },
    { 
        id: 15, 
        name: "Park Inn", 
        location: "Vellore", 
        price: 3729, 
        rating: 3, 
        amenities: ["WiFi", "gaming centre", "breakfast", "couple spots"],
        image: "https://example.com/images/park_inn.jpg"
    },
    { 
        id: 16, 
        name: "Fortune Park", 
        location: "Vellore", 
        price: 5100, 
        rating: 4, 
        amenities: ["WiFi", "Breakfast", "pool", "parking", "sky dining", "city view"],
        image: "https://example.com/images/fortune_park.jpg"
    },
    { 
        id: 17, 
        name: "Golden Gateway", 
        location: "Vellore", 
        price: 2700, 
        rating: 5, 
        amenities: ["Pool", "WiFi", "Gym"],
        image: "https://example.com/images/golden_gateway.jpg"
    },
    { 
        id: 18, 
        name: "Murugan Residency", 
        location: "Vellore", 
        price: 1872, 
        rating: 3, 
        amenities: ["WiFi"],
        image: "https://example.com/images/murugan_residency.jpg"
    },
    { 
        id: 19, 
        name: "Chandra Royal Residency", 
        location: "Vellore", 
        price: 701, 
        rating: 2, 
        amenities: ["WiFi", "AC", "Laundry"],
        image: "https://example.com/images/chandra_royal_residency.jpg"
    },
    { 
        id: 20, 
        name: "BKS Residency", 
        location: "Vellore", 
        price: 784, 
        rating: 3, 
        amenities: ["AC", "WiFi", "Parking", "Laundry"],
        image: "https://example.com/images/bks_residency.jpg"
    },
    { 
        id: 21, 
        name: "Sri Krishan Residency", 
        location: "Vellore", 
        price: 806, 
        rating: 3, 
        amenities: ["WiFi", "Parking", "Laundry"],
        image: "https://example.com/images/sri_krishan_residency.jpg"
    },
    { 
        id: 22, 
        name: "Sankar Lingam Residency", 
        location: "Vellore", 
        price: 874, 
        rating: 3, 
        amenities: ["Pool", "WiFi", "Laundry"],
        image: "https://example.com/images/sankar_lingam_residency.jpg"
    },
    { 
        id: 23, 
        name: "GR Mansion", 
        location: "Vellore", 
        price: 548, 
        rating: 3, 
        amenities: ["WiFi", "free breakfast"],
        image: "https://example.com/images/gr_mansion.jpg"
    }
];
function filterHotels() {
    const location = document.getElementById('location').value.toLowerCase();
    const priceRange = document.getElementById('priceRange').value;
    const rating = document.getElementById('rating').value;

    // Get selected amenities from checked checkboxes
    const selectedAmenities = Array.from(document.querySelectorAll('.amenity:checked')).map(checkbox => checkbox.value);

    // Define price ranges as numeric ranges
    let minPrice = 0, maxPrice = Infinity;
    if (priceRange === "0-1000") {
        minPrice = 0; maxPrice = 1000;
    } else if (priceRange === "1000-2000") {
        minPrice = 1000; maxPrice = 2000;
    } else if (priceRange === "2000-3000") {
        minPrice = 2000; maxPrice = 3000;
    } else if (priceRange === "4000-5000") {
        minPrice = 4000; maxPrice = 5000;
    } else if (priceRange === "5000-6000") {
        minPrice = 5000; maxPrice = 6000;
    }

    // Filter hotels based on user inputs
    const filteredHotels = hotels.filter(hotel => {
        const matchesLocation = hotel.location.toLowerCase().includes(location);
        const matchesPrice = hotel.price >= minPrice && hotel.price <= maxPrice;
        const matchesRating = rating === "all" || hotel.rating == rating;
        const matchesAmenities = selectedAmenities.every(amenity => hotel.amenities.includes(amenity));
        return matchesLocation && matchesPrice && matchesRating && matchesAmenities;
    });

    displayHotels(filteredHotels);
}

// Function to display filtered hotels
function displayHotels(hotelList) {
    const hotelListDiv = document.getElementById('hotelList');
    hotelListDiv.innerHTML = '';

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
                <p class="price">Price: ₹${hotel.price}</p>
                <p>Amenities: ${hotel.amenities.join(', ')}</p>
                <!-- Book Now button -->
                <a href="booking.html?hotelId=${hotel.id}" class="book-now-btn">Book Now</a>
            </div>
        `;
        hotelListDiv.innerHTML += hotelCard;
    });
}

// Function to clear filters and reset the hotel list
function clearFilters() {
    document.getElementById('location').value = '';
    document.getElementById('priceRange').value = 'all';
    document.getElementById('rating').value = 'all';
    
    // Uncheck all amenities checkboxes
    document.querySelectorAll('.amenity').forEach(checkbox => checkbox.checked = false);

    document.getElementById('hotelList').innerHTML = '<p>No hotels found. Please search again.</p>';
}

