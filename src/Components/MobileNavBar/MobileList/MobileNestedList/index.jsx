import React, { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import { shape, number, oneOfType, string } from "prop-types";
import {
  makeStyles,
  ListSubheader,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const MobileNestedList = ({
  value = "",
  menuIndex = "",
  label = "",
  listMenus = "",
}) => {
  const classes = useStyles();

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  /**
   * @description Click on menu
   */
  const handleClick = (index) => () => {
    setOpen(!open);
    setActiveMenu(index);
  };

  /**
   * @description Redirect to menu page
   *
   * @param {String} path
   */
  const goToLink = (path) => () => {
    navigate(path);
  };

  return (
    <List
      key={`${value}-${menuIndex}`}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        Boolean(label) && (
          <ListSubheader component="div" id="nested-list-subheader">
            {label}
          </ListSubheader>
        )
      }
      className={classes.root}
    >
      {Object.values(listMenus).map(({ label, value, menus }, index) => {
        if (value === "EMPTY_BLOCK") return "";

        const menuList = Object.values(menus);

        return (
          <>
            <ListItem
              button
              onClick={handleClick(index)}
              key={`${index}-${label}`}
            >
              <ListItemText primary={label} />
              {open && activeMenu === index ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse
              in={open && activeMenu === index}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {menuList.map((listData, index) => {
                  const { label, path, value } = listData || {};
                  return (
                    <ListItem
                      key={`${value}-${index}`}
                      button
                      className={`${classes.nested} nest-text`}
                      onClick={goToLink(path)}
                    >
                      <ListItemText primary={label} />
                    </ListItem>
                  );
                })}
              </List>
            </Collapse>
          </>
        );
      })}
    </List>
  );
};

/**
 * @description Prop validation
 */
MobileNestedList.propTypes = {
  value: string,
  menuIndex: oneOfType([string, number]),
  label: string,
  listMenus: shape({}),
};

/**
 * @description Default Props
 */
MobileNestedList.defaultProps = {
  value: "",
  menuIndex: "" || 0,
  label: "",
  listMenus: {},
};

export default memo(MobileNestedList);
