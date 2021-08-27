import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Divider from '@material-ui/core/Divider';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
    
    price:{
        width:'45%',
        fontWeight:'bolder',
        fontSize:18
    },
    
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item  xs={12} sm={6} md={3}>
        
        
      <Card className={classes.root}>
      <CardHeader
       
        
        title="Shrimp and Chorizo Paella"
        subheader="MOQ : 28"
      />
      <CardMedia
        className={classes.media}
        image= {require("./img/user.jpg")}
        title="Paella dish"
      />
      <Divider/>
      <CardActions disableSpacing>
        
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> 
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="cart">
          <ShoppingCartRoundedIcon/>
        </IconButton>
        <IconButton className={classes.price}>
          <span>GHC 200 </span>
        </IconButton>
      </CardActions>
    </Card>
      </Grid>





      </Grid>
    </Box>

      
    
  );
}




