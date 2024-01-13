import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";

import { RiFacebookBoxFill } from "react-icons/ri";
import { FiYoutube } from "react-icons/fi";
import { FaTwitterSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

import "./style.css";

import Logo from "../../Assets/Images/white-logo.png";
import { THEME_COLOR } from "../../Configs/Theme";
import FooterBottom from "../FooterBottom";

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={`${classes.footer} footer`}>
        <Grid container className={`${classes.footerBody} footerBody`}>
          <Grid item xs={12} sm={6} md={4} lg={3} id="grid">
            <img
              src={Logo}
              alt={"logo of company"}
              className={`${classes.footerLogo} footerLogo`}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={3} id="grid">
            <Typography
              variant={"h5"}
              className={`${classes.menuListTitle} menuListTitle`}
            >
              Menu
            </Typography>
            <Box className={`${classes.menuList} menuList`}>
              <a
                href="/contact-us"
                className={`${classes.menuListLink} menuListLink`}
              >
                <Typography
                  variant={"body1"}
                  className={`${classes.menuListText} menuListText`}
                >
                  About
                </Typography>
              </a>
            </Box>
            <Box className={`${classes.menuList} menuList`}>
              <a
                href="/contact-us"
                className={`${classes.menuListLink} menuListLink`}
              >
                <Typography
                  variant={"body1"}
                  className={`${classes.menuListText} menuListText`}
                >
                  Our Presence
                </Typography>
              </a>
            </Box>
            <Box className={`${classes.menuList} menuList`}>
              <a
                href="/contact-us"
                className={`${classes.menuListLink} menuListLink`}
              >
                <Typography
                  variant={"body1"}
                  className={`${classes.menuListText} menuListText`}
                >
                  Industries
                </Typography>
              </a>
            </Box>
            <Box className={`${classes.menuList} menuList`}>
              <a
                href="/contact-us"
                className={`${classes.menuListLink} menuListLink`}
              >
                <Typography
                  variant={"body1"}
                  className={`${classes.menuListText} menuListText`}
                >
                  Career
                </Typography>
              </a>
            </Box>
          </Grid>

          <Grid item xs={6} sm={6} md={4} lg={3} id="grid">
            <Typography
              variant={"h5"}
              className={`${classes.menuListTitle} menuListTitle`}
            >
              Support
            </Typography>

            <Box className={`${classes.menuList} menuList`}>
              {/* <FaQuestion className={`${classes.menuListIcon} menuListIcon`} /> */}
              <a
                href="/contact-us"
                className={`${classes.menuListLink} menuListLink`}
              >
                <Typography
                  variant={"body1"}
                  className={`${classes.menuListText} menuListText`}
                >
                  FAQ
                </Typography>
              </a>
            </Box>
            <Box className={`${classes.menuList} menuList`}>
              <a
                href="/contact-us"
                className={`${classes.menuListLink} menuListLink`}
              >
                <Typography
                  variant={"body1"}
                  className={`${classes.menuListText} menuListText`}
                >
                  Terms & Conditions
                </Typography>
              </a>
            </Box>
            <Box className={`${classes.menuList} menuList`}>
              <a
                href="/contact-us"
                className={`${classes.menuListLink} menuListLink`}
              >
                <Typography
                  variant={"body1"}
                  className={`${classes.menuListText} menuListText`}
                >
                  Privacy Policy
                </Typography>
              </a>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} id="grid">
            <Typography
              variant={"h5"}
              className={`${classes.menuListTitle} menuListTitle`}
            >
              Contact Us
            </Typography>
            <Typography
              variant={"h6"}
              className={`${classes.menuListTitleHeadOffice} menuListTitleHeadOffice`}
            >
              Head Office:
            </Typography>

            <Typography
              variant={"body1"}
              className={`${classes.menuListTextContact} menuListTextContact`}
            >
              90B, Delhi - Jaipur Expy, Udyog Vihar, Sector 18, Gurugram,
              Haryana (India) 122008
            </Typography>
            <br />
            <Typography
              variant={"body1"}
              className={`${classes.menuListTextContact} menuListTextContact`}
            >
              Mobile: +91 7065-478-478
            </Typography>
            <Typography
              variant={"body1"}
              className={`${classes.menuListTextContact} menuListTextContact`}
            >
              Phone: +1-646-350-8962(USA)
            </Typography>
            <Typography
              variant={"body1"}
              className={`${classes.menuListTextContact} menuListTextContact`}
            >
              Email: info@gsvsystems.com
            </Typography>

            <Box className={`${classes.socialMedia} socialMedia`}>
              <a
                href="https://www.facebook.com/gsvsystems/"
                target="blank"
                className={`${classes.socialIcon} socialIcon`}
              >
                <RiFacebookBoxFill />
              </a>
              <a
                href="/contact-us"
                className={`${classes.socialIcon} socialIcon`}
              >
                <FaTwitterSquare />
              </a>
              <a
                href="/contact-us"
                className={`${classes.socialIcon} socialIcon`}
              >
                <FaInstagram />
              </a>
              <a
                href="https://in.linkedin.com/company/gsv-systems-llp"
                target="blank"
                className={`${classes.socialIcon} socialIcon`}
              >
                <FaLinkedin />
              </a>
              <a
                href="/contact-us"
                className={`${classes.socialIcon} socialIcon`}
              >
                <FiYoutube />
              </a>
            </Box>
          </Grid>
          <Grid container style={{ marginTop: "2%" }}>
            <Grid item xs={12} sm={6} md={4} lg={3} id="grid">
              <Typography
                variant={"h5"}
                className={`${classes.menuListTitle} menuListTitle`}
              >
                Himachal Pradesh
              </Typography>
              <Typography
                variant={"body1"}
                className={`${classes.menuListTextContact} menuListTextContact`}
              >
                Block #24, Set No. 549, Sector-3 New Shimla, Shimla, Himachal
                Pradesh 171009
              </Typography>
              <br />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} id="grid">
              <Typography
                variant={"h5"}
                className={`${classes.menuListTitle} menuListTitle`}
              >
                Jharkhand
              </Typography>
              <Typography
                variant={"body1"}
                className={`${classes.menuListTextContact} menuListTextContact`}
              >
                199/A, Mandaliya Nagar, Panchwati Garden Lane, Bariatu, Ranchi,
                Jharkhand 834009
              </Typography>
              <br />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} id="grid">
              <Typography
                variant={"h5"}
                className={`${classes.menuListTitle} menuListTitle`}
              >
                USA
              </Typography>
              <Typography
                variant={"body1"}
                className={`${classes.menuListTextContact} menuListTextContact`}
              >
                Liberty Court, Piscataway, New Jersey, 08854, USA
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} id="grid">
              <Typography
                variant={"h5"}
                className={`${classes.menuListTitle} menuListTitle`}
              >
                Europe
              </Typography>
              <Typography
                variant={"body1"}
                className={`${classes.menuListTextContact} menuListTextContact`}
              >
                Vredenoord, 1852 WL Heiloo, The Netherlands
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <FooterBottom />
    </>
  );
};

