import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component}from 'react';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import "@brainhubeu/react-carousel/lib/style.css";
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import P1 from './Dialogs/History/p1';
import P2 from './Dialogs/History/p2';
import P3 from './Dialogs/History/p3';
//import Btn from './';
export default class DemoCarousel extends Component {
    render(){
        return(
          <font face = "Comic sans MS"  size =" 7"> 
        <center>  Historical Sites</center>
          <div style={{paddingLeft:200 , paddingRight:200 , paddingTop:50 ,paddingBottom:100}} >
          <Carousel >
           
          <div style={{width:'auto' , height:700}} >
            <img src="https://image.shutterstock.com/image-photo/sigiriya-lion-rock-600w-523787728.jpg"/>
              <p className="legend"><P1 /> </p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/avukana-buddha-statue-near-kekirawa-600w-337464467.jpg"/>              
          <p className="legend"><P2 /></p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/temple-sacred-tooth-relic-that-600w-455020873.jpg"/>              
          <p className="legend"><P3 /></p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/pathirakali-amman-temple-pathrakali-ambal-600w-676607722.jpg"/>              
          <p className="legend"></p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/sri-lankan-stupa-buddhist-religious-600w-1367231564.jpg"/>              
          <p className="legend"></p>
          </div>
      </Carousel>
      </div>
      </font>
);
    
    }
}

