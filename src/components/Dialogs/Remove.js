import React, { Fragment } from 'react';

import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Remove = ({removeItem,title,desciption}) => {
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
              <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}  onClick={handleClickOpen}>
       Delete
      </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle color="secondary" id="alert-dialog-title"><DeleteIcon />{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {desciption}
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Disagree
          </Button>
          <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={removeItem}>
                                    Delete
                        </Button>
                </DialogActions>
            </Dialog>

        </Fragment>
    )
}

export default Remove
