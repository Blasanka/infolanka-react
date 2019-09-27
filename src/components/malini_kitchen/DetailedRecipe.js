import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      padding: '1rem',
    },
    content: {
        width: '80%',
        backgroundColor: '#fff',
        padding: '1rem',
        margin: '0 auto',
    },
    img: {
        height: '300px',
        width: '98%',
        overflow: 'hidden',
        objectFit: 'cover'
    },
    desc: {
        fontSize: '1rem'
    },
    a: {
        paddingRight: '.8rem',
    },
    commentHeader: {
        marginTop: '1rem'
    }
}));

export default function DetailedRecipe(props) {
    const classes = useStyles();
    const data = props.location.state.data;
    return (
        <div className={classes.root}>
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Box overflow="hidden">
                <div className={classes.content}>
                    <h3>{data.title}</h3>
                    <h6>{data.by}</h6>
                    <img src={data.imgUrl} alt={data.title} className={classes.img} />
                    <p className={classes.desc}>{data.description}</p>
                    <p className={classes.desc}>Mix flour, corn flour, baking powder, salt, sugar, egg, milk, vegetable oil, Vanilla and Sultanas (if using) in a Microwave safe bowl.
                    Whisk thoroughly.
                    Microwave for about 3 minutes to 3 minutes and 20 seconds or until the toothpick inserted comes out clean.
                    Serve with Jam, Chocolate sauce, etc.
                    Enjoy!</p>
                    <div>
                        <a className={classes.a} href="print">Print this recipe</a>
                        <a className={classes.acommentHeader} href="email">Email this recipe</a>
                    </div>
                    <h6 className={classes.commentHeader}>Comments</h6>
                    <p className={classes.desc}>Dimuth • 7 years ago </p>
                    <p>This came out good. </p>
                </div>
                </Box>
            </Container>
        </React.Fragment>
        </div>
    );
}