import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Carousel from './Carousel.js';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@material-ui/icons';

const recipes = [
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

const ads = [
  {
    src:'https://www.lankaad.lk/uploads/files/lk/2353/thumb-816x460-96016fc96365b92686e7bd6a5bd804d6.jpeg',
    title: 'House for rent',
    channel: 'Sadun basnayake',
    views: '21/09/2019',
    createdAt: '2 mins ago',
  },
  {
    src:'https://corheaven.lk/wp-content/uploads/2018/09/248675_1528082215_8952.jpg',
    title: 'Property for sale (Nugegoda)',
    channel: 'Pramishka Vidyabhushana',
    views: '21/09/2019',
    createdAt: '12 mins ago',
  },
  {
    src:
      'https://cdn.movertix.com/media/catalog/product/cache/image/1200x/a/p/apple-iphone-7-32-gb-oro-rosa-libre-0190198068170.jpg',
    title: 'Iphone 7 for sale',
    channel: 'Nuwan',
    views: '21/09/2019',
    createdAt: '19 mins ago',
  },
  {
    src:
      'http://cdn.shopify.com/s/files/1/1762/3971/products/small-van_grande.jpg',
    title: 'KDH for sale',
    channel: 'Suranga',
    views: '21/9/2019',
    createdAt: '25 mins ago',
  },
  {
    src:
      'https://media.zigcdn.com/media/model/2018/Jan/maruti-swift-right_320x160.jpg',
    title: 'Maruti car for rent',
    channel: 'Rohana Wijaya',
    views: '21/8/2019',
    createdAt: '1 months ago',
  },
];

const news = [
  {
    src:'http://infolanka.com/news/a/nalin_b3.jpg',
    title: 'Video: Will resign if Sajith not given nomination: Nalin',
    channel: 'Sadun basnayake',
    views: '21/09/2019',
    createdAt: '2 mins ago',
  },
  {
    src:'http://infolanka.com/news/a/unicef.jpg',
    title: 'UNICEF condemns beating of child monks',
    channel: 'Pramishka Vidyabhushana',
    views: '21/09/2019',
    createdAt: '12 mins ago',
  },
  {
    src:
      'http://infolanka.com/news/a/missing10.jpg',
    title: 'Rs 6,000 interim monthly allowance to families of missing persons from Nov.',
    channel: 'Nuwan Babarakada',
    views: '21/09/2019',
    createdAt: '19 mins ago',
  },
  {
    src:
      'http://infolanka.com/news/i/i775.jpg',
    title: 'Video: Avant-Garde chairman leaks telephone conversation with ex-Bribery...',
    channel: 'Suranga',
    views: '21/9/2019',
    createdAt: '25 mins ago',
  },
  {
    src:
      'http://infolanka.com/news/a/sc.jpg',
    title: 'SC defers FR petition until Sep. 27',
    channel: 'Rohana Wijaya',
    views: '21/8/2019',
    createdAt: '1 months ago',
  },
];

const gallery = [
  {
    src:'http://infolanka.com/photo/village/v1.jpg',
    title: 'Village Life',
    channel: 'Saliya melanka',
    views: '21/09/2019',
    createdAt: '19 mins ago',
  },
  {
    src:'http://infolanka.com/photo/festivals/f1.jpg',
    title: 'Festivals',
    channel: 'Pramudi Meemana',
    views: '20/09/2019',
    createdAt: '1 day ago',
  },
  {
    src:
      'http://infolanka.com/photo/hist/h1.jpg',
    title: 'Historical Sites',
    channel: 'Suriyarachchi',
    views: '19/09/2019',
    createdAt: '2 days ago',
  },
  {
    src:
      'http://infolanka.com/photo/wild/w1.jpg',
    title: 'Wild Life',
    channel: 'Saumya Ekanayake',
    views: '21/8/2019',
    createdAt: '1 month ago',
  },
  {
    src:
      'http://infolanka.com/photo/scenic/s1.jpg',
    title: 'Science &amp; Beauty',
    channel: 'Kapila Suriyarachchi',
    views: '21/7/2019',
    createdAt: '2 months ago',
  },
];

const topics = [
  {
    src:'',
    title: 'LOOKING FOR A RECIPE',
    channel: 'Saliya melanka',
    views: '21/09/2019',
    createdAt: '19 mins ago',
    type: 'topic',
  },
  {
    src:'',
    title: 'WE PROVIDE DELICIOUS HOME MADE FOOD ITEMS FOR ANY OCCASION (',
    channel: 'Pramudi Meemana',
    views: '20/09/2019',
    createdAt: '1 day ago',
    type: 'topic',
  },
  {
    src: '',
    title: 'Sri Lanka Heritage Day',
    channel: 'Suriyarachchi',
    views: '19/09/2019',
    createdAt: '2 days ago',
    type: 'topic',
  },
  {
    src:
      '',
    title: 'Chinese Hot Butter Pork',
    channel: 'Saumya Ekanayake',
    views: '21/8/2019',
    createdAt: '1 month ago',
    type: 'topic',
  },
  {
    src: '',
    title: 'World Traveller & Eater',
    channel: 'Kapila Suriyarachchi',
    views: '21/7/2019',
    createdAt: '2 months ago',
    type: 'topic',
  },
];

const carouselData = [
  {
    imgPath:'http://infolanka.com/photo/scenic/s1.jpg',
    label: 'Photo Gallery',
  },
  {
    imgPath:
      'http://www.anratechnologies.com/home/wp-content/uploads/2017/01/news-3.jpg',
      label: 'News Room',
  },
  {
    imgPath:
      'http://www.mycolomboproperties.lk/imgs/15405318764.jpg',
      label: 'Classified Ads',
  },
  {
    imgPath:
      'https://images.ctfassets.net/qu53tdnhexvd/7l8tGN7QeZ0QzsPIqsziA5/1e95f57caab1ff3f514b89518368d5de/P13_Threefold_TFD13015_-_Lamb_Web_Banners_Hero_banner_2000x700px.jpg',
      label: 'Malini Kitchen',
  },
  {
    imgPath:
      'https://previews.123rf.com/images/jcmarcu/jcmarcu1403/jcmarcu140300004/26700721-corporate-words-written-on-paper-notes-on-a-cork-message-board.jpg',
      label: 'Message Board',
  },
];

function Media(props) {
  const { loading = false } = props;

  return (
    <Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(5)) : props.data).map((item, index) => (
        <Box key={index} width={210} marginRight={3.6} my={5}>
          {item ? (
            ((item.type !== 'topic') ? <img style={{ width: 210, height: 118 }} alt={item.title} src={item.src} /> : <div></div>)
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
const useStyles = makeStyles(theme => ({
  arrow: { 
    marginTop: '1rem',
    float: 'right', 
    color: 'black', 
    width: '2rem', 
    height: '2rem'
  },
  topic: { 
    marginTop: '1rem', 
    float: 'left' 
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
  <div style={{ backgroundColor:'#eee' }}>
    <React.Fragment>
        <CssBaseline />
        <Container fixed>
            <Carousel
              data={carouselData} />
            <Box overflow="hidden" clone>
            <Paper>
                <Box px={3}>
                <Link style={{ display: 'inlineBlock' }} to="/photo_gallery">
                  <h4 className={classes.topic}>Photo Gallery</h4>
                  <ArrowRight className={classes.arrow} />
                </Link>
                {/* <Media loading /> */}
                <Media data={gallery} />
                </Box>
            </Paper>
            </Box>
            <Box overflow="hidden" clone>
            <Paper>
                <Box px={3}>
                <Link style={{ display: 'inlineBlock' }} to="/news_room">
                  <h4 className={classes.topic}>Sri Lanka News</h4>
                  <ArrowRight className={classes.arrow} />
                </Link>
                {/* <Media loading /> */}
                <Media data={news} />
                </Box>
            </Paper>
            </Box>
            <Box overflow="hidden" clone>
            <Paper>
                <Box px={3}>
                <Link style={{ display: 'inlineBlock' }} to="/classified_ads">
                  <h4 className={classes.topic}>Classified Ads</h4>
                  <ArrowRight className={classes.arrow} />
                </Link>
                {/* <Media loading /> */}
                <Media data={ads} />
                </Box>
            </Paper>
            </Box>
            <Box overflow="hidden" clone>
            <Paper>
                <Box px={3}>
                <Link style={{ display: 'inlineBlock' }} to="/malinis_kitchen">
                  <h4 className={classes.topic}>Recent Recipes</h4>
                  <ArrowRight className={classes.arrow} />
                </Link>
                {/* <Media loading /> */}
                <Media data={recipes} />
                </Box>
            </Paper>
            </Box>
            <Box overflow="hidden" clone>
            <Paper>
                <Box px={3}>
                <Link style={{ display: 'inlineBlock' }} to="/message_board">
                  <h4 className={classes.topic}>Topics / Posts</h4>
                  <ArrowRight className={classes.arrow} />
                </Link>
                {/* <Media loading /> */}
                <Media data={topics} />
                </Box>
            </Paper>
            </Box>
        </Container>
    </React.Fragment>
  </div>
  );
}