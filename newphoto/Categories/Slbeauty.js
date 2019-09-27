import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component}from 'react';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import "@brainhubeu/react-carousel/lib/style.css";
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import P1 from './Dialogs/Beauty/p1';
import P3 from './Dialogs/Beauty/p3';
import P2 from './Dialogs/Beauty/p2';

export default class DemoCarousel extends Component {
    render(){
        return(
          <font face = "Comic sans MS"  size =" 7"> 
        <center>  Scenic Beauty</center>
          <div style={{paddingLeft:200 , paddingRight:200 , paddingTop:50 }} >
          <Carousel >
           
          <div style={{width:'auto' , height:700}} >
            <img src="https://image.shutterstock.com/image-photo/photo-sri-lankan-waterfall-named-600w-1366464701.jpg"/>
              <p className="legend"><P1 /> </p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/sri-lanka-stlitfisherman-600w-589890524.jpg"/>              
          <p className="legend"><P2 /></p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/sri-lankan-blue-lotus-flower-600w-1509796418.jpg"/>              
          <p className="legend"><P3 /></p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/sri-lankan-wild-flowers-600w-1375078979.jpg"/>              
          <p className="legend"></p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/rice-field-kandy-sri-lanka-600w-372096901.jpg"/>              
          <p className="legend"></p>
          </div>
      </Carousel>
      </div>
     
      </font>
);
    
    }
}

