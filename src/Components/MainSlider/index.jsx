import React, { memo, useState } from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, makeStyles, Typography } from "@material-ui/core";

import "./style.css";
import { MAIN_SLIDER_DATA } from "../../Configs/MainSlider";

import StructuredNavbar from "../StructuredNavbar";
import ActiveProgress from "./ActiveProgress";

const MainSlider = () => {
  const classes = useStyles();

  const [currentSlideData, setCurrentSlideData] = useState({});
  const [activeSlide, setActiveSlide] = useState(0);

  /**
   * @description Setting up slider data
   *
   * @param {Number} currentSlide
   * @param {Object} Keys
   */
  const setMovieKey = (currentSlide, { key }) => {
    setActiveSlide(key * 10);
    setCurrentSlideData(Object.values(MAIN_SLIDER_DATA)[currentSlide || 0]);
  };

  /**
   * @description Change active slide on click indicators
   *
   * @param {Number} updateSlide
   */
  const setActiveSlider = (updateSlide) => {
    setActiveSlide(updateSlide);
    setCurrentSlideData(Object.values(MAIN_SLIDER_DATA)[updateSlide || 0]);
  };

  const { bg_color = "", heading = "", subtitle = "" } = currentSlideData || {};

  return (
    <>
      <span style={{ position: "relative" }}>
        <Carousel
          onChange={setMovieKey}
          showThumbs={false}
          emulateTouch={true}
          dynamicHeight={true}
          autoPlay={true}
          autoFocus={true}
          showArrows={true}
          infiniteLoop={true}
          stopOnHover={false}
          swipeable={true}
          swipeScrollTolerance={10}
          useKeyboardArrows={true}
          transitionTime="1000"
          interval="6000"
          showStatus={false}
          showIndicators={false}
        >
          <div>
            <img
              src={Object.values(MAIN_SLIDER_DATA)[activeSlide].image}
              alt={Object.values(MAIN_SLIDER_DATA)[activeSlide].title}
              width={"100%"}
              className="image-slider"
            />
          </div>
          <div>
            <img
              src={Object.values(MAIN_SLIDER_DATA)[activeSlide].image}
              alt={Object.values(MAIN_SLIDER_DATA)[activeSlide].title}
              width={"100%"}
              className="image-slider"
            />
          </div>
          <div>
            <img
              src={Object.values(MAIN_SLIDER_DATA)[activeSlide].image}
              alt={Object.values(MAIN_SLIDER_DATA)[activeSlide].title}
              width={"100%"}
              className="image-slider"
            />
          </div>
          <div>
            <img
              src={Object.values(MAIN_SLIDER_DATA)[activeSlide].image}
              alt={Object.values(MAIN_SLIDER_DATA)[activeSlide].title}
              width={"100%"}
              className="image-slider"
            />
          </div>
        </Carousel>

        <StructuredNavbar />

        <Typography
          variant={"body1"}
          className={`${classes.sliderInformationBarTitle} sliderInformationBarTitle`}
        >
          {heading || MAIN_SLIDER_DATA.slider_1.heading}
        </Typography>

        <Box className={`${classes.progressBars} progressBars `}>
          {Object.values(MAIN_SLIDER_DATA).map(({ title = "" }, index) => {
            return (
              <ActiveProgress
                progressName={title}
                progressCount={MAIN_SLIDER_DATA.length}
                key={`${title}-${index}`}
                activeSlide={activeSlide}
                index={index}
                onChangeSlide={setActiveSlider}
              />
            );
          })}
        </Box>

        <Box className={`${classes.infoBlock} infoBlock block`}>
          <Box className={`${classes.informationBar} informationBar`}>
            <Box
              className={`${classes.informationMsgContainer} informationMsgContainer`}
              style={{
                backgroundColor: bg_color || MAIN_SLIDER_DATA.slider_1.bg_color,
              }}
            >
              <Typography
                variant="body1"
                className={`${classes.informationMSG} informationMSG`}
              >
                {subtitle || MAIN_SLIDER_DATA.slider_1.subtitle}
              </Typography>
            </Box>
          </Box>
        </Box>
      </span>
    </>
  );
};

export default memo(MainSlider);

const useStyles = makeStyles((theme) => ({
  informationBar: {
    width: "60%",
    height: "210px",
    position: "absolute",
  },
  informationMsgContainer: {
    width: "100%",
    height: "fit-content",
    color: "#ffffff",
    borderRadius: "0 80px 80px 0",
    background: "rgba(0,0,0,0.8)",
  },
  informationMSG: {
    color: "#ffffff",
    padding: "2%",
  },
  sliderInformationBarTitle: {
    color: "#ffffff",
    textShadow: "2px 2px black",
    position: "absolute",
  },

  progressBars: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
  },
}));
