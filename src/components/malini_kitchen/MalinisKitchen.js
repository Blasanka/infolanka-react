import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import RecipeList from './RecipeList.js';
import SubNavigationTabs from './SubNavigationTabs.js';
import RecipeTypeGridList from './RecipeTypeGridList.js';
import SearchIcon from '@material-ui/icons/Search';
import RecipeTypesDropDown from './RecipeTypesDropDown.js';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    header: {
        // marginLeft: '10%',
        // marginRight: '10%',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
}));

function MalinisKitchen() {
  const classes = useStyles();

  return (
    <div className={classes.ex_hader}>
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <div style = {{ display: 'inline-block', width: '95%', overflow:'auto'}}>
                    <h1 style = {{ float: 'left'}}>
                        Malini kitchen
                        <RecipeTypesDropDown />
                    </h1>
                    <div style = {{ float: 'right' }}>
                        <SubNavigationTabs />
                        <div style={{ display: 'inline', color: 'green', width: '300px', height: '100px'}}>
                            <SearchIcon />
                            <TextField
                                id="outlined-bare"
                                className={classes.textField}
                                defaultValue="Search"
                                margin="normal"
                                variant="outlined"
                                inputProps={{ 'aria-label': 'Search' }}
                            />
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', }}>
                    <Typography component="div">
                        <RecipeList />
                        <RecipeTypeGridList />
                    </Typography>
                </div>
            </Container>
        </React.Fragment>
    </div>
  );
}

export default MalinisKitchen;
