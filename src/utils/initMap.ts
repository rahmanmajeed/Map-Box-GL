import { Map } from 'mapbox-gl';

const  MAP_KEY  = "pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g";


export const initMap = (container: HTMLDivElement, coords: [number, number]) => {
    
    const map = new Map({
        container,
        style: 'mapbox://styles/mapbox/streets-v9',
        pitchWithRotate: false,
        center: coords,
        zoom: 15,
        accessToken: MAP_KEY,
        doubleClickZoom: false
    });
    return map
}