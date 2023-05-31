import { Map } from "mapbox-gl";
import { useEffect, useRef, useContext } from "react";
import { generateNewMarker, initMap } from "../utils/initMap";
import {MapContext} from '../contexts/MapContext';
export const useMap = (container: React.RefObject<HTMLDivElement>) => {
  const mapInitRef = useRef<Map | null>(null);
  const mapContext = useContext(MapContext);
  
  useEffect(() => {
    if (container.current) {
        mapInitRef.current = initMap(container.current, [90.395439, 23.78286]);
    }
  }, []);
  useEffect(() => {
    mapInitRef.current && mapInitRef.current.on('dblclick', ({ lngLat }) => generateNewMarker({ map: mapInitRef.current!, ...lngLat }))

    return () => { mapInitRef.current?.off('dblclick', generateNewMarker) }
}, [])


useEffect(() => {
    mapInitRef.current && mapInitRef.current.on('load', () => generateNewMarker({ map: mapInitRef.current!, ...mapInitRef.current!.getCenter() }))

    return () => { mapInitRef.current?.off('load', generateNewMarker) }
}, [])
};
