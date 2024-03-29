import React, { useState } from "react";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../../node_modules/react-tabs/style/react-tabs.css";
import "react-tabs/style/react-tabs.css";
import "./style.css";

import TRENDING_LOGO from "../../Assets/Icons/trending.svg";

import { TRENDING_CONFIGS } from "../../Configs/Trending";
import { THEME_COLOR } from "../../Configs/Theme";
import CustomizedDialogs from "../CustomizedDialogs";

const Trending = () => {
  const classes = useStyles();

  const [tabIndex, setTabIndex] = useState(0);
  const [dialogMSG, setDialogMSG] = useState("");
  const [dialogTitle, setDialogTitle] = useState("");
  const [openLearnMore, setOpenLearnMore] = useState(false);

  /**
   * @description Handling paragraph for trending
   *
   * @param {String} subtitle
   * @param {Boolean} learnMore
   * @returns {String}
   */
  const handleSubTitle = (subtitle, learnMore) => {
    // Uncomment when it is required in future
    // const originalPara = subtitle.split("#ENTER#").map((brk) => {
    //   return <div className="trendingSubTitleForce">{brk}</div>;
    // });

    // Shortening the paragraph
    const shortPara = `${subtitle.split("").splice(0, 300).join("")}...`;

    return subtitle.length > 250
      ? shortPara
      : subtitle.replaceAll("#ENTER#", "");
  };

  /**
   * @description Handle click tab button
   */
  const handleTabClick = () => {};

  /**
   * @description Open dialog to read more
   */
  const handleLearnMore = (title, subtitle) => () => {
    setOpenLearnMore(true);
    setDialogMSG(subtitle);
    setDialogTitle(title);
  };

  /**
   * @description Close dialog
   */
  const handleClose = () => {
    setOpenLearnMore(!openLearnMore);
  };

  return (
    <main className={`${classes.containerTrending} containerTrending`}>
      <Box className="container-div">
        <Box className={`${classes.trendingLogo} trendingLogo`}>
          <img
            src={TRENDING_LOGO}
            alt="Trending logo"
            className={`${classes.trendingIcon} trendingIcon`}
          />
          <Typography
            variant={"h4"}
            className={`${classes.trendingText} trendingText`}
          >
            Trending
          </Typography>
        </Box>
        <Tabs
          id="controlled-tabs"
          defaultFocus={true}
          selectedTabClassName="underline"
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          default={0}
        >
          <TabList className={`${classes.tabsClass} tabsClass`}>
            {Object.values(TRENDING_CONFIGS).map((trending, index) => {
              return (
                <Tab key={`${trending}-${index}`} style={{ padding: 0 }}>
                  <Button
                    boxor="outline-primary"
                    disableRipple={true}
                    className={`${classes.tabButton} tabButton`}
                    id="tabButton"
                    onClick={handleTabClick}
                  >
                    {trending.label}
                  </Button>
                  <Box
                    className={`${classes.borderBottomClass} borderBottomClass`}
                    style={{
                      backgroundColor:
                        index === tabIndex ? "#43C6AC" : "transparent",
                    }}
                  ></Box>
                </Tab>
              );
            })}
          </TabList>

          {Object.values(TRENDING_CONFIGS).map(
            ({ label, title, subtitle, icon, link, button }, index) => {
              return (
                <TabPanel
                  key={`${label}-${index}`}
                  className={`${classes.tabContainer} tabContainer`}
                >
                  <Grid container className={`${classes.tabMatter} tabMatter`}>
                    <Grid
                      item
                      xs={12}
                      sm={5}
                      md={4}
                      lg={4}
                      className={`${classes.trendingImageGrid} trendingImageGrid`}
                    >
                      <img
                        src={icon}
                        alt={title}
                        className={`${classes.trendingImage} trendingImage reciprocate`}
                      />
                    </Grid>
                    <Grid item xs={12} sm={7} md={8} lg={8}>
                      <Box className="content">
                        <Typography
                          variant={"h4"}
                          className={`${classes.trendingTitle} trendingTitle`}
                        >
                          {title}
                        </Typography>

                        <Typography
                          variant={"body1"}
                          className="trendingSubTitle"
                        >
                          {handleSubTitle(subtitle)}
                        </Typography>

                        {link && (
                          <Typography
                            className="btn btn-outline-primary learn-link"
                            rel="noreferrer"
                            onClick={handleLearnMore(title, subtitle)}
                            onMouseOver={handleLearnMore(title, subtitle)}
                          >
                            <span className="learn-button">
                              {`Learn More...`}
                            </span>
                          </Typography>
                        )}

                        {button && (
                          <Button boxor="outline-primary">{button}</Button>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                </TabPanel>
              );
            }
          )}
        </Tabs>
      </Box>
      <CustomizedDialogs
        title={dialogTitle}
        open={openLearnMore}
        onClose={handleClose}
        msg={dialogMSG}
      />
    </main>
  );
};

export default Trending;

const useStyles = makeStyles((theme) => ({
  containerTrending: {
    padding: "0% 4%",
    backgroundColor: THEME_COLOR.light_sky,
  },

  trendingIcon: {
    marginTop: "-0.5%",
  },

  tabsClass: {
    float: "right",
    "&:active": {
      boxShadow: "none",
    },
  },

  tabMatter: {
    padding: "2% 0%",
    backgroundColor: THEME_COLOR.light_sky,
  },

  tabContainer: { width: "90%", margin: "auto" },

  tabButton: {
    color: `#000`,
    width: "100%",
    backgroundColor: "transparent ",

    "&:hover": {
      boxShadow: "none",
      backgroundColor: "transparent ",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "transparent ",
    },
  },

  borderBottomClass: {
    width: "100%",
    height: "4px",
    marginTop: "10px",
  },

  trendingTitle: {
    color: `#000`,
  },

  trendingLogo: {
    display: "flex",
    flexDirection: "row",
    margin: "0 0 0 3%",
    fontWeight: "800",
    color: "#0d274d",
  },
  trendingText: {
    fontWeight: "300",
    color: "#000",
  },
  trendingImage: {
    // width: "350px",
    // height: "375px",
  },
}));
