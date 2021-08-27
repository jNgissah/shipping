
import React from 'react';
import Table from './table_shipment';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MoreVert from '@material-ui/icons/MoreVert';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      
        <IconButton aria-label="edit" onClick={handleClickOpen} style={{color:'orange', marginBottom:-20}}><MoreVert/> </IconButton>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         Shipment Details
        </DialogTitle>
        <DialogContent dividers>
      
            <Grid container  spacing={1}>
            <Grid item lg={5} md={5}  xm={5}>
      <Typography gutterBottom>
      Receiver's Name:
       </Typography>
            </Grid>
      
            <Grid item lg={7} md={7}  xm={7}>
       <Typography gutterBottom>
      name
       </Typography>
            </Grid>
      
      
       <Grid item lg={5} md={5}  xm={5}>
      <Typography gutterBottom>
      Sender's Name:
       </Typography>
            </Grid>
      
            <Grid item lg={7} md={7}  xm={7}>
       <Typography gutterBottom>
      name
       </Typography>
            </Grid>
      
      
       <Grid item lg={5} md={5}  xm={5}>
      <Typography gutterBottom>
      Receiver's Contact:
       </Typography>
            </Grid>
      
            <Grid item lg={7} md={7}  xm={7}>
       <Typography gutterBottom>
      name
       </Typography>
            </Grid>
      
      
      
       <Grid item lg={5} md={5}  xm={5}>
      <Typography gutterBottom>
      Receiver's Address:
       </Typography>
            </Grid>
      
            <Grid item lg={7} md={7}  xm={7}>
       <Typography gutterBottom>
      name
       </Typography>
            </Grid>
      
      
      
       <Grid item lg={5} md={5}  xm={5}>
      <Typography gutterBottom>
      Date Sent:
       </Typography>
            </Grid>
      
            <Grid item lg={7} md={7}  xm={7}>
       <Typography gutterBottom>
      name
       </Typography>
            </Grid>
      
      
      
       <Grid item lg={5} md={5}  xm={5}>
      <Typography gutterBottom>
      Status:
       </Typography>
            </Grid>
      
            <Grid item lg={7} md={7}  xm={7}>
       <Typography gutterBottom>
      name
       </Typography>
            </Grid>
      
      
       <Grid item lg={5} md={5}  xm={5}>
      <Typography gutterBottom>
      Payment:
       </Typography>
            </Grid>
      
            <Grid item lg={7} md={7}  xm={7}>
       <Typography gutterBottom>
      name
       </Typography>
            </Grid>
      
      
      
            </Grid>
      
      
      <h2 style={{textAlign:"center"}}>
      List of Items
      </h2>
      
      
      <Table/>
      <br/>
      <br/>
      <br/>
        </DialogContent>
        <DialogActions>
      save changes
        </DialogActions>
      </Dialog>
    </div>
  );
}





