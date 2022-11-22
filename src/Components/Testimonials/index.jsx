import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "react-feather";
import { Box, makeStyles, Typography } from "@material-ui/core";

import "./style.css";
import "slick-carousel/slick/slick.css";

import { TESTIMONIAL_CARD_DATA } from "../../Configs/Testimonials";
import { responsive_client, responsive_slider } from "./configs";

const Testimonials = () => {
  const [testimonialArr] = useState(Object.values(TESTIMONIAL_CARD_DATA));

  const classes = useStyles();

  const [activeSlide, setActiveSlide] = useState(0);
  const [testimonialClient, setTestimonialClient] = useState({});
  const [clientCount, setClientCount] = useState(3);

  useEffect(() => {
    setTestimonialClient(
      TESTIMONIAL_CARD_DATA[testimonialArr[activeSlide].value].testimonials
    );

    const clientCounts = Object.values(
      TESTIMONIAL_CARD_DATA[testimonialArr[activeSlide].value].testimonials
    ).filter(({ about }) => about.length > 0 && about);

    setClientCount(clientCounts.length);
  }, [activeSlide, testimonialArr]);

  /**
   * @description getting index on click on any client
   *
   * @param {Number} index
   * @returns
   */
  const handleCurrentSlide = (index) => () => {
    setActiveSlide(index);
  };

  return (
    <Box className={`${classes.testimonials} testimonials`}>
      <Box className={`${classes.testimonialLogo} testimonialLogo`}>
        <Typography
          variant="h4"
          className={`${classes.testimonialTitle} testimonialTitle`}
        >
          What our customers are saying
        </Typography>
      </Box>

      <Box className="container-fluid containerClass">
        <Slider
          className="sliderPadding"
          afterChange={(current, next) => {
            setActiveSlide(current);
          }}
          infinite={true}
          slidesToShow={5}
          slidesToScroll={1}
          centerMode={true}
          nextArrow={<ChevronRight className="rightArrow" />}
          prevArrow={<ChevronLeft className="leftArrow" />}
          responsive={responsive_slider}
        >
          {testimonialArr.map(({ value = "", label = "" }, index) => {
            return (
              <Box key={`${value}-${index}`}>
                <Typography
                  variant="h6"
                  className={`${classes.clientTitle} clientTitle`}
                  onClick={handleCurrentSlide(index)}
                >
                  {label}
                </Typography>
              </Box>
            );
          })}
        </Slider>
        {/* --- second slider------- */}
        <Box className="testimonialDomainClientsSection">
          <Slider
            className="testimonialDomainClients"
            slidesToShow={clientCount > 0 && clientCount < 3 ? clientCount : 3}
            swipeToSlide={true}
            focusOnSelect={true}
            slidesToScroll={1}
            infinite={true}
            initialSlide={2}
            nextArrow={
              <ChevronRight
                className={`${classes.arrowRightClient} arrowRightClient`}
              />
            }
            prevArrow={
              <ChevronLeft
                className={`${classes.arrowLeftClient} arrowLeftClient`}
              />
            }
            responsive={responsive_client}
          >
            {Object.values(testimonialClient).map(
              (
                {
                  value = "",
                  about = "",
                  author = "",
                  image = "",
                  designation = "",
                  company = "",
                },
                index
              ) => {
                if (about.length < 1) return true;
                return (
                  <Box
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    key={`${value}-${index}`}
                    className={`${classes.clientGrid} clientGrid`}
                  >
                    <Box
                      className={`${classes.clientCard} clientCard`}
                      style={{
                        maxWidth:
                          clientCount >= 1 && clientCount < 3 ? "60%" : "75%",
                      }}
                    >
                      <Typography
                        variant="h5"
                        className={`${classes.testimonialCardMatter} testimonialCardMatter`}
                      >
                        "{about}"
                      </Typography>
                      <Typography
                        variant="body1"
                        className={`${classes.testimonialCardUser} testimonialCardUser`}
                      >
                        <strong>{author},</strong> {designation}-{company}
                      </Typography>
                      <img
                        className={`${classes.testimonialImage} testimonialImage`}
                        src={image}
                        alt={value}
                      />
                    </Box>
                  </Box>
                );
              }
            )}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};
export default Testimonials;

/**
 * Styles
 */
const useStyles = makeStyles((theme) => ({
  testimonials: {
    display: "flex",
    flexDirection: "column",
  },
  testimonialLogo: {
    display: "flex",
    flexDirection: "row",
    fontWeight: "800",
    color: "#0d274d",
  },

  testimonialTitle: {
    width: "fit-content",
    margin: "0.5rem auto",
  },
  hr: {
    margin: "1% auto 3%",
  },
  testimonialClientCard: {
    outline: "none",
    width: "429px",
    padding: "0 3rem",
    margin: "2rem",
  },
  clientGrid: {
    margin: "3rem auto",
  },
  clientCard: {
    minWidth: "30%",
    margin: "auto",
    borderRadius: "1rem ",
    boxShadow: "0 0 2rem 1.5rem rgb(10 10 10 / 12%)",
    padding: "1rem 2rem",
  },
  clientTitle: {
    cursor: "pointer",
  },
  arrowRightClient: {
    left: "0",
    top: "10%",
  },
  testimonialCardMatter: {
    fontSize: "1rem",
    fontWeight: "700",
    margin: "16% 0% 13% 0",
  },
  testimonialCardUser: {
    textIndent: "10%",
    fontSize: "0.8rem",
  },
  testimonialImage: {
    width: "100px",
    margin: "10% 26%",
  },
}));
