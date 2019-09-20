import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function ListDividers() {
    const classes = useStyles();

    return (
        <List component="nav" className={classes.root} aria-label="mailbox folders">
            <ListItem button>
                <ListItemText primary="Daily Scoop" />
            </ListItem>
            <Divider light/>
            <ListItem button divider>
                <ListItemText primary="General Info" />
            </ListItem>
            <Divider light/>
            <ListItem button>
                <ListItemText primary="Social Issues" />
            </ListItem>
            <Divider light />
            <ListItem button>
                <ListItemText primary="Organizations" />
            </ListItem>
            <Divider light />
            <ListItem button>
                <ListItemText primary="Culture" />
            </ListItem>
            <Divider light />
            <ListItem button>
                <ListItemText primary="Nature" />
            </ListItem>
            <Divider light />
            <ListItem button>
                <ListItemText primary="History" />
            </ListItem>
            <Divider light />
            <ListItem button>
                <ListItemText primary="Sports" />
            </ListItem>
            <Divider light />
            <ListItem button>
                <ListItemText primary="Entertainment" />
            </ListItem>
            <Divider light />
            <ListItem button>
                <ListItemText primary="Food & Cooking" />
            </ListItem>
            <Divider light />
            <ListItem button>
                <ListItemText primary="Travel & Tourism" />
            </ListItem>
            <Divider light />
            <ListItem button>
                <ListItemText primary="Science & Tech." />
            </ListItem>
            <Divider light />
            <ListItem button>
                <ListItemText primary="Business." />
            </ListItem>
            <Divider light />
            <ListItem button>
                <ListItemText primary="People" />
            </ListItem>
            <Divider light />
            <ListItem button  >
                <Link to={'/adlink'}> <ListItemText primary="Religion" /></Link>
            </ListItem>
            <Divider light />
            <ListItem button>
                <ListItemText primary="Add link" />
            </ListItem>
        </List>
    );
}