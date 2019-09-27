import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import Slider from './Slider.js';
import FeaturedRecipe from './FeaturedRecipe.js';
import RecentRecipeList from './RecentRecipeList.js';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'inline-block',
    //   flexGrow: 1,
      padding: '1rem',
    },
    leftContainer: {
        float: 'left',
        width: '65%',
        marginRight: '3px',
    },
    rightContainer: {
        float: 'right',
        width: '32%',
    },
    button: {
        marginRight: '0.5rem',
    },
    actions: {
        display: 'block',
    },
    img: {
        height: '8%',
        width: '44%',
        margin: '0 auto',
    },
    fbPage: {
        height: '150px',
        width: '100%',
        backgroundColor: '#eeeeee',
    },
    fbText: {
        color: 'grey',
        padding: '50% auto',
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: "150px"
    }
}));

export default function KitchenHomePage() {
    const classes = useStyles();
    return (
        // className={classes.root}
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <div className={classes.leftContainer}>
                    <img alt="Malinis Kitchen" src={process.env.PUBLIC_URL + "assets/malini_logo.gif"} className={classes.img} />
                    <p>Ayubowan! Welcome to Malini's kitchen. I am really glad to be able to share my passion of cooking with all of you. Don't you think it would be quite useful if we have a collection of Sri Lankan recipes.</p>
                    <p>Instead of including only my recipes I thought it would be great if all of us can share all of our favourite receipes. Let's all get together and create a whole collection of wonderful recipes, that all of us can enjoy. So please take a few minutes of your time and post your favourite recipe here soon.</p>
                    <p>I would like to thank those of you who shared their recipes with all of us. If you would like to share a picture of a recipe that is online, please email it to me. Be sure to include your name, and the recipe name.</p>
                    <p>Please send me your comments, thoughts and suggestions. <Link>Email me</Link>. </p>
                    <FeaturedRecipe />
                </div>
                <div className={classes.rightContainer}>
                    <Slider />
                    <RecentRecipeList />
                    <div className={classes.fbPage}>
                        <p className={classes.fbText}>Facebook page</p>
                    </div>
                </div>
            </Container>
        </React.Fragment>
    );
}