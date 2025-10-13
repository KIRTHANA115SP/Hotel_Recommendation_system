function calculateDistance() {
    const originInput = document.getElementById('origin').value;
    const destinationInput = document.getElementById('destination').value;

    if (!originInput || !destinationInput) {
        alert('Please enter both origin and destination.');
        return;
    }

    // Create a DistanceMatrixService instance
    const service = new google.maps.DistanceMatrixService();

    // Set up request
    const request = {
        origins: [originInput],
        destinations: [destinationInput],
        travelMode: google.maps.TravelMode.DRIVING, // Can change to WALKING, BICYCLING, TRANSIT
        unitSystem: google.maps.UnitSystem.METRIC, // Can change to IMPERIAL for miles
    };

    // Make request
    service.getDistanceMatrix(request, (response, status) => {
        if (status !== google.maps.DistanceMatrixStatus.OK) {
            alert('Error with distance calculation: ' + status);
            return;
        }

        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = ''; // Clear previous results

        const result = response.rows[0].elements[0];
        if (result.status === 'OK') {
            const distance = result.distance.text;
            const duration = result.duration.text;

            outputDiv.innerHTML = `
                <p>Distance: ${distance}</p>
                <p>Duration: ${duration}</p>
            `;
        } else {
            outputDiv.innerHTML = `<p>Distance calculation failed. Status: ${result.status}</p>`;
        }
    });
}
