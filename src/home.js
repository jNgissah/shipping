import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Table from './container_table'
import Add_container from './add_container'
import Img1 from './img/img1.jpg'
import Img2 from './img/img2.jpg'



const useStyles=makeStyles((theme)=>({
    
    
    
    caro:{ 
        
        backgroundRepeat: 'no-repeat', 
        backgroundSize:'cover',
        backgroundPosition:'center',  
        [theme.breakpoints.up('xs')]: {
        height:240,
            paddingTop: '15%'
    },   
      [theme.breakpoints.up('sm')]: {
      height:350,
          paddingTop: '15%'
         
    }
    }
}));



function Example(props){
    var items = [
        {
            name: "Random Name #1",
            img: Img1,
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            img: Img2,
            description: "Hello World!"
        }
    ]
    const classes = useStyles();

    return (
        <div>
        <Carousel swipe={true} animation={"slide"}  fullHeightHover={true}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
<br/>
<br/>
<br/>
 <Grid container spacing={3}>
     
     
     
      <Grid item lg={3} md={3} sm={3}>
          <Add_container/>
        
     </Grid>

     
     
     <Grid item lg={3} md={3} sm={3}>
         <Paper>
         <Grid container spacing={0}>
         <Grid item lg={6} md={6} sm={6} style={{backgroundImage:'linear-gradient(to right, #c31432, #240b36)'}}>
             ll
         </Grid>
         <Grid item lg={6} md={6} sm={6}>
            <h1>
             2387
            </h1>
<p>
             Number of Registered Clients
</p>
         </Grid>
         </Grid>
         
         </Paper>
     </Grid>


      <Grid item lg={3} md={3} sm={3}>
         <Paper>
         <Grid container spacing={0}>
         <Grid item lg={6} md={6} sm={6} style={{backgroundImage:'linear-gradient(to right, #f12711, #f5af19)'}}>
             ll
         </Grid>
         <Grid item lg={6} md={6} sm={6}>
            <h1>
             2387
            </h1>
<p>
            Number of Shipped Containers
</p>
         </Grid>
         </Grid>
         
         </Paper>
     </Grid>


      <Grid item lg={3} md={3} sm={3}>
         <Paper>
         <Grid container spacing={0}>
         <Grid item lg={6} md={6} sm={6} style={{backgroundImage:'linear-gradient(to right, #bc4e9c, #f80759)'}}>
             ll
         </Grid>
         <Grid item lg={6} md={6} sm={6}>
            <h1>
             2387
            </h1>
<p>
             Total Amount of money Paid
</p>
         </Grid>
         </Grid>
         
         </Paper>
     </Grid>



        


 </Grid>


<br/>
<br/>
<Table/>

</div>
    )
}

function Item(props)
{
        const classes = useStyles();

    return (
        <Paper className={classes.caro} style={{backgroundImage: `url(${props.item.img})`}}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
export default Example