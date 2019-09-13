import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function CategoryTreeView() {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <TreeItem nodeId="1" label="Brides (3)">
        <TreeItem nodeId="2" label="----" />
        <TreeItem nodeId="3" label="----" />
        <TreeItem nodeId="4" label="----" />
      </TreeItem>
      <TreeItem nodeId="5" label="Grooms (3)"><TreeItem /></TreeItem>
      <TreeItem nodeId="6" label="Land (3)">
        <TreeItem nodeId="7" label="Colombo" />
        <TreeItem nodeId="8" label="Other" />
      </TreeItem>
      <TreeItem nodeId="9" label="Property (3)">
        <TreeItem nodeId="7" label="Colombo" />
        <TreeItem nodeId="8" label="Other" />
      </TreeItem>
      <TreeItem nodeId="10" label="Friends (3)"><TreeItem /></TreeItem>
      <TreeItem nodeId="11" label="Buy &amp; Sell (3)"><TreeItem /></TreeItem>
      <TreeItem nodeId="12" label="Business (3)">
        <TreeItem nodeId="13" label="Local Business" />  
        <TreeItem nodeId="14" label="Foreign Business" />  
      </TreeItem>
      <TreeItem nodeId="15" label=" Jobs (3)"><TreeItem /></TreeItem>
      <TreeItem nodeId="16" label="Accom (3)">
        <TreeItem nodeId="17" label="Colombo" />
        <TreeItem nodeId="18" label="Other" />
      </TreeItem>
      <TreeItem nodeId="19" label="Friends (3)"><TreeItem /></TreeItem>
      <TreeItem nodeId="20" label="Travel (3)"><TreeItem /></TreeItem>
      <TreeItem nodeId="21" label="Services (3)"><TreeItem /></TreeItem>
      <TreeItem nodeId="22" label="Vehicles (3)"><TreeItem /></TreeItem>
      <TreeItem nodeId="23" label="Education (3)"><TreeItem /></TreeItem>
      <TreeItem nodeId="24" label="help (3)"><TreeItem /></TreeItem>
    </TreeView>
  );
}