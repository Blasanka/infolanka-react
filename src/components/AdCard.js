import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import forsale from './forsale.jpg';

export class AdCard extends React.Component {
  constructor(props) {
    super(props);
    this.useStyles = makeStyles({
      card: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
    });
    this.state = {
      iconPath: props.iconPath,
      title: props.title,
      price: props.price,
      location: props.location,
      postedDate: props.postedDate,
    };
  }

  render() {
    return (
      <Card className={this.useStyles.card} style={{maxWidth: 345,}}>
        <CardActionArea>
          {/* <CardMedia
            className={this.useStyles.media}
            image= {this.state.iconPath}
            title="Ad Image"
          /> */}
          <img src={this.state.iconPath} style={{height: 210, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} alt={"Ad pic"} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.state.title}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {this.state.price}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {this.state.location}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Posted on: {this.state.postedDate}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}