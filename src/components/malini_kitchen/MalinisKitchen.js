import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TabsContainer from './TabsContainer.js';
// import { green } from '@material-ui/core/colors';
import RecipeTypeImgContainer from './RecipeTypeImgContainer.js';


// const theme = createMuiTheme({
//   palette: {
//     primary: green,
//   },
// });

const useStyles = makeStyles(theme => ({
    header: {
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
                <div>
                    <TabsContainer />
                </div>
            </Container>
        </React.Fragment>
    </div>
  );
}

export default MalinisKitchen;
