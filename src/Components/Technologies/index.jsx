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

const Technologies = () => {
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
              <h3 className="card_header">Enterprise Networking and wireless benefits for your organization</h3>
              <div>
                <h3 className="card_heading">
                  End to End Wired and Wireless Services
                </h3>
              </div>
              <div>
                <h4 className="card_text">
                  With Enterprise Networking & Wireless, connect your employees, customers,
                  and partners across multiple locations and devices, enable seamless communication
                  and data sharing, and leverage cloud-based applications and services to streamline
                  your workflows and improve your efficiency.
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
                        Software-defined networking (SDN) offers the ability to efficiently control and manipulate network resources in a dynamic and adaptable manner.
                        Through the use of software applications, organizations can configure, monitor, and enhance network performance, security, and dependability.
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
                      <p>If you are looking to safeguard your organization's data, networks, devices, or applications,
                        GSV Solutions is here to assist you in bolstering your security measures.
                        </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="cardGrid">
          {cardBox.map((itemData, i) => {
            const {
              img = "",
              className = "",
              heading = "",
              text = "",
              para = "",
            } = itemData || {};
            return (
              <Grid
                item
                xs={6}
                sm={6}
                md={4}
                lg={4}
                className="cardBody"
                key={i}
              >
                <Card key={i} sx={{ minWidth: 275 }} className="cardMenu">
                  <CardContent className="cardContent position-relative">
                    <div className="overlay">
                      <div className={className} src={img}>
                        <img
                          src={img}
                          width="100%"
                          height="100%"
                          alt="Master the digital landscape"
                          className="overlayImgClass"
                        />
                      </div>
                      <span className="gradient"></span>
                      <div className="headingMainDiv">
                        <h3 className="cardTopHeading">{heading}</h3>
                        <div className="cardTextDiv">
                          <h4 className="cardText">{text}</h4>
                          <div className="paragraph">
                            <p>{para}</p>
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

export default Technologies;

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
