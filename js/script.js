/* ============================================================
   CAMPUS EXPLORER: INTERACTIVE LEAFLET MAP
   ============================================================ */

// Find the HTML element where the map should appear.
const mapElement = document.getElementById("map");

// Only run this code if the current page contains the map element.
if (mapElement) {

    // Check that the Leaflet library loaded successfully.
    if (typeof L === "undefined") { // Leaflet is not defined, meaning it didn't load properly.
        console.error(
            "Leaflet could not be loaded. Check your internet connection and script URL."
        );
    } else { // Leaflet is defined, meaning it loaded successfully.

        // STEP 1: Set the location.
        // Replace these numbers with your chosen latitude and longitude.
        // Leaflet expects [latitude, longitude] in that order.
        const selectedLocation = [
           -29.796535124845885, 
           31.035574880936217
        ];

        // STEP 2: Create the map and choose its starting zoom level.
        // Lower numbers show a wider area; higher numbers zoom in.
        const map = L.map("map").setView(selectedLocation, 14);

        // STEP 3: Add map imagery from OpenStreetMap.
        L.tileLayer(
            "https://tile.openstreetmap.org/{z}/{x}/{y}.png", // This is the URL template for OpenStreetMap tiles.
            {
                maxZoom: 19, // The maximum zoom level for OpenStreetMap tiles.
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' // This is the attribution text that will appear on the map.
            }
        ).addTo(map); // Add the OpenStreetMap tiles to the map.

        // STEP 4: Add a marker and its popup.
        L.marker(selectedLocation) // Create a marker at the selected location.
            .addTo(map) // Add the marker to the map.
            .bindPopup( // Bind a popup to the marker.
                "<strong>Emeris - Durban North Campus</strong><br>" +
                "This is our example location." // The text that will appear in the popup.
            );
    }
}
