import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AdsGrid from './AdsGrid.js';
import CategoryExpansion from './CategoryExpansion.js';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
    header: {
        // marginLeft: '10%',
        // marginRight: '10%',
    },
  margin: {
    backgroundColor: '#ffbf00',
    textTransform: 'none',
  },
}));

export default function ClassifiedAds() {
    const classes = useStyles();

    return (
        <div className={classes.header}>
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
                                className={classes.margin}>
                                <Typography>Post an ad</Typography>
                            </Fab>
                        </div>
                    </div>
                    {/* <SimpleBreadcrumbs /> */}
                    <div style={{ display: 'flex', }}>
                        <Typography component="div" style={{ backgroundColor: '#eee', width: '75%' }}>
                            <AdsGrid />
                        </Typography>
                        <Typography component="div" style={{ backgroundColor: '#eee', width: '25%' }}>
                            <CategoryExpansion />
                        </Typography>
                    </div>
                </Container>
            </React.Fragment>
        </div>
    );
}
