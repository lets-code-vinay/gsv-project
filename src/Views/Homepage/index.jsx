import React from "react";

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
  return (
    <>
      <MainSlider />
      <Trending />
      <Insight />
      <InfinitySliderContainer />
      <Technologies />
      <OurPresence />
      <Testimonials />
      <OurClients />
      <Footer />
    </>
  );
};

export default Homepage;
