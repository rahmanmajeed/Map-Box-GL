import { RouterProvider } from "react-router-dom";
import { MapProvider } from "./contexts/MapContext";
import router from "./routes";

function App() {
  return (
    <>
      <MapProvider>
        <RouterProvider router={router} />
      </MapProvider>
    </>
  );
}

export default App;
