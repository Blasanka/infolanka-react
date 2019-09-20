import React from 'react';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TabsContainer from './TabsContainer.js';
import { green } from '@material-ui/core/colors';
import RecipeTypeImgContainer from './RecipeTypeImgContainer.js';


const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const useStyles = makeStyles(theme => ({
    header: {
        // marginLeft: '10%',
        // marginRight: '10%',
        marginTop: '1rem',
        marginBottom: '1rem',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    margin: {
      margin: theme.spacing(1),
    },
}));

function MalinisKitchen() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <RecipeTypeImgContainer className={classes.header} />
                {/* <div style = {{ overflow:'auto' }}>
                    <ThemeProvider theme={theme}>
                        <div style={{ display: 'inline-block', float: 'right' }}>
                            <RecipeTypesDropDown />
                            <Button variant="contained" color="primary" className={classes.margin}>
                                Message Board
                            </Button>
                        </div>
                    </ThemeProvider>
                </div> */}
                <div>
                    <TabsContainer />
                </div>
            </Container>
        </React.Fragment>
    </div>
  );
}

export default MalinisKitchen;
