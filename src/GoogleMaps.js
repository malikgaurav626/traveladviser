import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import customRestaurantIcon from "./restaurant.png";
import customHotelIcon from "./hotel.png";
import customActivityIcon from "./play.png";
import customThingsIcon from "./things.png";
// import customVacationIcon from "./vacation.png";

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
  type,
}) => {
  const iconStyle = {
    width: "30px",
    height: "auto",
  };
  const [iconStyles, setIconStyles] = useState([]);
  coordinates = coordinates || { lat: 0, lng: 0 };
  return (
    <div
      style={{
        width: "100%",
        height: "77vh",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_G_API }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        // margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          clickableIcons: true,
          fullscreenControls: true,
          styles: [
            {
              featureType: "administrative",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#444444",
                },
              ],
            },
            {
              featureType: "landscape",
              elementType: "all",
              stylers: [
                {
                  color: "#f2f2f2",
                },
              ],
            },
            {
              featureType: "landscape.man_made",
              elementType: "geometry.fill",
              stylers: [
                {
                  gamma: "2.00",
                },
                {
                  color: "#c6c6c6",
                },
              ],
            },
            {
              featureType: "poi",
              elementType: "all",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "poi.park",
              elementType: "geometry.fill",
              stylers: [
                {
                  visibility: "on",
                },
                {
                  color: "#466149",
                },
                {
                  lightness: "-5",
                },
                {
                  gamma: "5.00",
                },
                {
                  weight: "0.01",
                },
              ],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text",
              stylers: [
                {
                  visibility: "on",
                },
                {
                  saturation: "-1",
                },
                {
                  color: "#000000",
                },
                {
                  gamma: "5.00",
                },
                {
                  weight: "0.01",
                },
              ],
            },
            {
              featureType: "poi.school",
              elementType: "geometry.fill",
              stylers: [
                {
                  visibility: "on",
                },
                {
                  color: "#d38f8f",
                },
              ],
            },
            {
              featureType: "poi.school",
              elementType: "labels.icon",
              stylers: [
                {
                  color: "#131212",
                },
              ],
            },
            {
              featureType: "road",
              elementType: "all",
              stylers: [
                {
                  saturation: -100,
                },
                {
                  lightness: 45,
                },
              ],
            },
            {
              featureType: "road.highway",
              elementType: "all",
              stylers: [
                {
                  visibility: "simplified",
                },
              ],
            },
            {
              featureType: "road.arterial",
              elementType: "geometry.fill",
              stylers: [
                {
                  visibility: "on",
                },
                {
                  color: "#4a4161",
                },
                {
                  gamma: "2.00",
                },
                {
                  lightness: "4",
                },
              ],
            },
            {
              featureType: "road.arterial",
              elementType: "geometry.stroke",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "road.arterial",
              elementType: "labels.text",
              stylers: [
                {
                  visibility: "on",
                },
                {
                  color: "#010101",
                },
                {
                  gamma: "1.85",
                },
                {
                  lightness: "11",
                },
                {
                  saturation: "11",
                },
                {
                  weight: "0.01",
                },
              ],
            },
            {
              featureType: "road.arterial",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "road.local",
              elementType: "geometry.fill",
              stylers: [
                {
                  visibility: "on",
                },
                {
                  color: "#b5a8be",
                },
              ],
            },
            {
              featureType: "road.local",
              elementType: "geometry.stroke",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "road.local",
              elementType: "labels.text.fill",
              stylers: [
                {
                  visibility: "on",
                },
                {
                  color: "#000000",
                },
                {
                  weight: "0.01",
                },
                {
                  gamma: "0.00",
                },
                {
                  lightness: "-100",
                },
              ],
            },
            {
              featureType: "road.local",
              elementType: "labels.text.stroke",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "transit",
              elementType: "all",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "transit",
              elementType: "geometry.fill",
              stylers: [
                {
                  visibility: "on",
                },
              ],
            },
            {
              featureType: "water",
              elementType: "all",
              stylers: [
                {
                  color: "#3d6576",
                },
                {
                  visibility: "on",
                },
              ],
            },
          ],
        }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => {
          setChildClicked(child);
        }}
        onChildMouseEnter={(i) => {
          // Create a copy of the iconStyles array and update the style for the specific icon
          const updatedIconStyles = [...iconStyles];
          updatedIconStyles[i] = {
            width: "34px",
            height: "auto",
          };
          setIconStyles(updatedIconStyles);
        }}
        onChildMouseLeave={(i) => {
          // Reset the style for the specific icon when not hovered
          const updatedIconStyles = [...iconStyles];
          updatedIconStyles[i] = null;
          setIconStyles(updatedIconStyles);
        }}
      >
        {places?.map((place, i) => (
          <div
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            <img
              src={
                type === "restaurants"
                  ? customRestaurantIcon
                  : type === "hotels"
                  ? customHotelIcon
                  : type === "attractions"
                  ? customActivityIcon
                  : customThingsIcon
              }
              style={iconStyles[i] || iconStyle}
              alt={type}
            />
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
