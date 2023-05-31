import { useContext } from "react";
import { MapContext } from "../../contexts/MapContext";

export default function Header() {
  const {store} = useContext(MapContext);
  console.log(store)
  return (
    <>
      <header>
        <p className="logo-title">satellite</p>
        <div className="select-box">
          <select name="" id="">
            <option value="en">English</option>
            <option value="en">Bangla</option>
          </select>
        </div>
      </header>
    </>
  );
}
