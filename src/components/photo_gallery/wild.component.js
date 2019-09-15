import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component}from 'react';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import Image1 from "./ani.jpg";
import Image2 from "./doni.jpg";
import Image3 from "./ke.jpg";
export default class Create extends Component {
    render(){
        return(
//const com = () => (
  <div
    className="App"
    style={{ width: "auto", height:"10px" ,margin: "auto", padding: "200px" }}
  >
    <Carousel arrows infinite>
      <img src={Image1} alt="Smiley face"/>
      <img src={Image2} alt="Smiley "/>
      <img src={Image3} alt="Smiley fa"/>
    </Carousel>
  </div>
);
     //   )
    }
}
//export default App;