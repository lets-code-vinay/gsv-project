import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dialog, IconButton, styled, Button,Box, DialogActions, makeStyles, DialogTitle, DialogContent, Typography } from "@material-ui/core";

// import { styled } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            <Typography>

                {children}
            </Typography>
            <Typography>
                {onClose ? (
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            right: "20",
                            top: "8",
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        X
                        {/* <CloseIcon /> */}
                    </IconButton>
                ) : null}
            </Typography>

        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function DialogComponent(props) {

    const { 
        handleOpenDialog,
         heading, para, 
         setOpenDialog, 
         handleCloseDialog, 
         openDialog, 
         closeDialog,
         company,
         author,
         image,
         designation, 
         title } = props
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setOpenDialog(false)
    };

    return (
        <div>
            <Typography variant="outlined" onClick={handleClickOpen} sx={{ border: "none", padding: '0px' }}>
                {title}
            </Typography>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open || openDialog}
            >
                {/* <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {heading}
                </BootstrapDialogTitle> */}
                <div style={{ display: "flex", justifyContent: "space-between", padding: '20px' }}>
                    <Typography style={{ fontSize: "20px", fontWeight: "600" }} >
                        {heading}
                    </Typography>
                    <Button style={{ cursor: "pointer", fontSize: "20px", padding: "0px" }} onClick={handleClose}>X</Button>
                </div>

                <DialogContent dividers>
                    <Typography gutterBottom style={{ overflowY: "auto" }}>
                        {para}
                    </Typography>
                    <Typography
                          variant="body1"
                        //   className={`${classes.testimonialCardUserLessThan3} testimonialCardUserLessThan3`}
                        >
                          <strong>{author},</strong> {designation}-{company}
                        </Typography>
                        <Box
                        //   className={`${classes.lessThan3LogoContainer} lessThan3LogoContainer`}
                        >
                          <img
                            // className={`${classes.testimonialImageLessThan3} testimonialImageLessThan3`}
                            src={image}
                            alt=''
                          />
                        </Box>
                </DialogContent>
                {/* <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Save changes
                    </Button>
                </DialogActions> */}
            </BootstrapDialog>
        </div>
    );
}