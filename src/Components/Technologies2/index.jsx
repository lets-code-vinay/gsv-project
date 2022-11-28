import React from "react";

import { Grid, Card, CardContent, Box, makeStyles } from "@material-ui/core";

import "./style.css";

import Software_Define_Grid from "../../Assets/Images/Software_Define_grid.png";
import Security_Img from "../../Assets/Images/security.png";

const Technologies2 = () => {
  const classes = useStyles();

  return (
    <main className={`${classes.technologiesPage} technologiesPage`}>
      <Box className="technologies-container">
        <Grid container className="marginTop">
          <Grid item xs={12} sm={12} md={8} lg={8} className="bck1">
            <Card className="cardMenu">
              <CardContent className="softwareImageOverlay">
                <div
                  className="divImgClass imageLeft"
                  src={Software_Define_Grid}
                >
                  <img
                    src={Software_Define_Grid}
                    className="imgTagSoftware"
                    alt="tech"
                  />
                </div>
                <h3 className="text">Software-Defined Networking</h3>
                <div className="headingMainDivSoftware">
                  <div className="cardDiv">
                    <h4 className="cardTextHeading">
                      Let us Help you to come in Future of SDN{" "}
                    </h4>
                    <div className="paraText">
                      <p>
                        Cisco-SDWAN, Cisco-DNA-C, Cisco ACI, Velo Cloud, Silver
                        light and many more
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} className="bck2">
            <Card className="cardMenu">
              <CardContent className="securityOverlay">
                <div
                  className="divImgClassSecurity imageRight"
                  src={Security_Img}
                >
                  <img
                    src={Security_Img}
                    className="imgTagSecurity"
                    alt="tech"
                  />
                </div>
                <h3 className="textSecurity">Security</h3>
                <div className="headingMainDivSoftware">
                  <h4 className="cardTextHeadingSecurity">
                    Advance Security tactics{" "}
                  </h4>
                  <div className="cardDivSecurity">
                    <div className="paraTextSecurity">
                      <p>Cybersecurity, AMP, Network and Cloud Security</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
};

export default Technologies2;

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
