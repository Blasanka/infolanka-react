import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 250,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));
export default function AdCard(props) {
  const data = props.data;
  // const classes = useStyles();
  // const [open, setOpen] = React.useState(false);
  // const [fullWidth, setFullWidth] = React.useState(true);
  // const [maxWidth, setMaxWidth] = React.useState('md');

  // function handleClickOpen() {
  //   setOpen(true);
  // }

  // function handleClose() {
  //   setOpen(false);
  // }

  // function handleMaxWidthChange(event) {
  //   setMaxWidth(event.target.value);
  // }

  // function handleFullWidthChange(event) {
  //   setFullWidth(event.target.checked);
  // }

  return (
    <Link to={{ pathname: `/classified_ads/${data.title.replace(/\s/g, '_')}`, state: {data} }}>
    <Card className={useStyles.card} style={{maxWidth: 345,}}>
    {/* onClick={handleClickOpen}> */}
      <CardActionArea>
        <img src={data.iconPath} style={{height: 210, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} alt={"Ad pic"} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {data.title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {data.price}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {data.location}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Posted on: {data.postedDate}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    {/* <Dialog
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={open}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle id="max-width-dialog-title">
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          As Company Consultants we undertake to do Company Registrations and Administration Services related to Companies. We also undertake assignments, Type settings (English & Sinhala) Translations etc. You can please contact us for further information and should you have any queries please call us on 0766224852 - 24x7.
        </DialogContentText>
        <div style= {{ display: 'inline-block', width: '70%', overflow:'auto' }}>
          <div style= {{ float: 'left' }}>
            <img src={iconPath} style={{height: 240, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '100% 100%'}} alt={"Ad pic"} />
          </div>
          <div style= {{ float: 'right' }}>
            <Typography variant="body1" color="textSecondary" component="p">
              Price: {price}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              Location: {location}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              Contact: Leena, Sri Lanka
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              Email: lenavo.silva@gmail.com
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              Phone: 0766224852
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Posted on: {postedDate}
            </Typography>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog> */}
    </Link>
  );
}