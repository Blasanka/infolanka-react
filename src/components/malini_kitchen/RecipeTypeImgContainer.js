import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const images = [
  {
    url: 'https://material-ui.com/static/images/grid-list/breakfast.jpg',
    title: 'Rices & Breads',
    width: '15%',
  },
  {
    url: 'https://material-ui.com/static/images/grid-list/burgers.jpg',
    title: 'Meat & Sea Food',
    width: '15%',
  },
  {
    url: 'https://material-ui.com/static/images/grid-list/camera.jpg',
    title: 'Veggies & Pulses',
    width: '15%',
  },
  {
    url: 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/rivareno_panettone.jpg',
    title: 'Desserts & Sweets',
    width: '15%',
  },
  {
    url: 'https://www.asianfoodgrocer.com/media/catalog/category/dried_fruit.jpg',
    title: 'Drinks & Snacks Misc.',
    width: '15%',
  },
  {
    url: 'https://cdn4.iconfinder.com/data/icons/bulletin-board/95/email-512.png',
    title: 'Message Board',
    width: '15%',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 80,
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 40,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: 4,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function RecipeTypeImgContainer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        > {(image.title !== "Message Board") ? (
         <Link to={`/malini_kitchen/${image.title.replace(/\s/g, '_')}`}>
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked}
               />
            </Typography>
          </span></Link>
          ) 
          : <Link to={`/malini_kitchen/${image.title.replace(/\s/g, '_')}`}>
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {image.title}
                  <span className={classes.imageMarked}
                  />
                </Typography>
              </span>
          </Link>}
        </ButtonBase>
      ))}
    </div>
  );
}