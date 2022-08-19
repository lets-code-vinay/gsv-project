import React, { useState, memo, useMemo } from "react";

import SubNavBar from "../SubNavBar";
import MainNavBar from "../MainNavBar";
import SideBar from "../More/SideBarTab/index";
import "./style.css";

const StructuredNavbar = () => {
  const [isSubNavbarOpened, setSubNavbarOpen] = useState(false);
  const [subNavMenus, setSubNavMenus] = useState({});
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isActive, setActive] = useState({});
  const [navMenus, setNavMenus] = useState({});

  const isActiveMemo = useMemo(() => isActive, [isActive]);

  /**
   * @description Opening and passing data to submenus
   *
   * @param {Boolean} isOpen
   * @param {Object} menu
   */
  const handleSubNavbarOpen = ({ isOpen, menu }) => {
    setSubNavbarOpen(isOpen);
    setSubNavMenus(menu);
  };

  /**
   * @description Opening and passing data to nav menus
   *
   * @param {Object} menu
   */
  const handleNavMenus = (menus) => {
    setNavMenus(menus);
    setIsMoreOpen(false);
  };

  /**
   * @description Opening and passing data to More menus
   *
   * @param {Boolean} isMoreOpened
   */
  const handleMoreClick = ({ isMore }) => {
    setIsMoreOpen(isMore);
    setSubNavbarOpen(false);
  };

  /**
   * @description Closing sub Nav bar and menus through CB
   *
   * @param {Boolean} closeSubNavbar
   */
  const closeSubNavbar = (closeSubNavbar) => {
    setSubNavbarOpen(closeSubNavbar);
  };

  return (
    <>
      <MainNavBar
        onSubNavbarOpen={handleSubNavbarOpen}
        onMoreOpen={handleMoreClick}
        isActive={isActiveMemo}
        setActive={setActive}
        onNavMenus={setNavMenus}
        isSubSectionOpen={isSubNavbarOpened}
        isMoreOpen={isMoreOpen}
      />

      {/* ---- Sub nav bar --- */}
      {isSubNavbarOpened && !isMoreOpen && (
        <SubNavBar
          subNavMenus={subNavMenus}
          isSubNavbarOpened={isSubNavbarOpened}
          onNavMenus={handleNavMenus}
          navMenus={navMenus.menus}
          onCloseSubNavbar={closeSubNavbar}
        />
      )}

      {isMoreOpen && isSubNavbarOpened && (
        <SideBar isMoreOpen={isMoreOpen} onMoreClick={handleMoreClick} />
      )}
    </>
  );
};

export default memo(StructuredNavbar);
