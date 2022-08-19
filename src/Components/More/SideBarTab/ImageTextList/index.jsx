import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";

import "./styles.css";

const ImageTextList = ({
  title = "",
  subtitle = "",
  image = "",
  alt = "",
  listTitle = "",
  list = [],
}) => {
  return (
    <>
      <Box className="title-block">
        <h1 className="ImageTextList my-5">{title}</h1>
        <Typography variant={"body1"} my={2} className="ImageTextListSubtitle">
          {subtitle}
        </Typography>
      </Box>

      <Grid container className="displayFlex">
        <Grid item xs={12} sm={12} md={5} lg={4}>
          <img src={image} height={`100%`} width={`95%`} alt={alt} />
        </Grid>

        <Grid item xs={12} sm={12} md={7} lg={8}>
          <h4 className="textColorRed">{listTitle}</h4>

          {list.map((list, index) => {
            return (
              <Box className="list" key={index}>
                <Typography variant={"h6"} className="backTextColor">
                  {list}
                </Typography>
              </Box>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default ImageTextList;
