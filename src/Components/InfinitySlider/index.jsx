import React from "react";

import "./style.css";

import { makeStyles } from "@material-ui/core";

const InfinitySlider = ({ isSlideSpeedFast = false, images }) => {
  const classes = useStyles();

  return (
    <>
      <div className={`${classes.slid} slid`}>
        <div
          className={`${
            isSlideSpeedFast ? classes.highSpeed : classes.lowSpeed
          } ${isSlideSpeedFast ? "highSpeed" : "lowSpeed"}`}
        >
          {images.map(({ name, image, alt }, index) => {
            return (
              <div
                className={`${classes.sliderImageContainer} sliderImageContainer sliding-img`}
                key={`${name}-${index}`}
              >
                <img
                  src={image}
                  alt={alt}
                  className={`${classes.sliderImage} sliderImage`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default InfinitySlider;

const useStyles = makeStyles((theme) => ({}));
