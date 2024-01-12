import React, { lazy } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@material-ui/core";
import "./style.css";

const Trending = lazy(() => import("../../Components/Trending"));
const OurClients = lazy(() => import("../../Components/OurClient/OurClients"));
const InfinitySliderContainer = lazy(() =>
  import("../../Components/InfinitySliderContainers")
);
const MainSlider = lazy(() => import("../../Components/MainSlider"));
const Insight = lazy(() => import("../../Components/Insight"));
const OurPresence = lazy(() => import("../../Components/Presence"));
const Footer = lazy(() => import("../../Components/Footer"));
const Technologies = lazy(() => import("../../Components/Technologies"));
const Testimonials = lazy(() => import("../../Components/Testimonials"));

const Homepage = () => {
  const { pathname } = useLocation();

  const mainRef = React.useRef(null);

  /**
   * @description Rendering Page to the top
   */
  React.useEffect(() => {
    mainRef.current.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box className="homepage-container" ref={mainRef}>
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
