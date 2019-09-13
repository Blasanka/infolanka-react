import React from 'react';
import './App.css';
import MenuAppBar from './components/AppBar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home.js';
import ClassifiedAds from './components/ClassifiedAds.js';
import MalinisKitchen from './components/MalinisKitchen.js';

function App() {
  return (
    <div>
      <Router>
        <MenuAppBar className="App" />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/classified_ads" component={ClassifiedAds} />
          <Route path="/malinis_kitchen" component={MalinisKitchen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
