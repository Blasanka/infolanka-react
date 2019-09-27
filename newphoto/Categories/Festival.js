import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component}from 'react';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import "@brainhubeu/react-carousel/lib/style.css";
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import P1 from './Dialogs/Festival/p1';
import P2 from './Dialogs/Festival/p2';
import P3 from './Dialogs/Festival/p3';
//import Btn from './';
export default class DemoCarousel extends Component {
    render(){
        return(
          <font face = "Comic sans MS"  size =" 7"> 
        <center>  Festivals</center>
          <div style={{paddingLeft:200 , paddingRight:200 , paddingTop:50 }} >
          <Carousel >
           
          <div style={{width:'auto' , height:700}} >
            <img src="https://image.shutterstock.com/image-photo/tamil-nadu-india-january-16-600w-797126131.jpg"/>
              <p className="legend"><P1 /> </p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/kandy-sri-lanka-august-07-600w-701862754.jpg"/>              
          <p className="legend"><P2 /></p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/kandy-sri-lanka-august-07-600w-701860285.jpg"/>              
          <p className="legend"><P3 /></p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/colourful-sri-lankan-vesak-lanterns-600w-1317070796.jpg"/>              
          <p className="legend"></p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/vesak-lanters-colombo-sri-lanka-600w-1273101334.jpg"/>              
          <p className="legend"></p>
          </div>
      </Carousel>
      </div>
      </font>
);
    
    }
}

