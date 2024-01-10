async function run(){
    // Get Bus Metadata    
	const locations = await getBusLocations();

    for (i = 0; i < locations.length; i++) {
        console.log(locations[i].attributes.latitude)
        console.log(locations[i].attributes.longitude)

        
        marker = markers.find(marker => marker.id === locations[i].id);
        if (marker === undefined) {
            if (locations[i].attributes.occupancy_status === "MANY_SEATS_AVAILABLE") {
                color = "green";
            } else if (locations[i].attributes.occupancy_status === "FEW_SEATS_AVAILABLE") {
                color = "yellow";
            } else {
                color = "black";
            }
            markers.push({
                id: locations[i].id,
                data: new mapboxgl.Marker({color: color})
                    .setLngLat([locations[i].attributes.longitude,locations[i].attributes.latitude])
                    .addTo(map)
            })

        } else {
            marker.data.setLngLat([locations[i].attributes.longitude,locations[i].attributes.latitude]);
        }

        updateBox = document.getElementById("last-updated");
        updateBox.innerHTML = "Last Updated: " + new Date();
        updateBox.style.top = "3em"
    }

	// Recall the function after a delay
	setTimeout(run, 5000);
}

// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}

markers = [];