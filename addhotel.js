// Get form and list elements
const hotelForm = document.getElementById("hotelForm");
const hotelList = document.getElementById("hotels");

// Array to store hotels
let hotels = [];

// Function to display hotels
function displayHotels() {
    hotelList.innerHTML = ""; // Clear current list

    if (hotels.length === 0) {
        hotelList.innerHTML = "<p>No hotels available. Add a new hotel to get started.</p>";
        return;
    }

    hotels.forEach((hotel, index) => {
        const hotelCard = document.createElement("div");
        hotelCard.classList.add("hotel-card");

        hotelCard.innerHTML = `
            <img src="${hotel.image}" alt="${hotel.name}">
            <div class="hotel-info">
                <h4>${hotel.name}</h4>
                <p>Location: ${hotel.location}</p>
                <p>Price: ₹${hotel.price}</p>
                <p>Rating: ${hotel.rating} Stars</p>
                <p>Amenities: ${hotel.amenities}</p>
            </div>
            <button class="delete-btn" onclick="deleteHotel(${index})">Delete</button>
        `;

        hotelList.appendChild(hotelCard);
    });
}

// Function to add a hotel
hotelForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission

    const newHotel = {
        name: document.getElementById("hotelName").value,
        location: document.getElementById("location").value,
        price: parseInt(document.getElementById("price").value, 10),
        rating: parseInt(document.getElementById("rating").value, 10),
        amenities: document.getElementById("amenities").value.split(",").map(item => item.trim()),
        image: document.getElementById("image").value,
    };

    hotels.push(newHotel); // Add hotel to array
    displayHotels(); // Update hotel list
    hotelForm.reset(); // Clear form
});

// Function to delete a hotel
function deleteHotel(index) {
    hotels.splice(index, 1); // Remove hotel from array
    displayHotels(); // Update hotel list
}
