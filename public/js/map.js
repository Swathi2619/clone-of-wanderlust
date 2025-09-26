 mapboxgl.accessToken = mapToken;

        const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: "mapbox://styles/mapbox/streets-v12",
        center: [79.7400, 15.9129], // starting position [lng, lat].
        zoom: 7 // starting zoom
    });

console.log(coordinates);

const marker  = new mapboxgl.Marker({color: 'red'})
        .setLngLat(listing.geomotry.coordinates)
        .setPopup(
            new mapboxgl.Popup({offset: 25}).setHTML(
                `<h4>${listing.location}</h4><p>Exact Location provided after booking<p>`
            )
        )
        .addTo(map); 