import React from 'react';
import './App.css';
import MenuAppBar from './components/AppBar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home.js';
import ClassifiedAds from './components/classified_ads/ClassifiedAds.js';
import MalinisKitchen from './components/malini_kitchen/MalinisKitchen.js';
import PhotoGallery from './components/photo_gallery/PhotoGallery';
import NewsRoom from './components/news_room/NewsRoom';
import MessageBoard from './components/message_board/MessageBoard';
import Signin from './components/message_board/signin'
import Register from './components/message_board/Register'
function App() {
  return (
    <div>
      <Router>
        <MenuAppBar className="App" />
        <Switch>
          <Route path="/classified_ads" component={ClassifiedAds} />
          <Route path="/malinis_kitchen" component={MalinisKitchen} />
          <Route path="/photo_gallery" component={PhotoGallery} />
          <Route path="/news_room" component={NewsRoom} />
          <Route path="/message_board" exact component={MessageBoard} />
          <Route path="/message_board/Signin" component={Signin} />
          <Route path="/message_board/Register" component={Register} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
