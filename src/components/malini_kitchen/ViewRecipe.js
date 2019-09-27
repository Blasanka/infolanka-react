import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Carousel from '../Carousel.js';

const data = [
  {
    src:'http://infolanka.com/recipes/mess1/1-144.jpg',
    title: 'Lamprais (Lampreys/ Lumprice)',
    channel: 'Kanchana',
    views: '9/13/2019',
    createdAt: 'a week ago',
  },
  {
    src:'http://infolanka.com/recipes/mess1/1-76.jpg',
    title: 'Kaha Buth(Yellow Rice)',
    channel: 'Pramishka Vidyabhushana',
    views: '9/12/2019',
    createdAt: 'two week ago',
  },
  {
    src:
      'http://infolanka.com/recipes/mess1/1-16.jpg',
    title: 'Biryani II',
    channel: 'Malini',
    views: '12/12/2018',
    createdAt: '10 months ago',
  },
  {
    src:
      'http://infolanka.com/recipes/mess1/1-143.jpg',
    title: 'Sesame Noodles with Pork and Veggies',
    channel: 'Manourie',
    views: '21/8/2019',
    createdAt: '1 months ago',
  },
  {
    src:
      'http://infolanka.com/recipes/mess1/creamy%20s%20pasta.jpg',
    title: 'Creamy Spaghetti Pasta',
    channel: 'Manourie',
    views: '21/7/2019',
    createdAt: '2 months ago',
  },
];

const tutorialSteps = [
  {
    label: 'Kola Kenda',
    imgPath:
      'http://infolanka.com/recipes/mess1/1-134-1.jpg',
  },
  {
    label: 'Kottu Roti',
    imgPath:
      'http://infolanka.com/recipes/mess1/1-135.jpg',
  },
  {
    label: 'Ala roti',
    imgPath:
      'http://infolanka.com/recipes/mess1/1-87.jpg',
  },
  {
    label: 'Lamprais (Lampreys/ Lumprice)',
    imgPath:
      'http://infolanka.com/recipes/mess1/1-144.jpg',
  },
  {
    label: 'Kaha Buth(Yellow Rice)',
    imgPath:
      'http://infolanka.com/recipes/mess1/1-76.jpg',
  },
];

function Media(props) {
  const { loading = false } = props;

  return (
    <Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(5)) : data).map((item, index) => (
        <Box key={index} width={210} marginRight={3.6} my={5}>
          {item ? (
            <img style={{ width: 210, height: 118 }} alt={item.title} src={item.src} />
          ) : (
            <Skeleton variant="rect" width={210} height={118} />
          )}

          {item ? (
            <Box paddingRight={2}>
              <Typography gutterBottom variant="body2">
                {item.title}
              </Typography>
              <Typography display="block" variant="caption" color="textSecondary">
                {item.channel}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {`${item.views} • ${item.createdAt}`}
              </Typography>
            </Box>
          ) : (
            <React.Fragment>
              <Skeleton />
              <Skeleton width="60%" />
            </React.Fragment>
          )}
        </Box>
      ))}
    </Grid>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function ViewRecipe({ match }) {
  return (
  <div style={{ backgroundColor:'#eee' }}>
    <React.Fragment>
        <CssBaseline />
        <Container fixed>
            <h4 align='center'>{match.params.title.replace(/\_/g, ' ')}</h4>
            <Carousel
              data={tutorialSteps} />
            <Box overflow="hidden" clone>
            <Paper>
                <Box px={3}>
                <h6 style={{ marginTop: '1rem' }}>What's new</h6>
                {/* <Media loading /> */}
                <Media />
                </Box>
            </Paper>
            </Box>
            <Box overflow="hidden" clone>
            <Paper>
                <Box px={3}>
                <h6>Biriyani</h6>
                {/* <Media loading /> */}
                <Media />
                </Box>
            </Paper>
            </Box>
            <Box overflow="hidden" clone>
            <Paper>
                <Box px={3}>
                <h6>Breads</h6>
                {/* <Media loading /> */}
                <Media />
                </Box>
            </Paper>
            </Box>
        </Container>
    </React.Fragment>
  </div>
  );
}