import React from "react";
import { Grid } from "@material-ui/core";

import "./style.css";

const GridPage = ({ data = [], title = "" }) => {
  return (
    <>
      <h1 className="gridHeading my-5">{title}</h1>
      <Grid container className="displayFlex">
        {data.map((findItem, i) => {
          return (
            <Grid
              item
              sm={6}
              xs={6}
              md={3}
              lg={3}
              index={i + "-" + findItem.img}
            >
              <img src={findItem.img} alt="" className="gridPageImage" />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default GridPage;
