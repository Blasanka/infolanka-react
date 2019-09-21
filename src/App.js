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
import PostNewAd from './components/classified_ads/PostNewAd';
import SuccessfulPage from './components/classified_ads/SuccessfulPage';
import DeleteAd from './components/classified_ads/DeleteAd.js';
import DeleteSuccess from './components/classified_ads/DeleteSuccess';
import NewRecipe from './components/malini_kitchen/NewRecipe';
import SuccessfulPageMalini from './components/malini_kitchen/SuccessfulPage';
import ViewRecipe from './components/malini_kitchen/ViewRecipe';
import Explorer from "./components/news_room/Explorer/Explorera";
import Addlink from "./components/news_room/Explorer/Addlink";

function App() {
  return (
    <div>
      <Router>
        <MenuAppBar className="App" />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/classified_ads" exact component={ClassifiedAds} />
          <Route path="/classified-ads/new-ad" exact component={PostNewAd} />
          <Route path='/classified-ads/ad/5/delete' exact component={DeleteAd} />
          <Route path="/classified-ads/post_new/success" exact component={SuccessfulPage} />
          <Route path='/classified-ads/delete/success' exact component={DeleteSuccess} />
          <Route path="/malinis_kitchen" exact component={MalinisKitchen} />
          <Route path="/malini_kitchen/new" exact component={NewRecipe} />
          <Route path="/malini_kitchen/Message_Board" exact component={MessageBoard} />
          <Route path="/malini_kitchen/:title" exact component={ViewRecipe} />
          <Route path="/malinis_kitchen/new/success" component={SuccessfulPageMalini} />
          <Route path="/photo_gallery" component={PhotoGallery} />
          <Route path="/news_room" component={NewsRoom} />
          <Route path="/message_board" component={MessageBoard} />
          <Route path="/explorer" component={Explorer}/>
          <Route path="/adlink" component={Addlink}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
