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
    iconPath:'http://infolanka.com/recipes/mess1/1-144.jpg',
    title: 'Lamprais (Lampreys/ Lumprice)',
    channel: 'Kanchana',
    views: '9/13/2019',
    createdAt: 'a week ago',
    category: 'malinis_kitchen',
  },
  {
    iconPath:'http://infolanka.com/recipes/mess1/1-76.jpg',
    title: 'Kaha Buth(Yellow Rice)',
    channel: 'Pramishka Vidyabhushana',
    views: '9/12/2019',
    createdAt: 'two week ago',
    category: 'malinis_kitchen',
  },
  {
    iconPath:
      'http://infolanka.com/recipes/mess1/1-16.jpg',
    title: 'Biryani II',
    channel: 'Malini',
    views: '12/12/2018',
    createdAt: '10 months ago',
    category: 'malinis_kitchen',
  },
  {
    iconPath:
      'http://infolanka.com/recipes/mess1/1-143.jpg',
    title: 'Sesame Noodles with Pork and Veggies',
    channel: 'Manourie',
    views: '21/8/2019',
    createdAt: '1 months ago',
    category: 'malinis_kitchen',
  },
  {
    iconPath:
      'http://infolanka.com/recipes/mess1/creamy%20s%20pasta.jpg',
    title: 'Creamy Spaghetti Pasta',
    channel: 'Manourie',
    views: '21/7/2019',
    createdAt: '2 months ago',
    category: 'malinis_kitchen',
  },
];

const ads = [
  {
    iconPath:'https://www.lankaad.lk/uploads/files/lk/2353/thumb-816x460-96016fc96365b92686e7bd6a5bd804d6.jpeg',
    title: 'House for rent',
    channel: 'Sadun basnayake',
    views: '21/09/2019',
    createdAt: '2 mins ago',
    category: 'classified_ads',
  },
  {
    iconPath:'https://corheaven.lk/wp-content/uploads/2018/09/248675_1528082215_8952.jpg',
    title: 'Property for sale (Nugegoda)',
    channel: 'Pramishka Vidyabhushana',
    views: '21/09/2019',
    createdAt: '12 mins ago',
    category: 'classified_ads',
  },
  {
    iconPath:
      'https://cdn.movertix.com/media/catalog/product/cache/image/1200x/a/p/apple-iphone-7-32-gb-oro-rosa-libre-0190198068170.jpg',
    title: 'Iphone 7 for sale',
    channel: 'Nuwan',
    views: '21/09/2019',
    createdAt: '19 mins ago',
    category: 'classified_ads',
  },
  {
    iconPath:
      'http://cdn.shopify.com/s/files/1/1762/3971/products/small-van_grande.jpg',
    title: 'KDH for sale',
    channel: 'Suranga',
    views: '21/9/2019',
    createdAt: '25 mins ago',
    category: 'classified_ads',
  },
  {
    iconPath:
      'https://media.zigcdn.com/media/model/2018/Jan/maruti-swift-right_320x160.jpg',
    title: 'Maruti car for rent',
    channel: 'Rohana Wijaya',
    views: '21/8/2019',
    createdAt: '1 months ago',
    category: 'classified_ads',
  },
];

const news = [
  {
    iconPath:'http://infolanka.com/news/a/nalin_b3.jpg',
    title: 'Video: Will resign if Sajith not given nomination: Nalin',
    channel: 'Sadun basnayake',
    views: '21/09/2019',
    createdAt: '2 mins ago',
    category: 'news_room',
  },
  {
    iconPath:'http://infolanka.com/news/a/unicef.jpg',
    title: 'UNICEF condemns beating of child monks',
    channel: 'Pramishka Vidyabhushana',
    views: '21/09/2019',
    createdAt: '12 mins ago',
    category: 'news_room',
  },
  {
    iconPath:
      'http://infolanka.com/news/a/missing10.jpg',
    title: 'Rs 6,000 interim monthly allowance to families of missing persons from Nov.',
    channel: 'Nuwan Babarakada',
    views: '21/09/2019',
    createdAt: '19 mins ago',
    category: 'news_room',
  },
  {
    iconPath:
      'http://infolanka.com/news/i/i775.jpg',
    title: 'Video: Avant-Garde chairman leaks telephone conversation with ex-Bribery...',
    channel: 'Suranga',
    views: '21/9/2019',
    createdAt: '25 mins ago',
    category: 'news_room',
  },
  {
    iconPath:
      'http://infolanka.com/news/a/sc.jpg',
    title: 'SC defers FR petition until Sep. 27',
    channel: 'Rohana Wijaya',
    views: '21/8/2019',
    createdAt: '1 months ago',
    category: 'news_room',
  },
];

