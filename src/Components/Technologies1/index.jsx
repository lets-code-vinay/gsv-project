import React from "react";

import { Grid, Box, makeStyles, Typography } from "@material-ui/core";

import "./style.css";

import technologyWireImage from "../../Assets/Images/technology-wire.png";

const Technologies1 = () => {
  const classes = useStyles();

  return (
    <main className={`${classes.technologiesPage} technologiesPage`}>
      <Box className="technologies-container">
        <Box className={`${classes.technologiesTitle} technologiesTitle`}>
          <Typography
            variant="h4"
            className={`${classes.technologiesText} technologiesText`}
          >
            Technologies
          </Typography>
        </Box>

        <p className={`${classes.technologiesSubtitle} technologiesSubtitle`}>
          We provide services belongs to all IT technologies We provide services
          belongs to all IT technologies
        </p>

        <Grid container spacing={0} className={`${classes.grid1} grid1`}>
          <Grid item xs={12} sm={6} md={6}>
            <div className="column_first">
              <h3 className="card_header">Enterprise Networking & Wireless</h3>
              <div>
                <h3 className="card_heading">
                  End to End Wired and Wireless Services
                </h3>
              </div>
              <div>
                <h4 className="card_text">
                  Design, Deployment, Monitoring, Support, dsdasd, dasdasdsd
                  dsdsdsd trtrtr wewewew ewewe wewewe wewewewewe wewewewew{" "}
                </h4>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} className="wireGridClass">
            <div className="wireImage" src={technologyWireImage}>
              <img
                src={technologyWireImage}
                height="100%"
                width="100%"
                className="hoverEffect"
                alt="tech"
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
};

export default Technologies1;

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
    // margin: " 2% 7% 3.5%",
    fontSize: "1rem",
    width: "fit-content",
    margin: "0 auto",
    padding: "1% 0 4%",
  },

  technologiesText: {
    fontWeight: "600",
  },
}));
