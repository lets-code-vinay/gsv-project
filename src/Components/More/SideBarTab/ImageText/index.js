import React from "react";
import { Grid } from "@material-ui/core";
import "./styles.css";

const ImageText = ({ title = "", subtitle = "", image = "", alt = "" }) => {
  return (
    <Grid container className="displayFlex">
      <Grid item xs={12} sm={12} md={5} lg={5}>
        <div>
          <h1 className="heading my-2">{title} </h1>
          <p className="subtitle">{subtitle}</p>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={7} lg={7}>
        <img
          src={image}
          alt={alt}
          width="80%"
          height="100%"
          style={{ margin: "0 10%" }}
        />
      </Grid>
    </Grid>
  );
};

export default ImageText;
