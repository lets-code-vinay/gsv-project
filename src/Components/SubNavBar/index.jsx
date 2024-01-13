import React, { useState, memo } from "react";
import { object } from "prop-types";
import {
  Box,
  ClickAwayListener,
  makeStyles,
  Tab,
  Tabs,
} from "@material-ui/core";

import "./styles.css";
import NavbarMenus from "../NavbarMenus";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SubNavBar = ({
  subNavMenus = {},
  onNavMenus,
  isSubNavbarOpened = false,
  setSubNavbarOpen,
  navMenus,
  onCloseSubNavbar,
  nodeRef,
}) => {
  const classes = useStyles();

  const [menuListing, setMenuListing] = useState({});
  const [value, setValue] = useState(0);

  /**
   * @description Changing the values on button click
   *
   * @param {Object} _
   * @param {Number} newValue
   */
  const handleChange = (_, newValue) => {
    setValue(newValue);
    setMenuListing(Object.values(subNavMenus?.menus)[newValue] || menuListing);
    onNavMenus(Object.values(subNavMenus?.menus)[newValue] || menuListing);
  };

  /**
   * @description Closing sub Nav bar and menus by calling CB
   */
  const handleCloseMenu = (_) => {
    onCloseSubNavbar(true);
  };

  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      // onClickAway={handleClose}
    >
      <Box className={`${classes.headBar}  headBar`} ref={nodeRef}>
        {(!subNavMenus.isMore || isSubNavbarOpened) && (
          <Box
            sx={{ borderBottom: 1, borderColor: "divider" }}
            id={subNavMenus?.value}
            className={`${classes.subMenuBar}  subMenuBar`}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs"
              className={`${classes.subMenuTabContainer}  subMenuTabContainer`}
            >
              {Object.values(subNavMenus?.menus).map((menu, index) => {
                return (
                  <Tab
                    label={menu?.label}
                    {...a11yProps({ index })}
                    key={index}
                    className={` ${classes.sub_navbar_text} sub_navbar_text`}
                  />
                );
              })}
            </Tabs>
          </Box>
        )}

        {/* --- Navbar menus ---- */}
        {isSubNavbarOpened && !subNavMenus.isMore && (
          <NavbarMenus navMenus={navMenus} onCloseMenu={handleCloseMenu} />
        )}
      </Box>
    </ClickAwayListener>
  );
};

/**
 * Props validation
 */
SubNavBar.propTypes = {
  subNavMenus: object,
};

/**
 * Default Props
 */
SubNavBar.defaultProps = {
  subNavMenus: {},
};

export default memo(SubNavBar);

const useStyles = makeStyles((theme) => ({
  headBar: {
    position: "fixed",
    background: "white",
    top: "10%",
    left: "0",
    width: "100%",
    zIndex: 80,
  },

  subMenu: {
    cursor: "pointer",
  },

  sub_navbar_text: {
    whiteSpace: "initial",
  },

  subMenuBar: {
    display: "inline",
    borderBottom: "1px solid rgb(13,39,77, 0.5) ",
    whiteSpace: "break-spaces",
  },
}));
