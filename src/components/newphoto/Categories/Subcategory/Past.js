import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component}from 'react';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import "@brainhubeu/react-carousel/lib/style.css";
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import P1 from './Past/p1';
import P2 from './Past/p2';
//import Btn from './';
export default class DemoCarousel extends Component {
    render(){
        return(
          <div style={{paddingLeft:200 , paddingRight:200 , paddingTop:50 }} >
          <Carousel >
           
          <div style={{width:'auto' , height:700}} >
            <img src="https://image.shutterstock.com/image-photo/lankatilaka-temple-polonnaruwa-srilanka-600w-392268976.jpg"/>
              <p className="legend"><P1 /> </p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/avukana-buddha-statue-near-kekirawa-600w-337464467.jpg"/>              
          <p className="legend"><P2 /></p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/temple-sri-maha-bodhi-oldest-600w-283292765.jpg"/>              
          <p className="legend"></p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/close-view-rock-fortress-sigiriya-600w-1346399780.jpg"/>              
          <p className="legend"></p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/exterior-entrance-sigiriya-lion-rock-600w-309266633.jpg"/>              
          <p className="legend"></p>
          </div>
      </Carousel>
      </div>
);
    
    }
}

