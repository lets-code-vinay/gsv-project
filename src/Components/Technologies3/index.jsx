import React from "react";

import {
  Grid,
  Card,
  CardContent,
  Box,
  makeStyles,
  Typography,
} from "@material-ui/core";

import "./style.css";

import Software_Define_Grid from "../../Assets/Images/Software_Define_grid.png";
import Security_Img from "../../Assets/Images/security.png";
import technologyWireImage from "../../Assets/Images/technology-wire.png";
import { cardBox } from "../../Configs/Technologies";

const Technologies3 = () => {
  const classes = useStyles();

  return (
    <main className={`${classes.technologiesPage} technologiesPage`}>
      <Box className="technologies-container">
        <Grid container spacing={2} className="cardGrid">
          {cardBox.map((item, i) => {
            return (
              <Grid item xs={6} sm={6} md={4} lg={4} className="cardBody">
                <Card key={i} sx={{ minWidth: 275 }} className="cardMenu">
                  <CardContent className="cardContent position-relative">
                    <div className="overlay">
                      <div className={item.className} src={item.img}>
                        <img
                          src={item.img}
                          width="100%"
                          height="100%"
                          alt="Master the digital landscape"
                          className="overlayImgClass"
                        />
                      </div>
                      <span className="gradient"></span>
                      <div className="headingMainDiv">
                        <h3 className="cardTopHeading">{item.heading}</h3>
                        <div className="cardTextDiv">
                          <h4 className="cardText">{item.text}</h4>
                          <div className="paragraph">
                            <p>{item.para}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </main>
  );
};

export default Technologies3;

const useStyles = makeStyles((theme) => ({
  technologiesPage: {
    width: "80%",
    margin: "5% auto",
  },
  technologiesTitle: {
    display: "flex",
    flexDirection: "row",
    padding: "1% 0",
    color: "#0d274d",
    alignItems: "center",
    width: "fit-content",
    margin: "auto",
  },
  technologiesSubtitle: {
    fontSize: "1rem",
    width: "fit-content",
    margin: "0 auto",
    padding: "1% 0 4%",
  },

  technologiesText: {
    fontWeight: "600",
  },
}));
