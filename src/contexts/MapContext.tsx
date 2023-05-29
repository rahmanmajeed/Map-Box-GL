import { createContext, useReducer } from "react";
type Props = {
  children: string | JSX.Element;
};
const MapContext = createContext({});

const initialState = {
  app_title: "Sar Map",
};
const MapProvider = ({ children }: Props) => {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <MapContext.Provider value={{ store, dispatch }}>
      {children}
    </MapContext.Provider>
  );
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "start":
      return { ...state };

    default:
      return state;
  }
};

export { MapProvider, MapContext };
