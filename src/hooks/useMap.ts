import { Map } from "mapbox-gl";
import { useEffect, useRef } from "react";
import { initMap } from "../utils/initMap";

export const useMap = (container: React.RefObject<HTMLDivElement>) => {
  const mapInitRef = useRef<Map | null>(null);
  useEffect(() => {
    if (container.current) {
        mapInitRef.current = initMap(container.current, [90.395439, 23.78286]);
    //   console.log(container.current)
    }
  }, []);
};
