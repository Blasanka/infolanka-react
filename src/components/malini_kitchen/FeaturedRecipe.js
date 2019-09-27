import React from 'react';
import Grid from '@material-ui/core/Grid';
import RecipeCard from './RecipeCard.js';
import { Link } from 'react-router-dom';

export default function FeaturedRecipe(props) {
  const data = {
    title: "Six Minute Corn Bread",
    by: "Madu . 4/03/2012",
    imgUrl: "https://images-gmi-pmc.edge-generalmills.com/204864b0-a495-4797-afcc-0e9b0b2cbb94.jpg",
    description: "Mix flour, corn flour, baking powder, salt, sugar, egg, milk, vegetable oil, Vanilla and Sultanas (if using) in a Microwave safe bowl. Whisk thoroughly."
  };

    return (
        <Grid item xs={8}>
          <h4>Featured Recipe</h4>
          <Link to={{ pathname: `/malinis_kitchen/${data.title.replace(/\s/g, '_')}`, state: {data} }}>
            <RecipeCard
              title={data.title}
              imgUrl={data.imgUrl}
              by={data.by}
              description={data.description} />
          </Link>
        </Grid>
    );
}