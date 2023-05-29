import { useContext } from "react";
import { MapContext } from "../../contexts/MapContext";

export default function Header() {
  const {store} = useContext(MapContext);
  console.log(store)
  return (
    <>
      <header>
        <p className="logo-title">satellite</p>
        <div>language</div>
      </header>
    </>
  );
}
