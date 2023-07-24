import "./App.css";
import Navbar from "./Navbar";
import Body from "./Body";
import { Provider } from "react-redux";
import store from "./store";
import { useEffect, useState } from "react";
import { getPlacesData } from "./api";

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({ lat: 40, lng: -80 });
  const [bounds, setBounds] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);
      getPlacesData(type, bounds?.sw, bounds?.ne).then((data) => {
        setPlaces(data?.filter((da) => da.name && da.num_reviews > 0));
        setIsLoading(false);
      });
    }
  }, [bounds, type]);
  return (
    <>
      <Provider store={store}>
        <Navbar
          setCoordinates={setCoordinates}
          type={type}
          setType={setType}
          places={places}
        />
        <hr
          id="bodyHrId"
          style={{
            opacity: store.getState().isOverlay ? "0.5" : "1",
            pointerEvents: store.getState().isOverlay ? "none" : "auto",
          }}
        ></hr>
        <Body
          places={places}
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          isLoading={isLoading}
          type={type}
          setType={setType}
          coordinates={coordinates}
        />
      </Provider>
    </>
  );
}

export default App;
