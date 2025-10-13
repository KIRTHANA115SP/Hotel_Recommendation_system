// Array of hotels
const hotels = [
    { id: 1, name: "JKInn", location: "Vellore", price: 2000, rating: 3, amenities: ["shared lounge", "WiFi", "mountain view"], image: "JKlnn.jpg",link: "https://www.google.com/maps/search/?q=JKInn,+Vellore" },
    { id: 2, name: "Hotel Golden Gateway", location: "Vellore", price: 1365, rating: 3, amenities: ["WiFi", "spa"], image: "golden gateway.avif",link:"https://maps.app.goo.gl/rjjQypyWgbZCTSkT7" },
    { id: 3, name: "VANTARA SUITEs", location: "Vellore", price: 1650, rating: 3, amenities: ["WiFi", "Parking", "city view"], image: "vantara.avif",link:"https://maps.app.goo.gl/wcicnYa3nwVfBEuk6" },
    { id: 4, name: "ANNAI RESIDENCY", location: "Vellore", price: 2223, rating: 3, amenities: ["WiFi", "breakfast", "garden", "parking"], image: "annai.webp",link:"https://maps.app.goo.gl/CwFybmrrYv6fEHsn9" },
    { id: 5, name: "Regency Sameera Vellore", location: "Vellore", price: 3250, rating: 5, amenities: ["fort view", "WiFi", "Gym"], image: "regency.jpg",link:"https://maps.app.goo.gl/Pi27eyX7BR8ZghuM9" },
    { id: 6, name: "Treebo Kingsbury Fiesta", location: "Vellore", price: 5608, rating: 3, amenities: ["WiFi", "private bathroom", "breakfast"], image: "kingsbury.jpg",link:"https://maps.app.goo.gl/hgrM8Ec85K99GAHd8" },
    { id: 7, name: "Kanna Fiesta", location: "Vellore", price: 3400, rating: 4, amenities: ["shared lounge", "WiFi", "on-site bar", "free parking"], image: "khanna.jpg",link:"https://maps.app.goo.gl/XgzBsqAeC8iNxJwM9" },
    { id: 8, name: "GRAND GANPAT", location: "Vellore", price: 1635, rating: 3, amenities: ["WiFi", "parking"], image: "grand ganpat.jpg",link:"https://maps.app.goo.gl/XUqMYVc6Q8hiMmge7" },
    { id: 9, name: "Aloka Stay", location: "Vellore", price: 1700, rating: 3, amenities: ["WiFi", "Parking", "breakfast"], image: "aloka stay.jpg",link:"https://www.google.com/travel/hotels/s/Fc2EkmqgewTYFcf58" },
    { id: 10, name: "Benzz Park Vellore", location: "Vellore", price: 4700, rating: 5, amenities: ["WiFi", "pool", "rooftop", "Breakfast", "airport transfer", "gym", "shuttle service"], image: "benzz.jpg",link:"https://maps.app.goo.gl/UCR7qrfEhhPLdJWF7" },
    { id: 11, name: "FabHotel", location: "Vellore", price: 1314, rating: 3, amenities: ["WiFi"], image: "fabhotel.jpg",link:"https://maps.app.goo.gl/rHro2a5q7yPn9SDH7" },
    { id: 12, name: "Hotel Essence", location: "Vellore", price: 3010, rating: 4, amenities: ["WiFi", "coffee shop", "parking", "gym", "restaurants"], image: "essence.jpg" ,link:"https://maps.app.goo.gl/C1iYANLipQ7icBKK9"},
    { id: 13, name: "Zip", location: "Vellore", price: 2343, rating: 4, amenities: ["park", "WiFi", "shuttle service", "free parking"], image: "zip.jpg",link:"https://maps.app.goo.gl/2doZ98GspoytaCwx5" },
    { id: 14, name: "Nannilam Organic Farmstay", location: "Vellore", price: 4650, rating: 4, amenities: ["WiFi", "parking", "pool", "gym"], image: "nann.jpeg",link:"https://maps.app.goo.gl/2f2kkcfHSWjNLXjP9" },
    { id: 15, name: "Park Inn", location: "Vellore", price: 3729, rating: 3, amenities: ["WiFi", "gaming centre", "breakfast", "couple spots"], image: "park inn.jpg",link:"https://maps.app.goo.gl/1Mw7KE6WqGVddteVA" },
    { id: 16, name: "Fortune Park", location: "Vellore", price: 5100, rating: 4, amenities: ["WiFi", "Breakfast", "pool", "parking", "sky dining", "city view"], image: "fortune.jpg",link:"https://maps.app.goo.gl/1w7Z1zmVfhhV5kqQ6" },
    { id: 17, name: "Golden Gateway", location: "Vellore", price: 2700, rating: 5, amenities: ["Pool", "WiFi", "Gym"], image: "golden.jpg",link:"https://maps.app.goo.gl/55BLvz524QNo66RX9" },
    { id: 18, name: "Murugan Residency", location: "Vellore", price: 1872, rating: 3, amenities: ["WiFi"], image: "murugan.jpg",link:"https://maps.app.goo.gl/gwsovthizeGqKnum7" },
    { id: 19, name: "Chandra Royal Residency", location: "Vellore", price: 701, rating: 2, amenities: ["WiFi", "AC", "Laundry"], image: "chandra.jpg",link:"https://maps.app.goo.gl/TjzDQJd7L3GSgrd96" },
    { id: 20, name: "BKS Residency", location: "Vellore", price: 784, rating: 3, amenities: ["AC", "WiFi", "Parking", "Laundry"], image: "bk.avif",link:"https://maps.app.goo.gl/XG1VvgKWtz1tGZ8Y7" },
    { id: 21, name: "Sri Krishan Residency", location: "Vellore", price: 806, rating: 3, amenities: ["WiFi", "Parking", "Laundry"], image: "sri.jpg",link:"https://maps.app.goo.gl/56LRuDMCrW7YHsxC9" },
    { id: 22, name: "Sankar Lingam Residency", location: "Vellore", price: 874, rating: 3, amenities: ["Pool", "WiFi", "Laundry"], image: "sankar.jpeg",link:"https://maps.app.goo.gl/SkRw1xbRUS4KbHHbA" },
    { id: 23, name: "GR Mansion", location: "Vellore", price: 548, rating: 3, amenities: ["WiFi", "free breakfast"], image: "gr.avif",link: "https://maps.app.goo.gl/NnFjhKMvxSVyMiKj6" }
];

