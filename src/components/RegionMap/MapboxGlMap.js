import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'


const styles = {
    width: "100%",
    height: "calc(60vh - 80px)",
    marginTop: "2vw",
    marginBottom: "2vw"
    // position: "absolute"
};

const data = [
    {
        "eruid": "5910",
		"region": "Vancouver Island & Coast",
		"province": "British Columbia",
		"coordinates": [-125.4494,49.6506],
    },
    {
        "eruid": "5920",
		"region": "Lower Mainland Southwest",
		"province": "British Columbia",
		"coordinates": [-122.6604,49.1042],
    },
    {
        "eruid": "5930",
		"region": "Thompson Okanagan",
		"province": "British Columbia",
		"coordinates": [-119.4302,49.4452],
    },
    {
        "eruid": "5940",
		"region": "Kootenay",
		"province": "British Columbia",
		"coordinates": [-117.5237,49.8685],
    },
    {
        "eruid": "5950",
		"region": "Cariboo",
		"province": "British Columbia",
		"coordinates": [-125.4494,49.6506],
    },
    {
        "eruid": "5960",
		"region": "North Coast",
		"province": "British Columbia",
		"coordinates": [-132.2847,53.1053],
    },
    {
        "eruid": "5970",
		"region": "Nechako",
		"province": "British Columbia",
		"coordinates": [-122.714722,53.917222],
    },
    {
        "eruid": "5980",
		"region": "Northeast",
		"province": "British Columbia",
		"coordinates": [-122.6972,58.8050],
    },

]

const MapboxGLMap = () => {
    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken = 
        "pk.eyJ1IjoibWJjaHJpc3RpYW5zb24iLCJhIjoiY2ttdjR2cWIwMDFucDMwazM5ZmI3N2x6NSJ9.kj89Gr3mS3ONFYL3nTPl0w";
        const initializeMap = ({ setMap, mapContainer }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mbchristianson/ckmv8g5x109vt17su6obqz5is",
                center: [-123.1, 49.3],
                zoom: 10
            });

            data.forEach((location) => {
                console.log(location)
                var marker = new mapboxgl.Marker()
                    .setLngLat(location.coordinates)
                    .setPopup(new mapboxgl.Popup({ offset: 30 })
                    .setHTML('<h4>' + location.region + '</h4>' + 'Eruid: ' + location.eruid))
                    .addTo(map);
            })

            map.on("load", () => {
                setMap(map);
                map.resize();
            });

            // map.addSource("NRCan", {
            //     type: "geojson",
            //     data: "https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/nhsl_en/MapServer/0query?f=pgeojson&where=1=1"
            // });
            // console.log("NRCan")

            // map.addLayer({

            // })
        };
        if (!map) initializeMap({ setMap, mapContainer });
    }, [map]);
    return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default MapboxGLMap