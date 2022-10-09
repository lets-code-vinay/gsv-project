import React from "react";
import { Box } from "@material-ui/core";
import { Close as CloseIcon, Search as SearchIcon } from "@material-ui/icons";

import BlueLogo from "../../../Assets/Images/blueLogo.png";
import { func } from "prop-types";

const MobileMenuTopBar = ({ onCloseMobileMenu }) => {
  return (
    <Box className="mobile-menu-top-bar">
      <SearchIcon
        className="mobile-menu-icon"
        disabled="true"
        disableFocusRipple="true"
        disableRipple="true"
      />
      <img src={BlueLogo} alt="Logo in blue" className="mobile-menu-logo" />
      <CloseIcon
        className="mobile-menu-icon close-icon"
        onClick={onCloseMobileMenu}
      />
    </Box>
  );
};

/**
 * @description: Props validation
 */
MobileMenuTopBar.propTypes = {
  handleCloseMobileMenu: func,
};

/**
 * @description: Default Props
 */
MobileMenuTopBar.defaultProps = {
  handleCloseMobileMenu: () => {},
};

export default MobileMenuTopBar;
