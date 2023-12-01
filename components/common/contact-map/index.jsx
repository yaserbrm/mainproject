"use client";

// import L from "leaflet";
// import MarkerIcon from "../node_modules/leaflet/dist/images/marker-icon.png";
// import MarkerShadow from "../node_modules/leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";

// _leaflet_events
// 36.55652, 53.03909
function MapContact({ location }) {
  if (typeof window !== "undefined") {

  }
  console.log("location :: ", location);
  const [coord, setCoord] = useState([location.lat, location.lang]);
  

  return (
    <>
    
      <MapContainer
        style={{
          height: "100%",
          width: "100%",
        }}
        center={coord}
        zoom={17}
        scrollWheelZoom={true}
        attributionControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          attributionControl={false}
          //   icon={
          //     new L.Icon({
          //       iconUrl: "=====",
          //       iconRetinaUrl: "=====",
          //       iconSize: [25, 41],
          //       iconAnchor: [12.5, 41],
          //       popupAnchor: [0, -41],
          //       shadowUrl: "=====",
          //       shadowSize: [41, 41],
          //     })
          //   }
          position={[location.lat, location.lang]}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>

    
    </>
  );
}

export default MapContact;
