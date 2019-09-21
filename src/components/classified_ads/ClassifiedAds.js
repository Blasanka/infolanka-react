import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AdsGrid from './AdsGrid.js';
import CategoryExpansion from './CategoryExpansion.js';
import Fab from '@material-ui/core/Fab';
import { NavLink } from 'react-router-dom';
import AdsPagination from './Pagination.js';

const useStyles = makeStyles(theme => ({
    header: {
        // marginLeft: '10%',
        // marginRight: '10%',
    },
  margin: {
    backgroundColor: '#ffbf00',
    textTransform: 'none',
  },
  adContainer: {
      height: '150px',
      width: '95%',
      backgroundColor: '#fff',
      margin: '1rem',
  },
  adContainerVertical: {
      height: '875px',
      width: '95%',
      backgroundColor: '#fff',
      marginTop: '2rem',
  },
  adSpace: {
      color: 'grey',
      padding: '50% auto',
      textAlign: 'center',
      verticalAlign: 'middle',
      lineHeight: "150px"
  },
  adSpaceVertical: {
      color: 'grey',
      padding: '50% auto',
      textAlign: 'center',
      verticalAlign: 'middle',
      lineHeight: "875px"
  }
}));

export default function ClassifiedAds() {
    const classes = useStyles();

    return (
        <div className={classes.ex_hader}>
            <React.Fragment>
                <CssBaseline />
                <Container fixed>
                    <div style = {{ display: 'inline-block', width: '55%', overflow:'auto'}}>
                        <h4 style = {{ float: 'left'}}>Classified Ads</h4>
                        <div style = {{ float: 'right' }}>
                            <Fab
                                variant="extended"
                                size="medium"
                                color="secondary"
                                aria-label="add"
                                className={classes.margin}
                                component = { NavLink }
                                to= "/classified-ads/new-ad">
                                <Typography>Post an ad</Typography>
                            </Fab>
                        </div>
                    </div>
                    {/* <SimpleBreadcrumbs /> */}
                    <div style={{ display: 'flex', }}>
                        <Typography component="div" style={{ backgroundColor: '#eee', width: '75%' }}>
                            <AdsGrid />
                            <AdsPagination />
                            <div className={classes.adContainer}>
                                <p className={classes.adSpace}>Ad Space</p>
                            </div>
                        </Typography>
                        <Typography component="div" style={{ backgroundColor: '#eee', width: '25%' }}>
                            <CategoryExpansion />
                            <div className={classes.adContainerVertical}>
                                <p className={classes.adSpaceVertical}>Ad Space</p>
                            </div>
                        </Typography>
                    </div>
                </Container>
            </React.Fragment>
        </div>
    );
}
