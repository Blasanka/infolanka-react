import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     width: '95%',
//     backgroundColor: theme.palette.background.paper,
//     marginLeft: '1rem',
//     padding: '1rem',
//     display: 'block',
//   },
  inline: {
    display: 'inline',
  },
  listItem: {
    width: '97%',
    display: 'inline-block',
  },
  listCard: {
    width: '97%',
    display: 'block',
    marginLeft: '1rem',
    padding: '.5rem',
  },
  img: {
    width: '24%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    marginRight: '.5rem',
    float: 'left',
  },
  details: {
    display: 'block',
    padding: '.5rem',
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 220,
  },
}));


function ListAdCard(props) {
    const classes = useStyles();
    return (
      //   <Paper className={classes.listItem}>
      //   {/* <ListItemAvatar>
      //       <img src={props.data.result[0].iconPath} alt={"Ad pic"} className={classes.img} />
      //   </ListItemAvatar> */}
      //   <img src={props.data.iconPath} alt={"Ad pic"} className={classes.img} />
      //   <div className={classes.details}>
      //       <Typography gutterBottom variant="h5" component="h3">
      //           {props.data.title}
      //       </Typography>
      //       <Typography variant="body1" color="textSecondary" component="p">
      //           {props.data.price}
      //       </Typography>
      //       <Typography variant="body1" color="textSecondary" component="p">
      //           {props.data.location}
      //       </Typography>
      //       <Typography variant="body2" color="textSecondary" component="p">
      //           Posted on: {props.data.postedDate}
      //       </Typography>
      //   </div>
      // </Paper>
      <Grid container spacing={4} className={classes.cardGrid}>
              <Grid item key={props.data.title} xs={12} md={12}>
                <CardActionArea component="a" href="#">
                  <Card className={classes.card}>
                    <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image={props.data.iconPath}
                        title="Image title"
                      />
                    </Hidden>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {props.data.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {props.data.price}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {props.data.location}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                          {`Posted on: ${props.data.postedDate}`}
                        </Typography>
                      </CardContent>
                    </div>
                  </Card>
                </CardActionArea>
              </Grid>
          </Grid>
    )
}

export default function AdsList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
        props.data.result.map((ad) => {
            return (
                <div className={classes.listCard}><ListAdCard data = {ad} /></div>
            )
        })
      }
    </div>
  );
}
