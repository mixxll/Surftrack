const options = {

                // Required: API key
                key: 'xPVx6s5HBWuWF2sjI78dnkjbnNFAaXNK',

                // Put additional console output
                verbose: true,

                // Optional: Initial state of the map
                lat: -41.291240, 
                lon: 174.786464,
                zoom: 10,
        }

    // Initialize Windy API
    windyInit( options, windyAPI => {
        // windyAPI is ready, and contain 'map', 'store',
        // 'picker' and other usefull stuff

        const { map } = windyAPI
        // .map is instance of Leaflet map

        L.popup()
            .setLatLng([-41.291240, 174.786464])
            .setContent("SURF!!!!!!!!!!!!!!!!!!!!!!!")
            .openOn( map );

})