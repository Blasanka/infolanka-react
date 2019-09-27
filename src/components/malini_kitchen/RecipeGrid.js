import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RecipeCard from './RecipeCard.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '1rem',
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AdsGrid() {
  const classes = useStyles();
  const iconPath = process.env.PUBLIC_URL + '/assets/forsale.jpg';

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <RecipeCard
          title="Pasta Dough"
          by="Dinidu . 10/06/2012"
          imgUrl="https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-and-Spinach-Pasta-V1.jpg"
          description="Mound 200g flour in the center of a large wooden cutting board.
          Make a well in the middle of the flour & add the eggs, olive oil & salt by using a fork, beat together the eggs, olive oil & salt & begin to incorporate the flour, starting with the inner rim of the well. " />
        </Grid>
        <Grid item xs={4}>
          <RecipeCard
          title="Six Minute Corn Bread"
          by="Madu . 4/03/2012"
          imgUrl="https://images-gmi-pmc.edge-generalmills.com/204864b0-a495-4797-afcc-0e9b0b2cbb94.jpg"
          description="Mix flour, corn flour, baking powder, salt, sugar, egg, milk, vegetable oil, Vanilla and Sultanas (if using) in a Microwave safe bowl.
          Whisk thoroughly." />
        </Grid>
        <Grid item xs={4}>
          <RecipeCard
          title="Rice &amp; Beans"
          by="Marie Williams . 10/06/2012"
          imgUrl="https://thumbs.dreamstime.com/b/rice-bread-seed-plant-genus-found-asia-scientific-name-oryza-sativa-major-food-crop-40320418.jpg"
          description="Wash and soak rice for about 15 minutes.
          In a sauce pan (recommend you to get a large pan) put oil and then add onion let it fry for a minute and add the bell pepper, celery, tomato.
          Fry for another minute." />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}