import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component}from 'react';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import "@brainhubeu/react-carousel/lib/style.css";
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import P1 from './Village_life/p1';
import P2 from './Village_life/p2';
//import Btn from './';
export default class DemoCarousel extends Component {
    render(){
        return(
          <div style={{paddingLeft:200 , paddingRight:200 , paddingTop:50 }} >
          <Carousel >
           
          <div style={{width:'auto' , height:700}} >
            <img src="https://image.shutterstock.com/image-photo/colourful-sri-lankan-vesak-lanterns-600w-1274548990.jpg"/>
              <p className="legend"><P1 /> </p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/monks-coming-ruwanwelisaya-stupa-anuradhapura-600w-782646292.jpg"/>              
          <p className="legend"><P2 /></p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/couple-love-drinking-tea-home-600w-785286871.jpg"/>              
          <p className="legend"></p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/tissamaharama-sri-lanka-november-27-260nw-555195706.jpg"/>              
          <p className="legend"></p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/coconut-palm-tree-fruits-yellow-600w-1285990909.jpg"/>              
          <p className="legend"></p>
          </div>
      </Carousel>
      </div>
);
    
    }
}

