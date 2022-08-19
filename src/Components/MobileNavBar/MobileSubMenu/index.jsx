import React from "react";
import { Box, Drawer, Typography } from "@material-ui/core";
import { ArrowBack as ArrowBackIcon } from "@material-ui/icons";
import { bool, shape, func, string } from "prop-types";

import "./style.css";

import MobileMenuTopBar from "../MobileMenuTopBar";
import MobileList from "../MobileList";

const MobileSubMenu = ({
  isMobileSubMenuOpened = false,
  mobileSubMenus = {},
  onCloseMobileMenu,
  goToMobileMainMenu,
  title = "",
}) => {
  return (
    <Drawer
      open={isMobileSubMenuOpened}
      className="mobile-sub-menu-drawer"
      elevation={10}
      transitionDuration={1000}
      anchor="left"
      onClose={goToMobileMainMenu}
    >
      <MobileMenuTopBar onCloseMobileMenu={onCloseMobileMenu} />
      <Box className="mobile-sub-menu-container">
        <ArrowBackIcon
          className="mobile-menu-icon back-arrow-icon"
          onClick={goToMobileMainMenu}
        />
        <Typography className="mobile-sub-menu-title">{title}</Typography>
        <Typography></Typography>
      </Box>

      {Object.values(mobileSubMenus).map(({ label, menus }, index) => {
        return (
          <MobileList menuIndex={index} title={label} mobileSubMenus={menus} />
        );
      })}
    </Drawer>
  );
};

/**
 * @description Prop validation
 */
MobileSubMenu.propTypes = {
  isMobileSubMenuOpened: bool,
  mobileSubMenus: shape({}),
  onCloseMobileMenu: func,
  title: string,
};

/**
 * @description Default Props
 */
MobileSubMenu.defaultProps = {
  isMobileSubMenuOpened: false,
  mobileSubMenus: {},
  handleCloseMobileMenu: () => {},
  title: "",
};

export default MobileSubMenu;
