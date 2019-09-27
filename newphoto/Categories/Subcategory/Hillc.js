import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component}from 'react';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import "@brainhubeu/react-carousel/lib/style.css";
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import P1 from './Hill_country/p1';
import P2 from './Hill_country/p2';
//import Btn from './';
export default class DemoCarousel extends Component {
    render(){
        return(
          <div style={{paddingLeft:200 , paddingRight:200 , paddingTop:50 }} >
          <Carousel >
           
          <div style={{width:'auto' , height:700}} >
            <img src="https://image.shutterstock.com/image-photo/indigenious-sri-lankan-tea-picker-600w-192828851.jpg"/>
              <p className="legend"><P1 /> </p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/peradeniya-royal-botanic-gardens-located-600w-1411205516.jpg"/>              
          <p className="legend"><P2 /></p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/botanical-garden-peradeniya-kandi-under-600w-1468767032.jpg"/>              
          <p className="legend"></p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/kandy-sri-lanka-july-19-600w-1177162579.jpg"/>              
          <p className="legend"></p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/worker-picking-tea-leaves-plantation-600w-1160144512.jpg"/>              
          <p className="legend"></p>
          </div>
      </Carousel>
      </div>
);
    
    }
}

