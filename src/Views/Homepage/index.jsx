import React from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@material-ui/core";

import Trending from "../../Components/Trending";
import OurClients from "../../Components/OurClient/OurClients";
import InfinitySliderContainer from "../../Components/InfinitySliderContainers";
import MainSlider from "../../Components/MainSlider";
import Insight from "../../Components/Insight";
import OurPresence from "../../Components/Presence";
import Footer from "../../Components/Footer";
import Technologies from "../../Components/Technologies";
import Testimonials from "../../Components/Testimonials";

import "./style.css";

const Homepage = () => {
  const { pathname } = useLocation();

  /**
   * @description Rendering Page to the top
   */
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box className="homepage-container">
      <MainSlider />
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
