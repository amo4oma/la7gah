// Initialize the map
var map = L.map('map').setView([0, 0], 2); // Centered at [0, 0] with zoom level 2

// Add a tile layer (OpenStreetMap as an example)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

var markers = [];

// Add click event listener to the map
map.on('click', function(e) {
    var marker = L.marker(e.latlng).addTo(map);
    markers.push(marker);

    if (markers.length === 2) {
        var latlng1 = markers[0].getLatLng();
        var latlng2 = markers[1].getLatLng();

        var distance = latlng1.distanceTo(latlng2) / 1000; // Convert to kilometers
        // alert('Distance between markers: ' + distance.toFixed(2) + ' km');
        document.querySelector('#distance').innerHTML = 'Distance between markers: ' + distance.toFixed(2) + ' km'
        // Clear markers
        markers.forEach(function(marker) {
            map.removeLayer(marker);
        });
        markers = [];
    }
});