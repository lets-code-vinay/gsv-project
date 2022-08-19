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
import Security_Img from "../../Assets//Images/security.png";
import technologyWireImage from "../../Assets/Images/technology-wire.png";
import { cardBox } from "../../Configs/Technologies";

const Technologies = () => {
  const classes = useStyles();

  return (
    <Box className={`${classes.technologiesPage} technologiesPage`}>
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
        <Grid item xs={6} sm={6} md={6}>
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
        <Grid item xs={6} sm={6} md={6} className="wireGridClass">
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
      <Grid container className="marginTop">
        <Grid item xs={8} className="bck1">
          <Card className="cardMenu">
            <CardContent className="softwareImageOverlay">
              <div className="divImgClass imageLeft" src={Software_Define_Grid}>
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
        <Grid item xs={4} className="bck2">
          <Card className="cardMenu">
            <CardContent className="securityOverlay">
              <div
                className="divImgClassSecurity imageRight"
                src={Security_Img}
              >
                <img src={Security_Img} className="imgTagSecurity" alt="tech" />
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
      <Grid container spacing={0} className="cardGrid">
        <Grid className="cardBody">
          {cardBox.map((item, i) => {
            return (
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
            );
          })}
        </Grid>
      </Grid>
      <Grid container spacing={0} className="">
        <Grid item style={{ width: "100%" }} className="boxBelow"></Grid>
      </Grid>
    </Box>
  );
};

export default Technologies;

const useStyles = makeStyles((theme) => ({
  technologiesPage: {
    width: "80%",
    margin: "5% auto",
  },
  technologiesTitle: {
    display: "flex",
    flexDirection: "row",
    // margin: "0 0 0 7%",
    padding: "3% 0",
    color: "#0d274d",
    alignItems: "center",
    width: "70%",
    margin: "auto",
  },
  technologiesSubtitle: {
    margin: " 2% 7% 3.5%",
  },

  technologiesText: {
    fontWeight: "800",
  },
}));
