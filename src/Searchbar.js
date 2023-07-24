import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOverlay } from "./store";
import { Autocomplete } from "@react-google-maps/api";

export default function Searchbar({ setCoordinates }) {
  const [searchQuery, setSearchQuery] = useState("");
  const isOverlay = useSelector((state) => state.isOverlay);
  const dispatch = useDispatch();
  function handleInput(event) {
    setSearchQuery(event.target.value);
  }
  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (autoC) => setAutocomplete(autoC);
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };
  return (
    <>
      <ul
        className="navbar-nav ms-auto me-auto mb-2 mb-lg-0"
        id="searchFieldContainerId"
      >
        <li
          className="nav-item position-relative mt-auto mb-auto"
          id="searchFieldSubContainerId"
        >
          <form
            className="d-flex position-relative"
            role="search"
            id="searchFieldFormId"
          >
            <div className="autocomplete-container">
              <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <input
                  className="searchInput"
                  placeholder="Where to?"
                  id="searchFieldId"
                  onFocus={() => {
                    dispatch(setOverlay(!isOverlay));
                  }}
                  onBlur={() => {
                    dispatch(setOverlay(!isOverlay));
                  }}
                  onChange={handleInput}
                />
              </Autocomplete>
            </div>
          </form>
        </li>
      </ul>
    </>
  );
}
