import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
    margin: '0 auto',
  },
  inline: {
    display: 'inline',
  },
  recipeImg: {
      width: '35px',
      height: '35px,'
  }
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <h5>Recent Recipe</h5>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
          <img src="http://www.infolanka.com/recipes/mess5/5-107-1.jpg" className={classes.recipeImg} alt='avator' />
        </ListItemAvatar>
        <ListItemText
          primary="Shoe Flower Drink"
          secondary={
            <React.Fragment>
              {/* <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography> */}
              {" — Posted by Malini"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          {/* <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" /> */}
          <img src="https://www.wishque.com/data/images/products/3937/25206440_409344154513_0.52376400-1522843976.jpg" className={classes.recipeImg} alt='avator' />
        </ListItemAvatar>
        <ListItemText
          primary="Aasmie"
          secondary={
            <React.Fragment>
              {/* <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                to Scott, Alex, Jennifer
              </Typography> */}
              {" — Posted by Malini"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          {/* <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /> */}
          <img src="http://www.infolanka.com/recipes/photos/42.jpg" className={classes.recipeImg} alt='avator' />
        </ListItemAvatar>
        <ListItemText
          primary="Banana Blossom Cutlets"
          secondary={
            <React.Fragment>
              {/* <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Sandra Adams
              </Typography> */}
              {' — Posted by Rezee Koralage'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          {/* <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /> */}
          <img src="https://i.ytimg.com/vi/DJOIaspinnc/maxresdefault.jpg" className={classes.recipeImg} alt='avator' />
        </ListItemAvatar>
        <ListItemText
          primary="String Hopper Biriyani"
          secondary={
            <React.Fragment>
              {/* <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Sandra Adams
              </Typography> */}
              {' — Posted by Jasmin'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          {/* <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /> */}
          <img src="http://www.infolanka.com/recipes/f11.jpg" className={classes.recipeImg} alt='avator' />
        </ListItemAvatar>
        <ListItemText
          primary="Beef and Vegetable Rice"
          secondary={
            <React.Fragment>
              {/* <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Sandra Adams
              </Typography> */}
              {' — Posted by Malini'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}