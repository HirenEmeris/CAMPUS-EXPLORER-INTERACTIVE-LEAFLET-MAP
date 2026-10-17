# Campus Explorer: Leaflet Tutorial Project

A beginner-friendly project demonstrating an interactive map with Leaflet and OpenStreetMap.

## Project structure

```text
campus_explorer/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── README.md
```

## Run the project

1. Extract the ZIP file.
2. Open the `campus_explorer` folder in VS Code.
3. Open `index.html` in your browser, or use a local development server such as VS Code Live Server.
4. Keep an internet connection active because Leaflet and OpenStreetMap tiles load online.

## Change the location

1. Open `js/script.js`.
2. Find the `selectedLocation` array.
3. Replace the values with your chosen coordinates in this order: `[latitude, longitude]`.
4. Update the popup text inside `.bindPopup(...)`.
5. Save and refresh the page.

In Google Maps, search for a place, right-click the exact point you want to mark, and copy the coordinates shown. Verify that the point is the one you intend to display.

## Troubleshooting

- The map is missing: check that the HTML contains `<div id="map">`.
- The map area is blank/very short: check the `#map` height in `css/styles.css`.
- The console says Leaflet could not be loaded: check the Leaflet script URL and your internet connection.
- Tiles do not load: check your internet connection and browser developer tools.
- The marker is in the wrong place: check that coordinates are in latitude, longitude order.

## References

- Leaflet Quick Start: https://leafletjs.com/examples/quick-start/
- OpenStreetMap copyright: https://www.openstreetmap.org/copyright
- OpenStreetMap tile usage policy: https://operations.osmfoundation.org/policies/tiles/
