import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import categoriesData from './data/categories.json';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    width: '94%',
    marginTop: '.5rem',
    marginLeft: '.1rem',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.h4,
  },
  expanded: {
    height: "630px"
  },
  // categoryList: {
  //   height: 216,
  //   flexGrow: 1,
  // },
  categoryContainer: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  subCategory: {
    marginLeft: '.5rem',
    color: '#333', 
    fontSize: '14px'
  },
}));

export default function CategoryExpansion(props) {
  const classes = useStyles();
  const [dense] = React.useState(false);

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
          <div className={classes.categoryContainer}>
            <List dense={dense}>
              <Link to='/' onClick={e => props.onChnageCategory("All Ads")}>
                <li>
                  {"All Ads"}
                </li>
              </Link>
              {
                categoriesData.categories.map(value =>
                  { return (Array.isArray(value)) 
                  ? <div style={{ display: 'block' }}>
                      <Link to='/' onClick={e => props.onChnageCategory(value[0])}>
                        <li>
                          {value[0]}
                        </li>
                      </Link>
                      <div className={classes.subCategory}>
                        {value.slice(1).map(sub => {
                          return <Link to='/' onClick={e => props.onChnageCategory(sub)}><li>{sub}</li></Link>
                        })}
                      </div>
                    </div>
                  : <Link to='/' onClick={e => props.onChnageCategory(value)}><li>{value}</li></Link>
                })
              }
            </List>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}