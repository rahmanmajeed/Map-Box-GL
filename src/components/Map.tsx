import { Map } from "mapbox-gl";
import { useEffect, useRef, useState } from "react";

export default function MapBox() {
  const mapRef = useRef<HTMLDivElement>(null);
  const areaRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(true);
  const lang = 90.395439;
  const lat = 23.78286;
  const [mapObject, setMap] = useState();

  // console.log('KEY:', import.meta.env.VITE_MAP_TOKEN)
  // console.log(e.target.dataset.place);

  useEffect(() => {
    const map = new Map({
      container: mapRef.current || "",
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lang, lat],
      accessToken: import.meta.env.VITE_MAP_TOKEN,
      zoom: 12.5,
    });

    setMap(map);

    // map.setCenter([lang, lat]);

    // return map.remove();
  }, []);
  function setMapCenter(coords: number[]) {
    if (mapObject) {
      mapObject.setCenter(coords);
      mapObject.setZoom(15);
    }
  }
  function closeNav(event: MouseEvent): void {
    event.stopPropagation();
    if (areaRef.current) {
      areaRef.current.style.width = "1px";
    }
  }
  function toggleAreaList(event: MouseEvent): void {
    event.stopPropagation();
    if (areaRef.current && isOpen) {
      areaRef.current.style.width = "1px";
      setIsOpen(false);
    } else if (areaRef.current && !isOpen) {
      areaRef.current.style.width = "20%";
      setIsOpen(true);
    }
  }

  return (
    <>
      <div id="mySidenav" className="sidenav" ref={areaRef}>
        <a
          href="javascript:void(0)"
          className="btn-toggle"
          onClick={toggleAreaList}
        >
          {isOpen ? <>&#x2716;</> : <>&#x2771;</>}
        </a>
        <div className="list-box">
          <a onClick={() => setMapCenter([90.4203, 23.9999])}>Gazipur</a>
          <a onClick={() => setMapCenter([90.395439, 23.78286])}>Mohakhali</a>
          <a onClick={() => setMapCenter([91.7832, 22.3569])}>Chittagong</a>
          <a onClick={() => setMapCenter([91.3976, 23.0159])}>Feni</a>
          <a onClick={() => setMapCenter([91.8687, 24.8949])}>Sylhet</a>
        </div>
      </div>

      <div ref={mapRef} className="map-container" />
    </>
  );
}
