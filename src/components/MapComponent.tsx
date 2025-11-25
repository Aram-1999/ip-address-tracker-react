import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

interface MapComponentType {
  lat: number;
  lng: number;
}

export default function MapComponent({ lat, lng }: MapComponentType) {

  return (
    <div className='h-[70%] sm:h-[75%]'>
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        scrollWheelZoom={true}
        className='h-full w-full'
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>
            Your location: <br /> {lat}, {lng}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}