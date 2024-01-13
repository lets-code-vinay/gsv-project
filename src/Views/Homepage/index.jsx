import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@material-ui/core";
import "./style.css";

import Trending from "../../Components/Trending";
import OurClients from "../../Components/OurClient/OurClients";
import InfinitySliderContainer from "../../Components/InfinitySliderContainers";
import MainSlider from "../../Components/MainSlider";
import Insight from "../../Components/Insight";
import OurPresence from "../../Components/Presence";
import Footer from "../../Components/Footer";
import Technologies from "../../Components/Technologies";
import Testimonials from "../../Components/Testimonials";

const Homepage = () => {
  const { pathname } = useLocation();

  const mainRef = React.useRef(null);

  const [scrollPosition, setScrollPosition] = useState(0);

  /**
   * @description Getting Scroll Poition
   * @param {object} event
   */
  const handleScroll = () => {
    const position = window.pageYOffset; // if not work use-- window.pageYOffset
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box className="homepage-container" ref={mainRef}>
      <MainSlider scrollPosition={scrollPosition} />
      <Trending />
      <Insight />
      <InfinitySliderContainer />
      <Technologies />
      <OurPresence />
      <Testimonials />
      <OurClients />
      <Footer />
    </Box>
  );
};

export default Homepage;
