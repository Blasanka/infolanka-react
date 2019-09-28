import React from 'react';
import {Fragment} from 'react';
import MaterialTable, { MTableToolbar ,TablePagination} from 'material-table';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import J1 from './jokeall/Joke1';
import J2 from './jokeall/Joke2';
import J3 from './jokeall/Joke3';
import J4 from './jokeall/Joke4';
import J5 from './jokeall/Joke5';
import J6 from './jokeall/Joke6';
import J7 from './jokeall/Joke7';
import J8 from './jokeall/Joke8';
import J9 from './jokeall/Joke9';
import J10 from './jokeall/Joke10';
import J11 from './jokeall/Joke11';
import J12 from './jokeall/Joke12';
import J13 from './jokeall/Joke13';
import J14 from './jokeall/Joke14';
import J15 from './jokeall/Joke15';
import J16 from './jokeall/Joke16';
import J17 from './jokeall/Joke17';
import J18 from './jokeall/Joke18';
import Fab from '@material-ui/core/Fab';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
//import {Helmet} from 'react-helmet';
//import Add from './Addbtn';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  header: {
      // marginLeft: '10%',
      // marginRight: '10%',
  },
margin: {
  backgroundColor: '#4cc6d4',
  textTransform: 'none',
},
}));

export default function MaterialTableDemo() {
  const classes = useStyles();

  const [state] = React.useState({
    columns:[
        { title: 'Subject', field: 'sub',
        cellStyle: {
         fontSize:18
        },
        },
        { title: 'Name', field: 'name',
        cellStyle: {
          fontSize:18
         }, },
        { title: 'Date', field: 'date', type : 'numeric',
        cellStyle: {
          fontSize:18
         }, },
        
      
      ],
      data:[
          
        { sub: 'HOLLY PARROTS', name: 'Ranjan Weerasinghe', date: '7/7/2018' , joke:<J1 />},
        { sub: 'ROYAL JOB INTERVIEW', name: 'Ranjan Weerasinghe', date: '6/14/2018' , joke:<J2 />},
        { sub: 'Johnny’s table manners', name: 'Ranjan Weerasinghe', date: '6/6/2018' , joke:<J3 />},
        { sub: 'Golf Resort Vacation - Everything For $1', name: 'Ranjan Weerasinghe', date: '5/25/2018' , joke:<J4 />},
        { sub: 'Snoring Dog', name: 'Ranjan Weerasinghe', date: '5/23/2018' , joke:<J5 />},
        { sub: 'Expectations...!', name: 'Ranjan Weerasinghe', date: '12/11/2015' , joke:<J6 />},
        { sub: 'Machine that catches thieves', name: 'Nimal', date: '5/15/2014' , joke:<J7 />},
        { sub: 'Irish blonde', name: 'Ranjan Weerasinghe', date: '1/14/2014' , joke:<J8 />},
        { sub: 'Dying man', name: 'H.P.R.Gunawardena', date: '12/29/2013' , joke:<J9 />},
        { sub: 'Diamond ring', name: 'H.P.R.Gunawardena', date: '12/29/2013' , joke:<J10 />},
        { sub: 'Mr Sam at the medical clinic', name: 'Najimudeen ', date: '12/29/2013' , joke:<J11 />},
        { sub: 'Modern Love ', name: 'H.P.R.Gunawardena', date: '12/29/2013' , joke:<J12 />},
        { sub: 'Babys First Doctor Visit', name: 'H.P.R.Gunawardena', date: '11/29/2013' , joke:<J13 />},
        { sub: 'Mixed emotions', name: 'Davidson ', date: '11/29/2013' , joke:<J14 />},
        { sub: 'Having sex on a Railway track (Audult)', name: 'Sarat Gamini', date: '10/29/2013' , joke:<J15 />},
        { sub: 'Hot and Cold Sex', name: 'H.P.R.Gunawardena', date: '10/29/2013' , joke:<J16 />},
        { sub: 'Kanjibhai (Gujarati Joke)', name: 'H.P.R.Gunawardena', date: '10/29/2013' , joke:<J17 />},
        { sub: 'The Rope', name: 'H.P.R.Gunawardena', date: '9/29/2013' , joke:<J18 />},
      ],
      
      
      
  });
  
  return (
   
    <Fragment className={classes.header} style={{}}>
      <h5 style = {{textAlign:"center",padding:5,}}>
      We would like to hear your favorite joke! If you have a joke that you think everybody would like to read then post it here. Your participation is greatly appreciated.
      </h5>
      <div style = {{ textAlign:'center',padding:10, }}>
                            <Fab
                                variant="primary"
                                size="medium"
                                color="red"
                                aria-label="add"
                                className={classes.margin}
                                component = { NavLink }
                                to= "/joke_page/form">
                                <Typography>Add you Jokes</Typography>
                            </Fab>
                        </div >
                        <div style={{textAlign:"center"}}>
                        <h5 style={{display:"inline"}}>Warning:</h5> <h5  style={{display:"inline",color:"red"}}> &nbsp; Some of these jokes contain adult content and anyone under 18 should be accompanied by an adult!</h5>
                        </div> <hr />
    <MaterialTable style={{padding:100 ,paddingBottom:25
      }}
    
      title=  "Enjoy below"
     
      columns={state.columns}
      data={state.data}
      detailPanel={[
        {
          tooltip: 'View',
          render: rowData => {
            return (
              <div style={{
                fontSize: 18,
                backgroundColor: '#ffffcc',
                padding:20
              }}
              >
                  {rowData.joke}
              </div>
            )
          },
        },
       
        
      ]}
      options={{
        rowStyle: {
          backgroundColor: '#EEE',
        },
        headerStyle: {
          backgroundColor: '#01579b',
          color: '#ffffff',
          fontSize: 20,
        },
        
        
      }}
      
      components={{
        Toolbar: props => (
            <div style={{ backgroundColor: '#e8eaf5' }}>
                <MTableToolbar {...props} />
            </div>
        ),
      }}
      localization={{
        pagination:{
          labelRowsSelect:'Choose the row size'
        }
      }}
        />
     <Grid item xs={12}  >
          <Paper className={classes.paper} style={{ padding:50 , backgroundColor:"#b3b3b3",fontSize:40}} ><center>Ad Space</center></Paper>
        </Grid>
   </Fragment>
  );
}