// Function to display hotel data
function displayHotels() {
    const hotelListContainer = document.getElementById('hotel-list');
    hotels.forEach(hotel => {
        const hotelElement = document.createElement('div');
        hotelElement.classList.add('hotel');
        hotelElement.innerHTML = `
            <img src="${hotel.image}" alt="${hotel.name}" />
            <h2>${hotel.name}</h2>
            <p><strong>Location:</strong> ${hotel.location}</p>
            <p><strong>Price:</strong> ₹${hotel.price}</p>
            <p><strong>Rating:</strong> ${hotel.rating} ★</p>
            <p><strong>Amenities:</strong> ${hotel.amenities.join(', ')}</p>
            <a href="${hotel.link}" target="_blank" class="btn btn-map">View on Map</a>
        `;
        hotelListContainer.appendChild(hotelElement);
    });
}

function viewDetails(hotelId) {
    alert("View details for hotel ID: " + hotelId);
}

function addHotel() {
    const name = prompt("Enter hotel name:");
    const location = prompt("Enter hotel location:");
    const price = parseFloat(prompt("Enter hotel price:"));
    const rating = parseInt(prompt("Enter hotel rating (1-5):"));
    const amenities = prompt("Enter hotel amenities (comma-separated):").split(",");
    const image = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 100)}`;

    if (name && location && price && !isNaN(price) && rating >= 1 && rating <= 5 && amenities.length > 0) {
        const newHotel = {
            id: hotels.length + 1,
            name,
            location,
            price,
            rating,
            amenities: amenities.map(amenity => amenity.trim()),  // Trim each amenity
            image,
        };
        hotels.push(newHotel); // Add the new hotel to the array
        displayHotels(); // Re-render the list
    } else {
        alert("Please enter valid details for the hotel.");
    }
}

// Function to delete a hotel (removes the last hotel in the list)
// Function to delete a hotel based on its name
function deleteHotel() {
    const hotelName = prompt("Enter the name of the hotel to delete:");

    if (hotelName) {
        // Find the index of the hotel by matching the name (case-insensitive)
        const index = hotels.findIndex(hotel => hotel.name.toLowerCase() === hotelName.toLowerCase());

        // If hotel is found, remove it
        if (index !== -1) {
            hotels.splice(index, 1); // Remove the hotel from the array using the index
            displayHotels(); // Re-render the list to reflect the changes
        } else {
            alert("Hotel not found. Please check the name and try again.");
        }
    } else {
        alert("Please enter a valid hotel name.");
    }
}


// Event listeners for the buttons
document.getElementById('add-hotel-btn').addEventListener('click', addHotel);
document.getElementById('delete-hotel-btn').addEventListener('click', deleteHotel);

// Call function to display hotels when page loads
window.onload = displayHotels;