export default Footer;

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: THEME_COLOR.main_color,
  },
  footerBody: {
    padding: "2%",
    width: "80%",
    margin: "auto",
  },
  footerLogo: {
    width: "70%",
  },
  menuListTitle: {
    fontSize: "1.6rem",
    color: THEME_COLOR.color_3,
    width: "80%",
    marginBottom: "10px",
    fontWeight: "600",
  },
  menuListTitleHeadOffice: {
    fontSize: "1rem",
    color: THEME_COLOR.color_5,
    width: "80%",
    marginBottom: "10px",
    fontWeight: "600",
  },

  menuList: {
    display: "flex",
    justifyContent: "start",
  },
  menuListIcon: {
    color: "white",
    fontSize: "1rem",
    marginRight: "10px",
    marginTop: "3px",
    "&:hover": {
      color: THEME_COLOR.color_5,
      fontSize: "1.2rem",
    },
  },
  menuListLink: {
    textDecoration: "none",
    color: "white",
  },

  menuListText: {
    listDecoration: "none",
    marginLeft: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    color: THEME_COLOR.popular_color,

    "&:hover": {
      color: THEME_COLOR.color_5,
      fontSize: "1.2rem",
    },
  },
  menuListTextContact: {
    listDecoration: "none",
    marginLeft: "5px",
    fontSize: "1rem",
    width: "80%",
    cursor: "default",
    color: THEME_COLOR.popular_color,

    "&:hover": {
      color: THEME_COLOR.color_5,
    },
  },
  socialMedia: {
    width: "80%",
    display: "flex",
    justifyContent: "start",
  },
  socialIcon: {
    fontSize: "1.5rem",
    color: "white",
    marginRight: "15px",
    "&:hover": {
      color: THEME_COLOR.color_5,
    },
  },
}));
