import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CategoryTreeView from './CategoryTreeView.js';

const useStyles = makeStyles(theme => ({
  root: {
    width: '96%',
    marginTop: '1.5rem',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.h4,
  },
  expanded: {
    height: "450px"
  }
}));

export default function CategoryExpansion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.expanded} defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Categories</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <CategoryTreeView />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}