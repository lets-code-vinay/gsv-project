import React from "react";
import { FullPage, Slide } from "react-full-page";
import Trending from "../../Components/Trending";
import OurClients from "../../Components/OurClient/OurClients";
import InfinitySliderContainer from "../../Components/InfinitySliderContainers";
import MainSlider from "../../Components/MainSlider";
import Insight from "../../Components/Insight";
import OurPresence from "../../Components/Presence";
import Footer from "../../Components/Footer";
import Technologies from "../../Components/Technologies";
import Testimonials from "../../Components/Testimonials";
import Technologies2 from "../../Components/Technologies2";
import Technologies3 from "../../Components/Technologies3";
import Technologies1 from "../../Components/Technologies1";

const Homepage = () => {
  return (
    <FullPage>
      <Slide>
        <MainSlider />
      </Slide>

      <Slide>
        <Trending />
      </Slide>

      <Slide>
        <Insight />
      </Slide>

      <Slide>
        <InfinitySliderContainer />
      </Slide>

      {/* <Slide>
        <Technologies />
      </Slide> */}
      <Slide>
        <Technologies1 />
      </Slide>
      <Slide>
        <Technologies2 />
      </Slide>
      <Slide>
        <Technologies3 />
      </Slide>

      <Slide>
        <OurPresence />
      </Slide>

      <Slide>
        <Testimonials />
      </Slide>

      <Slide>
        <OurClients />
      </Slide>

      <Slide>
        <Footer />
      </Slide>
    </FullPage>
  );
};

export default Homepage;
