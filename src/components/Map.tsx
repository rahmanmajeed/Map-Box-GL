import { useRef } from "react";
import { useMap } from "../hooks/useMap";

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);

  useMap(mapRef);
  // console.log('KEY:', import.meta.env.VITE_MAP_TOKEN)
  return (
    <>
      <div ref={mapRef} className="map-container" />
    </>
  );
}
