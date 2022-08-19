import React from "react";
import { bool } from "prop-types";
import MainMobileMenu from "./MainMobileMenu";
import { func } from "prop-types";

const MobileNavBar = ({ isMobileNavbarOpened = false, onCloseMobileMenu }) => {
  /**
   * @description: Closing drawer
   */
  const handleCloseMobileMenu = () => {
    onCloseMobileMenu(true);
  };

  return (
    <MainMobileMenu
      isMobileNavbarOpened={isMobileNavbarOpened}
      onCloseMobileMenu={handleCloseMobileMenu}
    />
  );
};

/**
 * @description Prop validation
 */
MobileNavBar.propTypes = {
  isMobileNavbarOpened: bool,
  onCloseMobileMenu: func,
};

/**
 * @description Default Props
 */
MobileNavBar.defaultProps = {
  isMobileNavbarOpened: false,
  onCloseMobileMenu: () => {},
};

export default MobileNavBar;
