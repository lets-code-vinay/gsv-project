import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "react-feather";
import { Box, makeStyles, Typography } from "@material-ui/core";

import "slick-carousel/slick/slick.css";
import "./OurClient.css";

import { IMAGES } from "../../Configs/Images";

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
      <Box className={`${classes.clientsTitle} clientsTitle`}>
        <Typography
          variant="h4"
          className={`${classes.ourClientsText} ourClientsText `}
        >
          Our Clients
        </Typography>
      </Box>

      <Slider
        className={`${classes.clientSlider} clientSlider`}
        {...settings}
        style={{ padding: "0 10%" }}
      >
        {IMAGES.map(({ image = "", alt = "" }, index) => {
          return index % 2 !== 0 ? (
            <>
              <img
                src={image}
                className={`${classes.imageToResponsive} imageToResponsive`}
                alt={alt}
              />
            </>
          ) : (
            <>
              <img
                src={image}
                className={`${classes.imageToResponsive} 
                secondimage imageToResponsive bottomImage`}
                alt={alt}
              />
            </>
          );
        })}
      </Slider>
    </Box>
  );
};

export default OurClients;

const useStyles = makeStyles((theme) => ({
  topContainer: {
    backgroundColor: "#F8FBFF",
  },
  hr: {
    width: "100%",
    margin: "1% auto",
  },
  ourClientsText: {
    color: "#0d274d",
    fontWeight: "500",
    width: "fit-content",
    margin: "0 auto",
  },

  clientsTitle: {
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
