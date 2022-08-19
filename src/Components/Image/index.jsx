import React from "react";
import { string } from "prop-types";

const ImgRenderer = ({
  source = "",
  text = "",
  imageClass = "",
  width = "",
  height = "",
}) => {
  return (
    <>
      <img
        src={source}
        alt={text}
        className={imageClass}
        width={width}
        height={height}
      />
    </>
  );
};

/**
 * Props validation
 */
ImgRenderer.propTypes = {
  alt: string,
  height: string,
  imageClass: string,
  source: string,
  width: string,
};

/**
 * Default Props
 */
ImgRenderer.defaultProps = {
  alt: "",
  imageClass: "",
  source: "",
  width: "",
  height: "",
};

export default ImgRenderer;
