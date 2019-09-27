import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Past from './Avatar/Past';
import Elef from './Avatar/Elephant';
import Hillc from './Avatar/Hill';
import Vlife from './Avatar/Life';
import Pass from './Subcategory/Past';
import Eleph from './Subcategory/Elephant';
import Hillcnty from './Subcategory/Hillc';
import Villge from './Subcategory/Villagel';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <img src="http://infolanka.com/photo/vol2/title.gif"  style={{marginLeft:"auto", marginRight:"auto" , display: "block" , padding:30}} />
      <p style={{color:"#000000" , fontSize:18, textAlign:'center'}}>How may years since you left Sri Lanka ?.... Two years?, Five?, Ten?, Twenty?...
...or even more like some of us.....?.<br/>
...and how long was the last time you were there?...<br/>
...and how is the memory holding up after all these years? ...<br/>
...still remember the visits to our glorious ruined cities ... looking at the great stupa at Anuradhapura in moon light on a poya day...<br/>
... or sitting on the shores of Tissa weva eating a picnic lunch?...<br/>
...and how about climbing the rock fortress of Sigiriya on a cool and misty morning ?...<br/>
...or that cool and oh so refreshing swim in the local "oya" after a game of cricket in the dried up rice fields ... still remember the score?...<br/>
Well here are some photos to refresh your sweet memories of your (almost) forgotten past.
Enjoy !!</p>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Splendors of the Past" icon={<Past />} {...a11yProps(0)} />
          <Tab label="Elephants" icon={<Elef />} {...a11yProps(1)} />
          <Tab label="Hill Country" icon={<Hillc />} {...a11yProps(2)} />
          <Tab label="Village Life" icon={<Vlife />} {...a11yProps(3)} />
         
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Pass />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Eleph />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Hillcnty />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Villge />
      </TabPanel>
      
    </div>
  );
}
