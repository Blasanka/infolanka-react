import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  header: {
    flexGrow: 1,
    width: "100%",
  },
  margin: {
    backgroundColor: "#ffbf00",
    textTransform: "none"
  },
  root: {
    marginTop: theme.spacing(.5),
    overflowX: "auto"
  },
  table: {
    // minWidth: 700
  },
  img: {
    height: 365,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    marginTop: theme.spacing(1),
    border: '1px solid grey'
  },
  imgRow: {
    width: '110px',
    height: '96px',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(.9),
    border: '2px solid grey'
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  similarAdsPaper: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(4),
  }
}));

function createRow(label, value) {
  return { label, value };
}

const adDetails = `Minuwangoda
close to Hadirama junction. About 2 Km away from Minuwangoda
Town. Built on 30 Perches of Land and approx 1,300 Sq.`;

const cards = [1, 2, 3, 4];
export default function DetailedAd(props) {
  const classes = useStyles();
  const data = props.location.state.data;
  const rows = [
    createRow("Title", data.title),
    createRow("Category", "Vehicle"),
    createRow("Price", data.price),
    createRow("Location", data.location),
    createRow("Posted on", data.postedDate),
    createRow("Contact (Email)", "lankalandp@gmail.com"),
    createRow("Contact (Mobile)", "Silva, Sri Lanka 0777333807"),
    createRow("Description", adDetails)
  ];
  return (
    <div className={classes.header}>
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <div class={classes.header}>
            <h4 align="center">Ad Details</h4>
            <Paper style={{ padding: "1rem", display: 'flex', }}>
              <div style={{ float: 'left' }}>
                <img
                  src={data.iconPath}
                  className={classes.img}
                  alt={"Detailed ad"}
                />
                <div style={{ display: 'inline' }}>
                  <img
                    src={data.iconPath}
                    className={classes.imgRow}
                    alt={"Detailed ad"}
                  />
                  <img
                    src={data.iconPath}
                    className={classes.imgRow}
                    alt={"Detailed ad"}
                  />
                  <img
                    src={data.iconPath}
                    className={classes.imgRow}
                    alt={"Detailed ad"}
                  />
                  <img
                    src={data.iconPath}
                    className={classes.imgRow}
                    alt={"Detailed ad"}
                  />
                  <img
                    src={data.iconPath}
                    className={classes.imgRow}
                    alt={"Detailed ad"}
                  />
                </div>
                {/* <Typography gutterBottom variant="h5" component="h3">
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
                </Typography> */}
                
              </div>
              <div style={{ float: "right" }}>
                <Paper className={classes.root}>
                  <Table className={classes.table}>
                    <TableBody>
                      {rows.map(row => (
                        <TableRow key={row.label}>
                          <TableCell style= {{ color: '#777' }}>{row.label}</TableCell>
                          <TableCell align="left">
                            {row.value}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
              </div>
            </Paper>
          </div>
          <Paper className={classes.similarAdsPaper} >
          <Typography style={{float: 'left' }} variant="h6">
            Similar Ads
          </Typography>
          <Grid container spacing={2}>
              {cards.map(card => (
                <Grid item key={card} xs={12} sm={5} md={3}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={data.iconPath}
                      title="Image title"
                    />
                    {/* https://source.unsplash.com/random */}
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Land cruser for sale
                      </Typography>
                      <Typography>
                        Galle
                      </Typography>
                      <Typography>
                        2,000,0000
                      </Typography>
                    </CardContent>
                    {/* <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions> */}
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Container>
      </React.Fragment>
    </div>
  );
}
