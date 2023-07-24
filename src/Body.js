import "./App.css";
import { useState, useEffect, createRef } from "react";
import Map from "./GoogleMaps";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import ReactLoading from "react-loading";

export default function Body({
  isOverlay,
  setBounds,
  setCoordinates,
  coordinates,
  places,
  type,
  setType,
  isLoading,
}) {
  const [childClicked, setChildClicked] = useState(null);

  return (
    <div id="mainBodyId">
      <div
        style={{
          display: isOverlay ? "block" : "none",
          pointerEvents: isOverlay ? "auto" : "none",
        }}
        id="searchOverlayId"
      ></div>
      <div className="row">
        <div className="col-sm-4" id="leftSectionId">
          <List
            places={places}
            childClicked={childClicked}
            type={type}
            setType={setType}
            isLoading={isLoading}
          />
        </div>
        <div className="col-sm-8">
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
            type={type}
            setChildClicked={setChildClicked}
          />
        </div>
      </div>
    </div>
  );
}

function ratingToCircles(rating) {
  const numCircles = 5; // Total number of circles for the rating

  // Calculate the number of filled circles
  const filledCircles = Math.floor(rating);

  // Calculate the fraction of the last circle (if rating has decimal)
  const fraction = rating - filledCircles;

  // Generate the circle elements JSX
  const circles = [];
  for (let i = 1; i <= numCircles; i++) {
    if (i <= filledCircles) {
      circles.push(<span key={i} className="circle filled-circle"></span>);
    } else if (i === filledCircles + 1 && fraction > 0) {
      if (fraction >= 0.5) {
        circles.push(<span key={i} className="circle half-circle"></span>);
      } else {
        circles.push(<span key={i} className="circle empty-circle"></span>);
      }
    } else {
      circles.push(<span key={i} className="circle empty-circle"></span>);
    }
  }

  return circles;
}

function List({ places, childClicked, isLoading }) {
  const [elRefs, setElRefs] = useState([]);
  const [distance, setDistance] = useState({ min: 0, max: 20 });
  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());

    setElRefs(refs);
  }, [places]);

  function handleSliderChange(event) {
    setDistance({ min: event[0], max: event[1] });
  }
  return (
    <>
      <div className="row align-items-center mb-2">
        <div className="slider-value col-6 sliderContainer pt-2 pb-2">
          <div className="d-flex">
            <div className="row justify-content-center">
              <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                <span className="sliderDist">Distance</span>
              </div>
              <div className="col-md-6 col-sm-12 ms-md-auto p-0 d-flex justify-content-center align-items-center">
                <span className="sliderKM">
                  {distance.min}km - {distance.max}km
                </span>
              </div>
            </div>
          </div>
          <Slider
            min={0}
            max={20}
            handleStyle={{
              backgroundColor: "#32a0ef",
              width: "5px",
              height: "15px",
              borderRadius: "2px",
              border: "none",
            }}
            railStyle={{
              backgroundColor: "#bce390",
            }}
            trackStyle={{
              backgroundColor: "#00a568",
            }}
            onChange={handleSliderChange}
            range
          />
        </div>
        <div className="col-6">
          <button
            className="ms-auto me-auto d-flex rounded-5 btn btn-sm btn-outline-dark justify-content-center align-items-center"
            id="filterBtnId"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasFilter"
            aria-controls="offcanvasFilter"
          >
            Search Filters
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="loadingDiv">
          <ReactLoading type={"balls"} color={"red"} height={66} width={37} />
        </div>
      ) : (
        <>
          {places
            ?.filter(
              (place) =>
                Number(place?.distance) >= distance.min &&
                Number(place?.distance) <= distance.max
            )
            ?.map((place, i) => {
              return (
                <ListItem
                  refProp={elRefs[i]}
                  loc={place}
                  i={i}
                  selected={Number(childClicked) === i}
                />
              );
            })}
        </>
      )}
    </>
  );
}

function ListItem({ loc, i, selected, refProp }) {
  useEffect(() => {
    if (selected) {
      refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selected, refProp]);
  function handleClick(loc) {
    if (loc.web_url) window.open(loc.web_url, "_blank");
    else if (loc.website) window.open(loc.website, "_blank");
  }
  return (
    <>
      <div
        class="row hoverCard"
        style={{
          cursor: "pointer",
        }}
        onClick={() => handleClick(loc)}
        ref={refProp}
      >
        <div class="col-md-6 m-0 p-0">
          <div class="card">
            <div
              style={{
                overflow: "hidden",
              }}
            >
              <div id="carouselInd" class="carousel slide">
                <div class="carousel-indicators">
                  <button
                    type="button"
                    className={
                      i === 0 ? "carouseltoggles active" : "carouseltoggles"
                    }
                    data-bs-target={`#carouselInd${i}`}
                    data-bs-slide-to={i}
                    aria-current="true"
                    aria-label={"Slide " + i}
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src={
                        loc.photo
                          ? loc.photo.images.large.url
                          : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                      }
                      class="card-img"
                      alt="Card"
                    ></img>
                  </div>
                  {/* <div class="carousel-item">
                              <img
                                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                                class="card-img"
                                alt="Card"
                              ></img>
                            </div>
                            <div class="carousel-item">
                              <img
                                src="https://media.istockphoto.com/id/1184692500/photo/colorful-sunset-at-davis-lake.webp?b=1&s=612x612&w=0&k=20&c=l7rIdWLmqfPGiQ9gFxjgFe3UMoO4ldw0q7p3e03097A="
                                class="card-img"
                                alt="Card"
                              ></img>
                            </div> */}
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target={`#carouselInd${i}`}
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target={`#carouselInd${i}`}
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <span className="awardMain">
              {loc?.awards?.map((award) => (
                <img
                  src={award.images.large}
                  style={{
                    width: "25px",
                    height: "auto",
                  }}
                  alt="award"
                  className="awardImage"
                ></img>
              ))}
            </span>
          </div>
        </div>
        <div class="col-md-6 m-0 p-0">
          <div class="card m-0 p-0">
            <div class="card-body p-0">
              <h5 class="card-title">{i + 1 + ". " + loc["name"]}</h5>
              <p class="card-text rating">
                {ratingToCircles(loc.rating)}
                {loc.num_reviews} reviews
              </p>

              <p class="card-text interestpoints">
                {loc?.subcategory?.map((sub) => sub.name)}
                <a
                  href={`mailto:${loc?.email}`}
                  target="_blank"
                  className="mail"
                  onClick={(e) => e.stopPropagation()}
                  rel="noopener noreferrer"
                >
                  Mail
                </a>
                <a
                  onClick={(e) => e.stopPropagation()}
                  href={`tel:${loc?.phone}`}
                  target="_blank"
                  className="tel"
                  rel="noopener noreferrer"
                >
                  Call
                </a>
              </p>
              <p class="card-text address">{loc?.address && loc.address}</p>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
}
