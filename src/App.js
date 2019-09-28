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
import PostNewAd from './components/classified_ads/PostNewAd';
import SuccessfulPage from './components/classified_ads/SuccessfulPage';
import DeleteAd from './components/classified_ads/DeleteAd.js';
import DeleteSuccess from './components/classified_ads/DeleteSuccess';
import NewRecipe from './components/malini_kitchen/NewRecipe';
import SuccessfulPageMalini from './components/malini_kitchen/SuccessfulPage';
import ViewRecipe from './components/malini_kitchen/ViewRecipe';
import Dalyscope from "./components/news_room/Explorer/Dalyscope";
import Explorer from "./components/news_room/Explorer/Explorera";
import Success from './components/news_room/Explorer/Success';
import Addlink from "./components/news_room/Explorer/Addlink";
// import Joke from './components/joke/Joketable';
import Form from './components/joke/Joke_page';
import Add from './components/joke/Addbtn';
import DetailedRecipe from './components/malini_kitchen/DetailedRecipe.js';
import DetailedAd from './components/classified_ads/DetailedAd';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <MenuAppBar className="App" />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/classified_ads" exact component={ClassifiedAds} />
          <Route path="/classified_ads/new-ad" exact component={PostNewAd} />
          <Route path='/classified_ads/:title' exact component={DetailedAd} />
          <Route path='/classified_ads/ad/5/delete' exact component={DeleteAd} />
          <Route path="/classified_ads/post_new/success" exact component={SuccessfulPage} />
          <Route path='/classified_ads/delete/success' exact component={DeleteSuccess} />
          <Route path="/malinis_kitchen/:title" exact component={DetailedRecipe} />
          <Route path="/malinis_kitchen" exact component={MalinisKitchen} />
          <Route path="/malini_kitchen/new" exact component={NewRecipe} />
          <Route path="/malini_kitchen/Message_Board" exact component={MessageBoard} />
          <Route path="/malini_kitchen/category/:title" exact component={ViewRecipe} />
          <Route path="/malinis_kitchen/new/success" exact component={SuccessfulPageMalini} />
          <Route path="/malini_kitchen/:title" exact component={ViewRecipe} />
          <Route path="/message_board" exact component={MessageBoard} />
          <Route path="/message_board/Signin" exact component={Signin} />
          <Route path="/message_board/Register" exact component={Register} />
          <Route path="/photo_gallery" component={PhotoGallery} />
          <Route path="/news_room" component={NewsRoom} />
          <Route path="/message_board" component={MessageBoard} />
          <Route path="/explorer" exact component={Explorer}/>
          <Route path="/explorer/addlink/success" component={Success} />
          <Route path="/adlink" component={Addlink}/>
          <Route path="/daly_scope/" component={Dalyscope}/>
          {/* <Route path="/joke_page" exact component={Joke} /> */}
          <Route path="/joke_page/form"exact component={Form} />
          <Route path="/joke_page/form/add"exact component={Add} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
