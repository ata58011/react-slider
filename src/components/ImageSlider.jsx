import React, { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentindex, setcurrentindex] = useState(0);
  const sliderStyles = {
    height: "100%",
    position: "relative",
  };
  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentindex].url})`,
  };
  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    left: "0px",
    fontSize: "45px",
    color: "#fff",
    zIndex: "1",
    cursor: "pointer",
  };
  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    right: "0px",
    fontSize: "45px",
    color: "#fff",
    zIndex: "1",
    cursor: "pointer",
  };
  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };
  const dotStyles = {
    cursor: "pointer",
    margin: "0 3px",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentindex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentindex - 1;
    setcurrentindex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentindex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentindex + 1;
    setcurrentindex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setcurrentindex(slideIndex);
  };
  return (
    <>
      <div style={sliderStyles}>
        <div style={leftArrowStyles} onClick={goToPrevious}>
          <i className="bi bi-caret-left-fill"></i>
        </div>
        <div style={rightArrowStyles} onClick={goToNext}>
          <i className="bi bi-caret-right-fill"></i>
        </div>
        <div style={slideStyles}></div>
        <div style={dotsContainerStyles}>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              style={dotStyles}
              onClick={() => goToSlide(slideIndex)}
            >
              <i className="bi bi-dot" style={{ fontSize: "40px" }}></i>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
