import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AdsGrid from "./AdsGrid.js";
import AdsList from "./AdsList.js";
import CategoryExpansion from "./CategoryExpansion.js";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
import AdsPagination from "./Pagination.js";
import SimpleBreadcrumbs from "./BreadCrumb.js";
import adsData from './data/ads.json';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  header: {
    // marginLeft: '10%',
    // marginRight: '10%',
  },
  margin: {
    backgroundColor: "#ffbf00",
    textTransform: "none"
  },
  adContainer: {
    height: "150px",
    width: "96%",
    backgroundColor: "#fff",
    margin: "1rem"
  },
  adContainerVertical: {
    height: "700px",
    width: "94%",
    backgroundColor: "#fff",
    marginTop: "1rem"
  },
  adSpace: {
    color: "grey",
    padding: "50% auto",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "150px"
  },
  adSpaceVertical: {
    color: "grey",
    padding: "50% auto",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "875px"
  }
}));

class ToggleView extends React.Component {
  state = {
    listView: false,
    gridView: true
  };

  handleList = () => {
    this.setState({
      listView: true,
      gridView: false
    });
  };

  handleGrid = () => {
    this.setState({
      listView: false,
      gridView: true
    });
  };

  render() {
    return this.state.gridView ? (
      <div>
          {/* Paper style = {{ overflow:'auto', margin: '0.5rem' }} */}
        <SimpleBreadcrumbs
          subRouteName={this.props.subRouteName}
          handleGrid={this.handleGrid}
          handleList={this.handleList}
        />
        <AdsGrid data={adsData} />
      </div>
    ) : (
      <div>
        <SimpleBreadcrumbs
          subRouteName={this.state.subRouteName}
          handleGrid={this.handleGrid}
          handleList={this.handleList}
        />
        <AdsList data={adsData} />
      </div>
    );
  }
}

export default function ClassifiedAds() {
  const classes = useStyles();
  const [subRouteName, setSubRouteName] = useState(
    'All Ads'
  );

  function onChnageCategory(value) {
    setSubRouteName(value)
    console.log(subRouteName);
  }

  return (
    <div className={classes.header}>
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Box overflow="hidden">
          <div
            style={{ display: "inline-block", width: "55%", overflow: "auto" }}
          >
            <h4 style={{ float: "left" }}>Classified Ads</h4>
            <div style={{ float: "right" }}>
              <Fab
                variant="extended"
                size="medium"
                color="secondary"
                aria-label="add"
                className={classes.margin}
                component={Link}
                to="/classified_ads/new-ad"
              >
                <Typography>Post an ad</Typography>
              </Fab>
            </div>
          </div>
          {/* <SimpleBreadcrumbs /> */}
          <div style={{ display: "flex" }}>
            <Typography
              component="div"
              style={{ backgroundColor: "#eee", width: "75%" }}
            >
              <ToggleView
                subRouteName= {subRouteName} />
              <AdsPagination />
              <div className={classes.adContainer}>
                <p className={classes.adSpace}>Ad Space</p>
              </div>
            </Typography>
            <Typography
              component="div"
              style={{ backgroundColor: "#eee", width: "25%" }}
            >
              <CategoryExpansion
                onChnageCategory= {onChnageCategory} />
              <div className={classes.adContainerVertical}>
                <p className={classes.adSpaceVertical}>Ad Space</p>
              </div>
            </Typography>
          </div></Box>
        </Container>
      </React.Fragment>
    </div>
  );
}
