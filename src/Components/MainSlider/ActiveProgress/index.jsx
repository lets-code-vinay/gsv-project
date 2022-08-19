import React, { memo, useCallback } from "react";
import { func, number, oneOfType, string } from "prop-types";

import { Box, makeStyles, Typography } from "@material-ui/core";
import ProgressBar from "../../ProgressBar";
import "./styles.css";

const ActiveProgress = ({
  progressName = "",
  key = "",
  activeSlide = 0,
  index = 0,
  onChangeSlide = () => {},
}) => {
  const classes = useStyles();

  /**
   * @description Changing active slide
   *
   * @returns {Function} Callback function #onChangeSlide
   */
  const handleChangeSlider = useCallback(() => {
    onChangeSlide(index);
  }, [onChangeSlide, index]);

  return (
    <Box className={`${classes.progressBox} progressBox`} key={key}>
      <Typography
        variant="h5"
        className={`${classes.progressText} progressText`}
        onClick={handleChangeSlider}
      >
        {progressName}
      </Typography>

      <ProgressBar
        activeSlide={activeSlide}
        index={index}
        onChangeSlide={onChangeSlide}
      />
    </Box>
  );
};

/**
 * Props validation
 */
ActiveProgress.propTypes = {
  key: oneOfType([number, string]),
  activeSlide: oneOfType([number, string]),
  index: oneOfType([number, string]),
  onChangeSlide: func,
};
/**
 * Default Props
 */
ActiveProgress.defaultProps = {
  key: "",
  activeSlide: 0,
  index: 0,
  onChangeSlide: () => {},
};

export default memo(ActiveProgress);

const useStyles = makeStyles((theme) => ({
  progressBox: {
    marginRight: "2%",
    textAlign: "center",
    color: "#fff",
  },
  progressText: {
    cursor: "pointer",
  },
}));
