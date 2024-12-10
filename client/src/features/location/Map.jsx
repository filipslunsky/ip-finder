import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useSelector } from 'react-redux';
import markerIcon from '../../assets/img/icon-location.svg';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import './map.css';

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Map = () => {
  const status = useSelector((state) => state.location.status);
  const data = useSelector((state) => state.location.apiResponse);

  if (status === 'idle' || status === 'loading') {
    return;
  }
  if (!data.lat || !data.lon) {
    return <p>Map unavailable</p>;
  }

  const position = [data.lat, data.lon];

  return (
    <>
      <div className="mainMapContainer">
        <MapContainer center={position} zoom={13} style={{ height: '100vh', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={customIcon}>
            <Popup>Right here</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default Map;

