import React from "react";
import Popover from "@material-ui/core/Popover";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: "none",
  },
  paper: {
    width: "28%",
    marginTop: "-3%",
    padding: "1% 0%",
  },
}));

const CustomPopOver = ({
  title,
  open,
  onClose,
  actionType,
  msg,
  anchorEl,
  clientCount,
}) => {
  const classes = useStyles();

  const openPopOver = Boolean(anchorEl) && open;

  return (
    <div>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={openPopOver}
        anchorEl={anchorEl}
        anchorPosition={{ top: 200, left: 300 }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={onClose}
        disableRestoreFocus
        elevation={10}
        style={{
          maxWidth: clientCount >= 1 && clientCount < 3 ? "110%" : "100%",
          marginLeft: clientCount >= 1 && clientCount < 3 ? "8%" : "3%",
        }}
      >
        {msg}
      </Popover>
    </div>
  );
};

export default CustomPopOver;
