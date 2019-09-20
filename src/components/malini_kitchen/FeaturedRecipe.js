import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RecipeCard from './RecipeCard.js';

// const useStyles = makeStyles(theme => ({
//     root: {
//       flexGrow: 1,
//       padding: '1rem',
//     },
//     button: {
//         marginRight: '0.5rem',
//     },
//     actions: {
//         display: 'block',
//     },
//     // img: {
//     //     height: '4%',
//     //     width: '22%',
//     //     margin: '0 auto',
//     // }
// }));

export default function FeaturedRecipe() {
    // const classes = useStyles();
    return (
      <Grid item xs={8}>
        <h4>Featured Recipe</h4>
        <RecipeCard
        title="Buriyani in Rice cooker "
        by="Submitted by Julie" />
      </Grid>
    );
}