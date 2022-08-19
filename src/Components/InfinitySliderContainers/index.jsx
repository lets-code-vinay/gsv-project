import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import InfinitySlider from "../InfinitySlider";
import {
  INFINITY_SLIDER_CONTENTS,
  INFINITY_SLIDER_CONTENTS_BOTTOM,
} from "../../Configs/InfinitySlider";

const InfinitySliderContainer = () => {
  const classes = useStyles();

  return (
    <Box className={`${classes.multiVendor} multiVendor`}>
      <InfinitySlider
        isSlideSpeedFast={false}
        images={INFINITY_SLIDER_CONTENTS}
      />
      <InfinitySlider
        isSlideSpeedFast={true}
        images={INFINITY_SLIDER_CONTENTS_BOTTOM}
      />
    </Box>
  );
};

export default InfinitySliderContainer;

const useStyles = makeStyles((theme) => ({}));
