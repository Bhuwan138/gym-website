import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


const gymLocations = [
    {
        name: "Gym World",
        position: { lat: 27.726147, lng: 85.360511 },
        description: "Located in the heart of the city with state-of-the-art equipment.",
    }
];

const containerStyle = {
    width: "100%",
    height: "500px",
    borderRadius: "15px",
};

const center = {
    lat: 27.693979,
    lng: 85.338857,
};

const Locations = () => {
    return (
        <section className="mt-16 px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
                Find Our <span className="text-fuchsia-pink-400">Gym Locations</span>
            </h2>
            <div className="text-mine-shaft-200 mb-6">
                Explore our gyms across the city. Click on the markers to learn more about each location.
            </div>
            <LoadScript googleMapsApiKey={"AIzaSyB-uYx-3U_IOdyM_PY-4uCvw5r2Y3cyGqk"}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={12}
                >
                    {gymLocations.map((gym, index) => (
                        <Marker
                            key={index}
                            position={gym.position}
                            title={gym.name}
                            label={{
                                text: gym.name,
                                color: "#FF0000",
                                fontWeight: "bold",
                            }}
                        />
                    ))}
                </GoogleMap>
            </LoadScript>
        </section>
    );
};

export default Locations;
