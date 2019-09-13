import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
const tileData = [
    {
      img: 'http://infolanka.com/recipes/photos/81.jpg',
      title: 'Rices & Breads',
    },
    
    {
      img: 'http://infolanka.com/recipes/photos/81.jpg',
      title: 'Meat & Sea Food',
    },
    {
      img: 'http://infolanka.com/recipes/photos/81.jpg',
      title: 'Veggies & Pulses',
    },
    {
      img: 'http://infolanka.com/recipes/photos/81.jpg',
      title: 'Desserts & Sweets',
    },
    {
      img: 'http://infolanka.com/recipes/photos/81.jpg',
      title: 'Drinks & Snacks Misc.',
      author: 'Hans',
    },
  ];
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    maxWidth: '80%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function RecipeTypeGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <GridListTile key="Subheader" style={{ height: 'auto' }}>
      <ListSubheader component="div">Recipe Types</ListSubheader>
    </GridListTile>
      <GridList cellHeight={100} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}