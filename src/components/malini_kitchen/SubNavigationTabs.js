import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function SubNavigationTabs() {
  const [value, setValue] = React.useState(2);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  
  return (
    <Paper style={{marginTop: '1rem'}} square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="Malini's kitchen"
      >
        <Tab label="Post a Recipe" />
        <Tab label="Message Board" />
      </Tabs>
    </Paper>
  );
}