import React, { useState } from "react";
import { bool, func } from "prop-types";
import { Box, Button, Drawer, Typography } from "@material-ui/core";
import { TrendingFlat as TrendingFlatIcon } from "@material-ui/icons";

import "./style.css";

import { NAVBAR_MENUS } from "../../../Configs/NavBar/navbar";
import MobileSubMenu from "../MobileSubMenu";
import MobileMenuTopBar from "../MobileMenuTopBar";

const MainMobileMenu = ({
  isMobileNavbarOpened = false,
  onCloseMobileMenu,
}) => {
  const [isMobileSubMenuOpened, setMobileSubMenuOpen] = useState(false);
  const [mobileSubMenus, setMobileSubmenus] = useState({});
  const [mobileSubMenuLabel, setMobileSubmenuLabel] = useState("");

  /**
   * @description: Closing drawer
   */
  const handleCloseMobileMenu = () => {
    setMobileSubMenuOpen(false);

    onCloseMobileMenu(true);
  };

  /**
   * @description: Open Mobile sub menu drawer
   */
  const handleMobileSubMenuOpen = (menus, label) => () => {
    setMobileSubMenuOpen(true);
    setMobileSubmenuLabel(label);
    setMobileSubmenus(menus);
  };

  /**
   * @description: Close Mobile sub menu drawer
   */
  const handleGoMobileMainMenu = () => {
    setMobileSubMenuOpen(false);
    setMobileSubmenuLabel("");
    setMobileSubmenus({});
  };

  return (
    <Drawer
      className="main-mobile-menu"
      open={isMobileNavbarOpened}
      onClose={handleCloseMobileMenu}
      transitionDuration={1000}
    >
      <MobileMenuTopBar onCloseMobileMenu={handleCloseMobileMenu} />

      <Box className="mobile-menu-container">
        {Object.values(NAVBAR_MENUS).map(
          ({ label, isMore, value, menus }, index) => {
            return (
              <Box
                className="mobile-menu-list"
                key={`${value}-${index}`}
                onClick={handleMobileSubMenuOpen(menus, label)}
              >
                <Typography className="mobile-menu-text">{label}</Typography>
                <TrendingFlatIcon className="mobile-menu-arrow-icon" />
              </Box>
            );
          }
        )}

        <MobileSubMenu
          isMobileSubMenuOpened={isMobileSubMenuOpened}
          mobileSubMenus={mobileSubMenus}
          onCloseMobileMenu={handleCloseMobileMenu}
          goToMobileMainMenu={handleGoMobileMainMenu}
          title={mobileSubMenuLabel}
        />
      </Box>
      <Button className="mobile-menu-button">Contact</Button>
    </Drawer>
  );
};

/**
 * @description: Props validation
 */
MainMobileMenu.propTypes = {
  isMobileNavbarOpened: bool,
  onCloseMobileMenu: func,
};

/**
 * @description: Default Props
 */
MainMobileMenu.defaultProps = {
  isMobileNavbarOpened: false,
  onCloseMobileMenu: () => {},
};

export default MainMobileMenu;
