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
import Explorer from "./components/news_room/Explorer/Explorera";
function App() {
  return (
    <div>
      <Router>
        <MenuAppBar className="App" />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/classified_ads" component={ClassifiedAds} />
          <Route path="/malinis_kitchen" component={MalinisKitchen} />
          <Route path="/photo_gallery" component={PhotoGallery} />
          <Route path="/news_room" component={NewsRoom} />
          <Route path="/message_board" component={MessageBoard} />
          <Route path="/explorer" component={Explorer}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
