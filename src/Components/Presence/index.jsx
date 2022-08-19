import * as React from "react";

import { Box, Typography, makeStyles, Grid } from "@material-ui/core";

// TODO: use it or remove it when required
// import wave1 from "../../Assets/SVGs/wave1white.svg";
// import wave2 from "../../Assets/SVGs/wave2grey.svg";
import MapContainer from "./MapContainer.jsx";

export default function OurPresence() {
  const classes = useStyles();

  return (
    <>
      <Box className={`${classes.mainBody} mainBody`}>
        {/* <Box className={`${classes.wave1grey} wave1grey`}>
          <img
            src={wave2}
            alt="wave 1"
            className={`${classes.firstWave} firstWave `}
          />
          <img src={wave2} alt="wave 1" />
          <img src={wave2} alt="wave 1" />
        </Box>
        <Box className={`${classes.wave1white} wave1white`}>
          <img
            src={wave1}
            alt="wave 1"
            className={`${classes.firstWave} firstWave `}
          />
          <img src={wave1} alt="wave 1" />
          <img src={wave1} alt="wave 1" />
        </Box> */}

        <Grid container className={`${classes.mainGrid} mainGrid`}>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            lg={5}
            className={`${classes.gridLeft} gridLeft`}
          >
            <Box className={`${classes.leftSideWorld} leftSideWorld`}>
              <Typography variant={"h2"}>Worldwide Presence</Typography>
              <Typography variant={"body1"}>
                We provide Best in class services belongs to all IT technologies
                If you’re searching for talented tech minds who are dedicated to
                their work, we are a perfect fit. We are a dynamic
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={7} lg={7}>
            <MapContainer />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  mainBody: {
    width: "100%",
    background: "#0d274d",
    color: "white",
    position: "relative",
    paddingTop: "4%",
  },
  mainGrid: {},
  gridLeft: {
    margin: "auto",
  },
  presenceMain: {
    width: "80%",
    margin: "auto",
    color: "white",
  },
  leftSideWorld: {
    width: "80%",
    marginLeft: "15%",
  },

  wave1white: {
    display: "flex",
    flexDirection: "row",
    width: "33%",
    marginLeft: "1%",
    position: "absolute",
    top: "2%",
  },

  firstWave: {
    width: "138%",
    marginLeft: "-19px",
    marginTop: "1px",
  },

  wave1grey: {
    display: "flex",
    flexDirection: "row",
    width: "33%",
    marginLeft: "1%",
    position: "relative",
    top: "10%",
  },
}));