const gallery = [
  {
    iconPath:'http://infolanka.com/photo/village/v1.jpg',
    title: 'Village Life',
    channel: 'Saliya melanka',
    views: '21/09/2019',
    createdAt: '19 mins ago',
    category: 'photo_gallery',
  },
  {
    iconPath:'http://infolanka.com/photo/festivals/f1.jpg',
    title: 'Festivals',
    channel: 'Pramudi Meemana',
    views: '20/09/2019',
    createdAt: '1 day ago',
    category: 'photo_gallery',
  },
  {
    iconPath:
      'http://infolanka.com/photo/hist/h1.jpg',
    title: 'Historical Sites',
    channel: 'Suriyarachchi',
    views: '19/09/2019',
    createdAt: '2 days ago',
    category: 'photo_gallery',
  },
  {
    iconPath:
      'http://infolanka.com/photo/wild/w1.jpg',
    title: 'Wild Life',
    channel: 'Saumya Ekanayake',
    views: '21/8/2019',
    createdAt: '1 month ago',
    category: 'photo_gallery',
  },
  {
    iconPath:
      'http://infolanka.com/photo/scenic/s1.jpg',
    title: 'Science &amp; Beauty',
    channel: 'Kapila Suriyarachchi',
    views: '21/7/2019',
    createdAt: '2 months ago',
    category: 'photo_gallery',
  },
];

const topics = [
  {
    iconPath:'https://www.beddingwarehouse.com.au/wp-content/uploads/2016/01/placeholder-featured-image-600x600.png',
    title: 'LOOKING FOR A RECIPE',
    channel: 'Saliya melanka',
    views: '21/09/2019',
    createdAt: '19 mins ago',
    type: 'topic',
    category: 'message_board',
  },
  {
    iconPath:'https://www.beddingwarehouse.com.au/wp-content/uploads/2016/01/placeholder-featured-image-600x600.png',
    title: 'WE PROVIDE DELICIOUS HOME MADE FOOD ITEMS FOR ANY OCCASION (',
    channel: 'Pramudi Meemana',
    views: '20/09/2019',
    createdAt: '1 day ago',
    type: 'topic',
    category: 'message_board',
  },
  {
    iconPath: 'https://www.beddingwarehouse.com.au/wp-content/uploads/2016/01/placeholder-featured-image-600x600.png',
    title: 'Sri Lanka Heritage Day',
    channel: 'Suriyarachchi',
    views: '19/09/2019',
    createdAt: '2 days ago',
    type: 'topic',
    category: 'message_board',
  },
  {
    iconPath: 'https://www.beddingwarehouse.com.au/wp-content/uploads/2016/01/placeholder-featured-image-600x600.png',
    title: 'Chinese Hot Butter Pork',
    channel: 'Saumya Ekanayake',
    views: '21/8/2019',
    createdAt: '1 month ago',
    type: 'topic',
    category: 'message_board',
  },
  {
    iconPath: 'https://www.beddingwarehouse.com.au/wp-content/uploads/2016/01/placeholder-featured-image-600x600.png',
    title: 'World Traveller & Eater',
    channel: 'Kapila Suriyarachchi',
    views: '21/7/2019',
    createdAt: '2 months ago',
    type: 'topic',
    category: 'message_board',
  },
];

const carouselData = [
  {
    iconPath:'https://www.nickselway.com/images/xl/BEST.jpg',
    label: 'Photo Gallery',
  },
  {
    iconPath:
      'http://www.anratechnologies.com/home/wp-content/uploads/2017/01/news-3.jpg',
      label: 'News Room',
  },
  {
    iconPath:
      'https://i2.wp.com/4spotmarketing.com/wp-content/uploads/Internet-Marketing-SEO-PPC-Infusionsoft-4SpotMarketing_com-8412__Google-Ads-and-Marketing-1_083018.jpg',
      label: 'Classified Ads',
  },
  {
    iconPath:
      'https://images.ctfassets.net/qu53tdnhexvd/7l8tGN7QeZ0QzsPIqsziA5/1e95f57caab1ff3f514b89518368d5de/P13_Threefold_TFD13015_-_Lamb_Web_Banners_Hero_banner_2000x700px.jpg',
      label: 'Malini Kitchen',
  },
  {
    iconPath:
      'https://previews.123rf.com/images/jcmarcu/jcmarcu1403/jcmarcu140300004/26700721-corporate-words-written-on-paper-notes-on-a-cork-message-board.jpg',
      label: 'Message Board',
  },
];

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
  link: {
    color: '#444'
  },
  sectionCardImg: { 
    width: 210,
    height: 118,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
  }
}));

function Media(props) {
  const classes = useStyles();

  const { loading = false } = props;

  return (
    <Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(5)) : props.data).map((data, index) => (
        <Box key={index} width={210} marginRight={3.6} my={5}>
          {data ? (
            <img className={classes.sectionCardImg} alt={data.title} src={data.iconPath} />
          ) : (
            <Skeleton variant="rect" width={210} height={118} />
          )}
          {data ? (
          <Link className={classes.link} to={{ pathname: `/${data.category}/${data.title.replace(/\s/g, '_')}`, state: {data} }}>
            <Box paddingRight={2}>
              <Typography gutterBottom variant="body2">
                {data.title}
              </Typography>
              <Typography display="block" variant="caption" color="textSecondary">
                {data.channel}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {`${data.views} • ${data.createdAt}`}
              </Typography>
            </Box>
          </Link>
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
                <Link style={{ display: 'inlineBlock' }}  to='/classified_ads'>
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