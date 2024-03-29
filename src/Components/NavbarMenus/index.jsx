import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { shape } from "prop-types";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import "./styles.css";

import { THEME_COLOR } from "../../Configs/Theme";

const NavbarMenus = ({ navMenus = {}, onCloseMenu }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  // const scrollPosition = localStorage.getItem("scrollPosition");

  const [isPopularEnabled] = useState(
    Object.keys(navMenus?.menus).includes("POPULAR")
  );

  /**
   * @description On Click Get In Touch Button
   */
  const handleGetInTouch = () => {
    navigate("/contact-us");
  };

  /**
   * @description closing navbar
   */
  const closeNavBar = () => {
    onCloseMenu(false);
  };

  /**
   * @description closing navbar when user scolls
   */
  // if (scrollPosition > 100) {
  //   closeNavBar();
  // }

  return (
    <>
      <Grid container className={`${classes.subMenu1} subMenu1`}>
        <Grid
          item
          xs={0}
          sm={0}
          md={3}
          lg={3}
          className={`${classes.menuImage} menuImage`}
        >
          <Box className={`${classes.imageBlock} imageBlock block`}>
            {/* TODO: Remove comment after finishing, image size 180 x 404 */}
            <img
              src={navMenus?.image || null}
              alt={navMenus?.title}
              className={`${classes.imageSubMenu} imageSubMenu`}
            />
            <Box className={`${classes.menuInformationBar} menuInformationBar`}>
              <Typography
                variant={"h4"}
                className={`${classes.menuInformationBarTitle} menuInformationBarTitle`}
              >
                {navMenus?.title}{" "}
              </Typography>
              <Box
                className={`${classes.menuInformationMSGContainer} menuInformationMSGContainer`}
                style={{ backgroundColor: navMenus?.color }}
              >
                <Typography
                  variant="body1"
                  className={`${classes.menuInformationMSG} menuInformationMSG`}
                >
                  {navMenus?.subtitle}
                </Typography>
              </Box>
            </Box>
            <Button
              className="get-in-touch"
              style={{ backgroundColor: navMenus?.color }}
              onClick={handleGetInTouch}
            >
              Get in touch
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={5} lg={5}>
          <ResponsiveMasonry
            className={`${classes.menuBlock} menuBlock`}
            columnsCountBreakPoints={{ 350: 1, 750: 2 }}
          >
            <Masonry gutter="1">
              {Object.values(navMenus?.menus).map(
                ({ value = "", label = "", menus = {} }, index) => {
                  if (value === "POPULAR") return "";
                  return (
                    <Box
                      key={index}
                      className={`${classes.MenuTitleContainerBox} MenuTitleContainerBox`}
                    >
                      <Box
                        className={`${classes.MenuTitleContainer} MenuTitleContainer`}
                      >
                        <Typography
                          variant={"h5"}
                          className={`${classes.mainMenuTitle} mainMenuTitle`}
                        >
                          {label}
                        </Typography>
                      </Box>

                      {Object.values(menus).map(
                        ({ path = "", value, label }, index) => {
                          return (
                            <a
                              href={path}
                              key={`${value}-${index}`}
                              className={`${classes.mainMenuLink} mainMenuLink`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Typography
                                className={`${classes.mainMenuText} mainMenuText`}
                                variant={"body1"}
                              >
                                {label}
                              </Typography>
                            </a>
                          );
                        }
                      )}
                    </Box>
                  );
                }
              )}
            </Masonry>
          </ResponsiveMasonry>
        </Grid>

        {isPopularEnabled && (
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Box
              className={`${classes.popularBlock} popularBlock block`}
              style={{ backgroundColor: THEME_COLOR.popular_color }}
            >
              {Object.values(navMenus?.menus).map(
                ({ value = "", label, menus }, index) => {
                  if (value !== "POPULAR") return null;
                  return (
                    <Box key={index}>
                      <Box
                        className={`${classes.popularTitleContainer} popularTitleContainer`}
                      >
                        <Typography
                          variant={"h5"}
                          className={`${classes.popularTitle} popularTitle`}
                        >
                          {label}
                        </Typography>
                      </Box>
                      <Grid container>
                        {Object.values(menus).map((popMenu, index) => {
                          return (
                            <Grid
                              item
                              sm={12}
                              xs={12}
                              md={6}
                              lg={6}
                              key={`${popMenu.value}-${index}`}
                            >
                              <a
                                href={popMenu.path}
                                className={`${classes.popularLink} popularLink`}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Typography
                                  className={`${classes.popularText} popularText`}
                                  variant={"body1"}
                                >
                                  {popMenu.label}
                                </Typography>
                              </a>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Box>
                  );
                }
              )}

              <Button
                className={`${classes.closeNavBarBtn} closeNavBarBtn`}
                style={{ backgroundColor: navMenus?.color, color: "white" }}
                onClick={closeNavBar}
                endIcon={
                  <HighlightOffIcon
                    className={`${classes.closeNavBarIcon} closeNavBarIcon`}
                  />
                }
              >
                Close
              </Button>
            </Box>
          </Grid>
        )}
      </Grid>
    </>
  );
};

/**
 * Props validation
 */
NavbarMenus.propTypes = {
  navMenus: shape({}),
};

/**
 *  Default Props
 */
NavbarMenus.defaultProps = {
  navMenus: {},
};

export default NavbarMenus;

const useStyles = makeStyles((theme) => ({
  subMenu1: {
    position: "absolute",
    zIndex: "10",
  },

  imageSubMenu: {
    objectFit: "fill",
    objectPosition: "20% 10%" /* try 20px 10px */,
  },

  imageBlock: {
    overflow: "hidden",
    height: "100%",
  },

  //--------information bar-------------
  menuInformationBar: {
    position: "absolute",
  },
  menuInformationMSGContainer: {
    color: "#ffffff",
    opacity: "0.9",
    padding: "2%",
    borderRadius: "0 60px 60px 0",
  },
  menuInformationMSG: {
    color: "#ffffff",
    padding: "2%",
  },
  menuInformationBarTitle: {
    color: "#ffffff",
    padding: "2%",
    textShadow: "0px 0px 5px black",
  },

  //   ----------Menu block--------------
  menuBlock: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
    padding: "3% 3% 0 3%",
  },
  MenuTitleContainer: {
    display: "flex",
    justifyContent: "start",
    margin: "2% 0px 0%",
    width: "80%",
  },
  mainMenuTitle: {
    fontWeight: "500",
  },
  mainMenuLink: {
    textDecoration: "none",
    color: "black",
  },

  mainMenuText: {
    textDecoration: "none",
    margin: "1% 0",
    width: "90%",
    fontWeight: 400,
    letterSpacing: "0",

    "&:hover": {
      color: THEME_COLOR.main_color,
      letterSpacing: "0",
    },
  },

  //   /-----------------------Popular Block------------
  popularBlock: {
    width: "100%",
    height: "100%",
  },

  popularTitleContainer: {
    display: "flex",
    justifyContent: "start",
    margin: "2% 0px 0%",
    width: "40%",
  },
  popularTitle: {
    fontWeight: "500",
  },

  popularLink: {
    textDecoration: "none",
  },

  popularText: {
    textDecoration: "none",
    margin: "1% 0",
    width: "80%",
    fontWeight: 400,
    color: "black",

    "&:hover": {
      color: THEME_COLOR.main_color,
      letterSpacing: "0",
    },
  },
  closeNavBarBtn: {
    position: "absolute !important",
    top: "1% !important",
    right: "1% !important",
    borderRadius: "20px !important",
    padding: "5px 10px !important",
  },
  closeNavBarIcon: {
    marginTop: "-2px",
  },
}));
