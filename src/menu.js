//import React from 'react';
import React, {useState} from 'react';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import Sms from '@material-ui/icons/Sms';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import Group from '@material-ui/icons/Group';
import GroupAdd from '@material-ui/icons/GroupAdd';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import LocalShipping from '@material-ui/icons/LocalShipping';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import LinkRoundedIcon from '@material-ui/icons/LinkRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
import Home from '@material-ui/icons/Home';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';

import Addclients from './addclient';
import Shipments from './shipments';
import Homer from './home';
import Clients from './clients';
import Avatar from '@material-ui/core/Avatar';

import  {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
//import Carousel from 'react-bootstrap/Carousel'



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
      
    '& > *': {
      margin: theme.spacing(0),
    }
  },
    small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(14),
    height: theme.spacing(14),
  },
    person:{
        textAlign:'center',
        
    },
    person_image:{
        textAlign:'center',
        width:'8em',
        height:'8em',
        borderRadius: '4em',
        marginTop:'1em',
        contents:'center',
        marginLeft:'24%',
        marginBottom:'1em',
        verticalAlign:'50%',
    }
    ,
    badge:{
        margin:9,
        
    },
    sider:{
        right:0,
//        backgroundColor:'red',
        textAlign:'right',
        width:'100%'
    },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
//      marginLeft: drawerWidth,
       
    },
  
      
//       backgroundColor:'red',
  },
    
    search_sm:{
        marginTop: '-3em',
        [theme.breakpoints.up('xs')]: {
        display:'flex',
        },
         [theme.breakpoints.up('sm')]: {
       display:'none',
        }
        
    },
    search_lg:{
//        marginTop: '-3em',
       [theme.breakpoints.up('xs')]: {
        display:'none',
        },
        [theme.breakpoints.up('sm')]: {
       display:'flex',
        }
    }
    ,
 search: {
       
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor:'gray' ,
    margin:'1em' ,
    '&:hover': {
      backgroundColor: 'darkgray',
    },
    marginRight: theme.spacing(2),
    marginLeft: '10%',
    width: '80%',
//    marginTop: '-3em',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'white',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));



                                              
function ResponsiveDrawer(props) {
   

let data2=[['Logout',<LockRoundedIcon/>],['Setting',<SettingsRoundedIcon/>],['Terms and Conditions',<HelpRoundedIcon/>]]

    
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
//  const [menu,setMenu]=useState(data)
  const [menu2,setMenu2]=useState(data2)
    
  const handleDrawerToggle = () => (event)=> {
    console.log(event)
       setMobileOpen(!mobileOpen);                                                                                                
                                                                                                           
  };
           
            
  const drawer = (
           <div>
      
      <div className={classes.toolbar} />
     
      <div  className={classes.search_sm}>
       <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div >
                  </div>
                                                                                                           
     
          
         
      <List>
        {[["Home",<Home/>,"/"],["Clients",<Group/>,"/clients"], ["Shipments",<LocalShipping/>,"/shipments"], ["Send Bulk SMS",<Sms/>,"/sendsms"]].map((text, index) => (
           <Link to={text[2]}>
          <ListItem button key={text[0]}>
            <ListItemIcon> {text[1]} </ListItemIcon>
            <ListItemText primary={text[0]} />
          </ListItem>
        </Link>
        ))}
      </List>

   
        
   
          
      <Divider />
      <List>
        {menu2.map((text, index) => (
          <ListItem button key={text[0]}>
            <ListItemIcon>{index % 2 === 0 ? text[1] : text[1]}</ListItemIcon>
            <ListItemText primary={text[0]} />
          </ListItem>
        ))}
      </List>
    </div>

  );
           
                                 

  const container = window !== undefined ? () => window().document.body : undefined;
    
         
                                                                                     

  return (
        <Router>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
      
      
        <Toolbar>
      
      
      <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={()=>{setMobileOpen(!mobileOpen)}}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
      
      <div  className={classes.search_lg}>
       <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div >
                  </div>
      
     <div className={classes.logo}>
      <img src={require("./logo.svg")} />
     </div>
         
<div className={classes.root, classes.sider}>
      <Badge color="secondary" className={classes.badge} badgeContent={1}>
        <Sms/>
      </Badge> 
      <Badge color="secondary" className={classes.badge} badgeContent={1}>
        <ShoppingCartRoundedIcon />
      </Badge> 
      <Badge color="secondary" className={classes.badge} badgeContent={0}>
       
      </Badge>
      
    </div>
        
         

       
         
        </Toolbar>
      
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders"  >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
      
          <SwipeableDrawer
            
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            onOpen={()=>{setMobileOpen(!mobileOpen)}}
            open={mobileOpen}
//            close={handleDrawerToggle}
            onClose={()=>{setMobileOpen(!mobileOpen)} }
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </SwipeableDrawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <SwipeableDrawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </SwipeableDrawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
      
        <div className={classes.toolbar} />
        
   
            
        <Switch>
        
        <Route path="/clients">
            <Clients />
          </Route>
         <Route path="/addclient">
            <Addclients />
          </Route>
         <Route path="/shipments">
            <Shipments />
          </Route>
         <Route path="/sendsms">
            <Sms />
          </Route>
          <Route path="/">
            <Homer/>
          </Route> 
        
        
        </Switch>
        
         
     
      
      </main>
    </div>
</Router>
  );

}
 
ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;

