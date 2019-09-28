import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import beauty from "./beauty.component";
import wild from "./wild.component";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

class PhotoGallery extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <CssBaseline />
          <Container fixed>
            <Box>
              <Router>
                <div
                  className="App"
                  style={{
                    textAlign: "center",
                    marginLeft: "200px",
                    marginRight: "200px",
                    marginTop: "70px"
                  }}
                >
                  <h1>PHOTO GALLARY</h1>
                  <br />
                  <p>
                    Warm greetings from Sri Lanka, the land of a thousand
                    breathtaking spectacles. As you journey through these pages,
                    we invite you to enjoy the lush foliage of the country side,
                    the mountains full of tea gardens, the patchwork quiltlike
                    rice paddies, the wholesome village life, the never ending
                    stretches of coconut fringed beaches, the exquisite
                    underwater coral scapes, cascading waterfalls, colorful
                    festivals and pageantry, magnificient ancient cities, nearly
                    half as old as time, the flowers in all their
                    glory...nature's bounty in such abundance!! Most of all,
                    enjoy the images of Sri Lanka's most treasured
                    resource...her people. A Y U B O W A N... as the Sri Lankan
                    greeting says, May You enjoy the gift of long life. Enjoy
                    your stay!!
                  </p>
                </div>
                <div
                  className="container"
                  style={{
                    width: "auto",
                    height: "10px",
                    margin: "auto",
                    padding: "50px"
                  }}
                >
                  <nav className="navbar navbar-navbar-expand-lg navbar-navbar-dark bg-bg-primary">
                    <Link to={"/beauty"} className="navbar-brand">
                      SCENIC BEAUTY
                    </Link>
                    <Link to={"/wild"} className="navbar-brand">
                      WILD LIFE
                    </Link>
                    <Link to={"/beauty"} className="navbar-brand">
                      HISTORICAL SITES
                    </Link>
                    <Link to={"/beauty"} className="navbar-brand">
                      FESTIVALS
                    </Link>
                    <Link to={"/beauty"} className="navbar-brand">
                      VILLAGE LIFE
                    </Link>
                    <Link to={"/beauty"} className="navbar-brand">
                      ART
                    </Link>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav mr-auto">
                        {/* <li className="nav-item">
                  <Link to={'/'} className="nav-link">home</Link>
                </li> */}
                        {/* <li className="nav-item">
                  <Link to={'/beauty'} className="nav-link">beauty</Link>
                </li> */}
                        {/* <li className="nav-item">
                  <Link to={'/wild'} className="nav-link">wild</Link>
                </li> */}
                      </ul>
                    </div>
                  </nav>{" "}
                  <br />
                  {/* <h2></h2> <br/> */}
                  <Switch>
                    <Route exact path="/beauty" component={beauty} />
                    <Route exact path="/wild" component={wild} />
                  </Switch>
                </div>
              </Router>
            </Box>
          </Container>
        </React.Fragment>
      </div>
    );
  }
}
export default PhotoGallery;
