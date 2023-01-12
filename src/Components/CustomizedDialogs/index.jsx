import * as React from "react";
import { string, node, func, bool, arrayOf } from "prop-types";

import {
  makeStyles,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

export default function CustomizedDialogs({
  title,
  open,
  onClose,
  actionType,
  msg,
}) {
  const classes = useStyles();

  /**
   * @description Closing Dialog box
   */
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <Dialog
        aria-describedby="alert-dialog-description"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="alert-dialog-title" onClose={handleClose}>
          {title && title}
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {msg}
          </DialogContentText>
        </DialogContent>

        {actionType.length > 0 && (
          <DialogActions>
            {actionType.includes("save") && (
              <Button autoFocus onClick={handleClose}>
                Save changes
              </Button>
            )}
          </DialogActions>
        )}
      </Dialog>
    </>
  );
}

/**
 * Prop validation
 */
CustomizedDialogs.propTypes = {
  title: string,
  open: bool,
  onClose: func.isRequired,
  actionType: arrayOf(string),
  msg: string.isRequired,
};

/**
 * Default props
 */
CustomizedDialogs.defaultProps = {
  title: "",
  open: false,
  onClose: () => {},
  actionType: false,
  msg: "",
};

/**
 * @description Handle Dialog title
 *
 * @param {Object} props
 * @returns
 */
function DialogBoxTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 5,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

/**
 * Prop validation
 */
DialogBoxTitle.propTypes = {
  children: node,
  onClose: func.isRequired,
};

/**
 * Styling of components
 */
const useStyles = makeStyles((theme) => ({}));
