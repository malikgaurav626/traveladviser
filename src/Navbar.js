import "./App.css";
import Searchbar from "./Searchbar";
import { useSelector } from "react-redux";

export default function Navbar({ setCoordinates, setType, type, places }) {
  const isOverlay = useSelector((state) => state.isOverlay);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleDateChange(event) {}

  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid">
          <span class="navbar-brand d-md-none">TraveLG</span>
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarId"
            aria-controls="navbarId"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              opacity: isOverlay ? "0.5" : "1",
              pointerEvents: isOverlay ? "none" : "auto",
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse align-items-center"
            id="navbarId"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                className="nav-item d-flex justify-content-center align-items-center"
                style={{
                  opacity: isOverlay ? "0.5" : "1",
                  pointerEvents: isOverlay ? "none" : "auto",
                }}
              >
                <button
                  className="d-flex btn btn-sm ps-2 pe-3 pt-1 pb-1 btn-outline-dark justify-content-center align-items-center"
                  id="dateBtnId"
                  disabled={"true"}
                  onClick={handleDateChange}
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasDate"
                  aria-controls="offcanvasDate"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/calendar.png`}
                    alt="enter Dates"
                    id="dateImgId"
                  ></img>
                  <span>Enter dates</span>
                </button>
              </li>
            </ul>

            <Searchbar setCoordinates={setCoordinates} />

            <ul
              className="navbar-nav ms-auto"
              style={{
                opacity: isOverlay ? "0.5" : "1",
                pointerEvents: isOverlay ? "none" : "auto",
              }}
            >
              <li className="nav-item dropdown ms-2 me-2 mt-2 mb-2 text-center">
                <button
                  className="btn dropdown-toggle btn-sm btn-outline-dark rounded-5"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="attractionBtnId"
                >
                  Attractions
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  {places
                    ?.filter((place, i) => i < 3 && place)
                    .map((place) => (
                      <li>
                        <a
                          className="dropdown-item attractionDropdown"
                          href={`mailto:${place?.email}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {place.name}
                        </a>
                      </li>
                    ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasDate"
        aria-labelledby="offcanvasDateLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDateLabel">
            Offcanvas
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <form onSubmit={handleSubmit}>
            <input type="date" placeholder="CheckIn Date"></input>
            <input type="date" placeholder="CheckOut Date"></input>
          </form>
        </div>
      </div>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasFilter"
        aria-labelledby="offcanvasFilterLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title text-white" id="offcanvasFilterLabel">
            Filters
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option selected>Apply Filters</option>
            <option value="hotels">hotels</option>
            <option value="restaurants">restaurants</option>
            <option value="attractions">attractions</option>
          </select>
        </div>
      </div>
    </>
  );
}
