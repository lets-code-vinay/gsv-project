import React, { memo, useState } from "react";
import { shape, string } from "prop-types";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { Add as AddIcon, Remove as RemoveIcon } from "@material-ui/icons";

import "./style.css";
import MobileNestedList from "./MobileNestedList";

const MobileList = ({ title, mobileSubMenus, menuIndex }) => {
  const [isExpanded, setExpand] = useState(false);
  const [nestedData, setNestedData] = useState({});

  /**
   * @description; Handling expansion of according
   */
  const handleExpand = () => {
    setExpand(!isExpanded);
    setNestedData(mobileSubMenus);
  };

  return (
    <>
      <Accordion
        disableGutters={false}
        onChange={handleExpand}
        key={menuIndex.toString()}
      >
        <AccordionSummary
          expandIcon={!isExpanded ? <AddIcon /> : <RemoveIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="menu-list">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails className="mobile-list-details">
          {/* TODO: menu Images for mobile nav-bar size 1110 * 476 */}
          <img
            src={mobileSubMenus.mobile_image}
            alt={mobileSubMenus.label}
            className="menu-list-image"
          />

          <MobileNestedList
            menuIndex={menuIndex}
            value={nestedData.value}
            label={nestedData?.label}
            listMenus={nestedData.menus}
          />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

/**
 * @description Props validation
 */
MobileList.propTypes = {
  title: string,
  mobileSubMenus: shape({}),
  menuIndex: string,
};

/**
 * @description Default Props validation
 *  */
MobileList.defaultProps = {
  title: "",
  mobileSubMenus: {},
  menuIndex: "",
};

export default memo(MobileList);
