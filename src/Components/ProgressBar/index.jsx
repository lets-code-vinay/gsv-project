import * as React from "react";
import { func, number, oneOfType, string } from "prop-types";
import { Box, LinearProgress } from "@material-ui/core";
import "./styles.css";

export const ProgressBar = ({ activeSlide, index, onChangeSlide }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }

        return oldProgress + 20;
      });
    }, 1000);

    return () => {
      setProgress(0);
      clearInterval(timer);
    };
  }, []);

  /**
   * @description Get progress percentage as per slide
   *
   * @returns {Number} Progress
   */
  const getProgressValue = () => {
    if (activeSlide === index) return progress;
    if (activeSlide < index) return 0;
    if (activeSlide > index) return 100;
  };

  /**
   * @description Changing active slide
   *
   * @param {Number} index
   *
   * @returns {Function} Callback function #onChangeSlide
   */
  const onProgressClicked = (index) => () => {
    setProgress(0);
    onChangeSlide(index);
  };

  return (
    <Box sx={{ width: `100%` }}>
      <LinearProgress
        onClick={onProgressClicked(index)}
        variant="determinate"
        value={getProgressValue()}
      />
    </Box>
  );
};

/**
 * Props validation
 */
ProgressBar.propTypes = {
  activeSlide: oneOfType([number, string]),
  index: oneOfType([number, string]),
  onChangeSlide: func,
};

/**
 * Props Default values
 */
ProgressBar.defaultProps = {
  activeSlide: 0,
  index: 0,
  onChangeSlide: () => {},
};

export default React.memo(ProgressBar);
