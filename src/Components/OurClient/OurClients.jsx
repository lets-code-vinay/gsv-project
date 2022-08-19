import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "react-feather";
import { Box, makeStyles, Typography } from "@material-ui/core";

import "slick-carousel/slick/slick.css";
import "./OurClient.css";

import IBM from "../../Assets/ibm.png";
import Granitize from "../../Assets/Granitize.png";
import TouchBase from "../../Assets/touchBase.png";
import TechBserver from "../../Assets/techBserver.png";
import BestWestern from "../../Assets/bestWestern.png";
import EljayEngineering from "../../Assets/eljayEngineering.png";
import AirportAuthority from "../../Assets/airportAuthority.png";

const OurClients = () => {
  const classes = useStyles();

  const settings = {
    className: "center",
    centerMode: !true,
    infinite: true,
    centerPadding: "5%",
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    nextArrow: <ChevronRight />,
    prevArrow: <ChevronLeft />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: !true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: !true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      //  needs this code for responsive in future-------
      {
        breakpoint: 420,
        settings: {
          className: "upto420",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box className={`${classes.topContainer} container topContainer`}>
      <Box className={`${classes.ourClientsTitle} ourClientsTitle`}>
        <Typography
          variant="h4"
          className={`${classes.ourClientsText} ourClientsText `}
        >
          Our Clients
        </Typography>
      </Box>
      <hr className={`${classes.hr} hr`} />

      <Slider
        className={`${classes.clientSlider} clientSlider`}
        {...settings}
        style={{ padding: "0 10%" }}
      >
        <Box className={`${classes.imageBlock} firstImage imageBlock`}>
          <img
            src={Granitize}
            className={`${classes.imageToResponsive} firstImage imageToResponsive`}
            alt="Granitize"
          />
          <img
            src={AirportAuthority}
            className={`${classes.imageToResponsive} secondimage imageToResponsive bottomImage`}
            alt="AirportAuthority"
          />
        </Box>
        <Box className="secondImage"></Box>
        <Box className={`${classes.imageBlock} thirdImage imageBlock`}>
          <img
            src={TouchBase}
            className={`${classes.imageToResponsive} thirdimage imageToResponsive`}
            alt="TouchBase"
          />
          <img
            src={EljayEngineering}
            className={`${classes.imageToResponsive} fourthimage imageToResponsive bottomImage`}
            alt="EljayEngineering"
          />
        </Box>

        <Box className="fourthImage imageStyle"></Box>

        <Box className={`${classes.imageBlock} fifthImage imageBlock`}>
          <img
            src={BestWestern}
            className={`${classes.imageToResponsive} fifthimage imageToResponsive`}
            alt="BestWestern"
          />
          <img
            src={IBM}
            className={`${classes.imageToResponsive} sixthimage imageToResponsive bottomImage`}
            alt="IBM"
          />
        </Box>

        <Box className="sixthImage imageStyle"></Box>

        <Box className={`${classes.imageBlock} sevenImage imageBlock`}>
          <img
            src={IBM}
            className={`${classes.imageToResponsive} sevenimage imageToResponsive`}
            alt="IBM"
          />
          <img
            src={TechBserver}
            className={`${classes.imageToResponsive} eightimage imageToResponsive bottomImage`}
            alt="TechBserver"
          />
        </Box>

        <Box className="eightImage"></Box>

        <Box className={`${classes.imageBlock} firstImage imageBlock`}>
          <img
            src={Granitize}
            className={`${classes.imageToResponsive} firstimage imageToResponsive`}
            alt="Granitize"
          />
          <img
            src={AirportAuthority}
            className={`${classes.imageToResponsive} secondimage imageToResponsive bottomImage`}
            alt="AirportAuthority"
          />
        </Box>

        <Box className="secondImage"></Box>

        <Box className={`${classes.imageBlock} thirdImage imageBlock`}>
          <img
            src={TouchBase}
            className={`${classes.imageToResponsive} thirdimage imageToResponsive`}
            alt="TouchBase"
          />
          <img
            src={EljayEngineering}
            className={`${classes.imageToResponsive} fourthimage imageToResponsive bottomImage`}
            alt="EljayEngineering"
          />
        </Box>

        <Box className="fourthImage imageStyle"></Box>

        <Box className={`${classes.imageBlock} fifthImage imageBlock`}>
          <img
            src={BestWestern}
            className={`${classes.imageToResponsive} fifthimage imageToResponsive`}
            alt="BestWestern"
          />
          <img
            src={IBM}
            className={`${classes.imageToResponsive} sixthimage imageToResponsive bottomImage`}
            alt="IBM"
          />
        </Box>

        <Box className="sixthImage imageStyle"></Box>

        <Box className={`${classes.imageBlock} sevenImage imageBlock`}>
          <img
            src={IBM}
            className={`${classes.imageToResponsive} sevenimage imageToResponsive`}
            alt="IBM"
          />
          <img
            src={TechBserver}
            className={`${classes.imageToResponsive} eightimage imageToResponsive bottomImage`}
            alt="TechBserver"
          />
        </Box>

        <Box className="eightImage"></Box>
      </Slider>
    </Box>
  );
};

export default OurClients;

const useStyles = makeStyles((theme) => ({
  topContainer: {
    width: "80%",
    margin: "5% auto 0%",
  },
  hr: {
    width: "100%",
    margin: "1% auto",
  },
  ourClientsText: {
    color: "#0d274d",
    fontWeight: "500",
  },

  ourClientsTitle: {
    display: "flex",
    flexDirection: "row",
    padding: "2% 0 0 0",
    alignItems: "center",
    color: "#0d274d",
    width: "90%",
    margin: "1% auto",
  },

  imageToResponsive: {
    display: "block",
    width: "170px",
    margin: "24% auto",
    height: "75px",
  },
}));
