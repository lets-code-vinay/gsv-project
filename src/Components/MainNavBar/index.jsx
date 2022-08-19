import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { bool, func } from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import { MoreVert as MoreIcon } from "@material-ui/icons";
import { BiUser, BiSearchAlt2, BiGlobe } from "react-icons/bi";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Typography,
  Box,
} from "@material-ui/core";

import Logo from "../../Assets/Images/white-logo.png";

import { NAVBAR_MENUS } from "../../Configs/NavBar/navbar";

import "./style.css";
import MobileNavBar from "../MobileNavBar";

const MainNavBar = ({
  onSubNavbarOpen,
  onMoreOpen,
  setActive,
  isActive,
  onNavMenus,
  isSubSectionOpen,
  isMoreOpen,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [isMobileNavbarOpened, setMobileNavbarOpen] = useState(false);

  /**
   * @description: Handle mobile menus on icon click
   *
   * @param {Object} event
   */
  const handleMobileMenuOpen = (_) => {
    setMobileNavbarOpen(true);
  };

  /**
   * @description: Closing mobile menus
   */
  const handleMobileMenuClose = () => {
    setMobileNavbarOpen(false);
  };

  const handleMainNavbarClick = (menu) => (event) => {
    navigate("/");
    onMoreOpen({ isMore: menu?.isMore });

    onSubNavbarOpen({
      isOpen: true,
      menu,
      event,
    });
    setActive(menu);
    onNavMenus(Object.values(menu?.menus)[0]);
  };

  // --- Desktop Section ---
  return (
    <div className={`${classes.Navbar} Navbar`} id="home">
      <AppBar
        position="static"
        className={`${classes.grow} appBar`}
        elevation={0}
        style={{
          backgroundColor:
            isSubSectionOpen || isMoreOpen ? "#0D274D" : "transparent",
        }}
      >
        <Toolbar className={`${classes.appBarChild} appBarChild`}>
          <Box
            edge="start"
            className={`${classes.menuButton} display`}
            color="inherit"
          >
            <img
              src={Logo}
              alt="main-logo"
              className={`${classes.logo} logo-1`}
            />
            <div className={`${classes.sectionDesktop} sectionDesktop`}>
              {Object.values(NAVBAR_MENUS).map((menu, i) => {
                return (
                  <MenuItem
                    onClick={handleMainNavbarClick(menu)}
                    style={{
                      borderBottom:
                        isSubSectionOpen && isActive.value === menu.value
                          ? "3px solid #ffff"
                          : "3px solid transparent",
                    }}
                    key={i + "-" + menu.value}
                    className={`${classes.sectionDesktopMenus} sectionDesktopMenus`}
                  >
                    <Typography
                      variant={"body1"}
                      className={`${classes.navbar_text} navbar_text`}
                    >
                      {menu.label}
                    </Typography>
                  </MenuItem>
                );
              })}
            </div>
          </Box>
          <Box className="nav-bar-grow"></Box>
          <Box className="nav-bar-icons">
            <BiSearchAlt2 className="search" />
            <BiUser className="profile" />
            <BiGlobe className="globe" />
          </Box>

          {/* To open icons */}
          <>
            <IconButton
              className={`${classes.sectionMobile} sectionMobile`}
              aria-label="show more"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon className={`${classes.mobile3Dots} mobile3Dots`} />
            </IconButton>

            <MobileNavBar
              isMobileNavbarOpened={isMobileNavbarOpened}
              onCloseMobileMenu={handleMobileMenuClose}
            />
          </>
        </Toolbar>
      </AppBar>
    </div>
  );
};

/**
 * Props validation
 */
MainNavBar.propsType = {
  onSubNavbarOpen: func.isRequired,
  onNavMenus: func,
  isSubSectionOpen: bool,
};

/**
 *  Default Props
 */
MainNavBar.defaultProps = {
  onSubNavbarOpen: () => {},
  onNavMenus: () => {},
  isSubSectionOpen: false,
};

export default MainNavBar;

const useStyles = makeStyles((theme) => ({
  Navbar: {
    position: "absolute",
    top: "0",
    width: "100%",
    background: "#1e44714d",
  },
  grow: {
    flexGrow: 0.5,
  },

  logo: {
    "&:hover": {
      cursor: "pointer",
    },
  },

  navbar_text: {
    color: "#ffffff",
  },

  navbar_text_mobile: {
    fontSize: "1.3rem",
    marginRight: "10%",
    marginTop: "-12%",
    paddingTop: "10%",
    color: "black",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  login_button: {
    fontSize: "1.3rem",
    marginRight: "5%",
    width: "150px",
    textAlign: "center",
    backgroundColor: "#0C1B29",
    "&:hover": {
      backgroundColor: "#080C1F",
    },
    padding: "5px",
    borderRadius: "32px",
    color: "#ffffff",
    fontWeight: "600",
  },

  // sectionDesktop: {
  //   display: "none",
  //   [theme.breakpoints.up("md")]: {
  //     display: "flex",
  //   },
  // },

  // sectionMobile: {
  //   display: "flex",
  //   [theme.breakpoints.up("md")]: {
  //     display: "none",
  //   },
  // },

  mobile3Dots: {
    color: "#ffffff",
  },
}));
