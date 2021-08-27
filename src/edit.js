
import React from 'react';
import { withStyles,  makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Edit from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '30ch',
    },
  },
}));

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
        const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      
        <IconButton aria-label="edit" onClick={handleClickOpen} style={{color:'blue', marginBottom:-20}}> <Edit/> </IconButton>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         Edit Client Information
        </DialogTitle>
        <DialogContent dividers>
          
      
      
      
      <form className={classes.root} noValidate autoComplete="off">
     
      <div>
      <h2 style={{textAlign:"center"}}>
      ID: SH323232
      </h2>
        <TextField
          id="outlined-multiline-flexible"
          label="First Name"
          multiline
          maxRows={4}
          value="First Name"
          variant="outlined"
        /> <TextField
          id="outlined-multiline-flexible"
          label="Other Name"
          multiline
          maxRows={4}
          value="Other Name"
          variant="outlined"
        />
          <TextField
          id="outlined-multiline-flexible"
          label="Lastname"
          multiline
          maxRows={4}
          value="Lastname"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Contact"
          multiline
          maxRows={4}
          value="Contact"
          variant="outlined"
        />
          <TextField
          id="outlined-multiline-flexible"
          label="Address"
          multiline
          maxRows={4}
          value="Address"
          variant="outlined"
        />
        
      </div> 
      
    
    </form>
      
      
      
      
      
      
      </DialogContent>
        <DialogActions>
      save changes
        </DialogActions>
      </Dialog>
    </div>
  );
}





