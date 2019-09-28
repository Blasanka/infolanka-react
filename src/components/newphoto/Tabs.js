import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Beauty from './Avatars/Beauty';
import Wild from './Avatars/Wild';
import His from './Avatars/His';
import Fes from './Avatars/Festival';
import Vill from './Avatars/Village';
import Art from './Avatars/Art';
import Home from './Avatars/Home';
import Visitor from './Avatars/Visitor';
import Album from './Avatars/Album';

import Bty from './Categories/Slbeauty';
import Wld from './Categories/Wildlife';
import Hist from './Categories/Slhis';
import Fest from './Categories/Festival';
import Villg from './Categories/Village';
import Arts from './Categories/Art';
import Visit from './Categories/Visitors';
import Palbum from './Categories/Photoalbum';

import Homepage from './Categories/Home/Photohome';
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

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
      
 
      
    <div className={classes.root}>
        
      <AppBar position="static" style={{ backgroundImage:'url(' + 'https://images.pexels.com/photos/1083617/pexels-photo-1083617.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' + ')',backgroundSize: 'cover',overflow: 'hidden'}} >
     
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="defualt"
          aria-label="scrollable force tabs example"
          centered
        >
          <Tab label="HOME"  icon={<Home />} {...a11yProps(0)} />
          <Tab label="Scenic Beauty"  icon={<Beauty />} {...a11yProps(1)} />
          <Tab label="Wild Life" icon={<Wild />} {...a11yProps(2)} />
          <Tab label="Historical Sites" icon={<His />} {...a11yProps(3)} />
          <Tab label="Festivals" icon={<Fes />} {...a11yProps(4)} />
          <Tab label="Village Life" icon={<Vill />} {...a11yProps(5)} />
          <Tab label="art" icon={<Art />} {...a11yProps(6)} />
          <Tab label="Contributed by Visitors" icon={<Visitor />} {...a11yProps(7)} />
          <Tab label="Photo Album - Vol 2 by Siri Ekanayake" icon={<Album />} {...a11yProps(8)} />
         
          
      
        </Tabs>
    
     
      </AppBar>
      <TabPanel value={value} index={0}>
       <Homepage />
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Bty />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Wld />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Hist />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Fest />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Villg />
      </TabPanel>
      <TabPanel value={value} index={6}>
       <Arts />
      </TabPanel>
      <TabPanel value={value} index={7}>
       <Visit />
      </TabPanel>
      <TabPanel value={value} index={8}>
       <Palbum />
      </TabPanel>
     
    </div>
  );
}