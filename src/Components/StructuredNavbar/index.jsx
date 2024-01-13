import React, { useState, memo, useMemo, useEffect, useRef, lazy } from "react";
import { number } from "prop-types";

import SubNavBar from "../SubNavBar";
import MainNavBar from "../MainNavBar";
import SideBar from "../More/SideBarTab/index";
import "./style.css";

const StructuredNavbar = ({ scrollPosition }) => {
  const [isSubNavbarOpened, setSubNavbarOpen] = useState(false);
  const [subNavMenus, setSubNavMenus] = useState({});
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isActive, setActive] = useState({});
  const [navMenus, setNavMenus] = useState({});

  const isActiveMemo = useMemo(() => isActive, [isActive]);

  const nodeRef = useRef(null);

  const handleClickOutside = (event) => {
    if (nodeRef.current && !nodeRef.current.contains(event.target)) {
      return setSubNavbarOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

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
    setSubNavbarOpen(false);
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
        nodeRef={nodeRef}
        scrollPosition={scrollPosition}
      />

      {/* ---- Sub nav bar --- */}
      {isSubNavbarOpened && !isMoreOpen && (
        <SubNavBar
          subNavMenus={subNavMenus}
          isSubNavbarOpened={isSubNavbarOpened}
          onNavMenus={handleNavMenus}
          navMenus={navMenus.menus}
          setSubNavbarOpen={setSubNavbarOpen}
          nodeRef={nodeRef}
          onCloseSubNavbar={closeSubNavbar}
        />
      )}

      {isMoreOpen && isSubNavbarOpened && (
        <SideBar
          isMoreOpen={isMoreOpen}
          onMoreClick={handleMoreClick}
          onCloseMenus={closeSubNavbar}
        />
      )}
    </>
  );
};

/**
 * @description Prop validation
 */
StructuredNavbar.propTypes = {
  scrollPosition: number,
};

/**
 * @description Prop validation
 */
StructuredNavbar.defaultProps = {
  scrollPosition: 0,
};

export default memo(StructuredNavbar);
