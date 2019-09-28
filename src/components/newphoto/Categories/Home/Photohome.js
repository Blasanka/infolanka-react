import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Caro from './Homecaro';
import { Link } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Grid container spacing={0} style={{backgroundColor:""}} >
        <Grid item xs={12} spacing={3} >
          <Paper className={classes.paper} style={{backgroundColor:" "}}>
            <img src="http://infolanka.com/photo/photo.gif"/>
          </Paper>
        </Grid>
        <Grid item xs={7} >
          <Paper className={classes.paper} style={{padding:50}}><p style={{color:"#000000" , fontSize:18}} > Warm greetings from Sri Lanka, the land of a thousand breathtaking spectacles. As you journey through these pages, we invite you to enjoy the lush foliage of the country side, the mountains full of tea gardens, the patchwork quiltlike rice paddies, the wholesome village life, the never ending stretches of coconut fringed beaches, the exquisite underwater coral scapes, cascading waterfalls, colorful festivals and pageantry, magnificient ancient cities, nearly half as old as time, the flowers in all their glory...nature's bounty in such abundance!! <br/>
Most of all, enjoy the images of Sri Lanka's most treasured resource...her people.
</p>
<p style={{color:"#000000" , fontSize:17}}>
A Y U B O W A N... as the Sri Lankan greeting says, May You enjoy the gift of long life. Enjoy your stay!! </p>
            <p style={{color:"#000000", fontSize:18}}>
            Designed and Maintained by Siri Ekanayake and Muditha Abhayagunawardhana
Please <Link href={'dudUrl'} style={{color:'red'}}> send </Link> us your comments, suggestions and criticisms.




            </p>
          </Paper>
        </Grid>
        <Grid item xs={5}  sm={5} >
          <Paper className={classes.paper} style={{padding:20}} ><Caro /></Paper>
        </Grid>
        <Grid item xs={12}  >
          <Paper className={classes.paper} style={{ padding:50 , backgroundColor:"#b3b3b3",fontSize:40}} ><center>Ad Space</center></Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}
