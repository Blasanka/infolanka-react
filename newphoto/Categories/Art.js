import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component}from 'react';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import "@brainhubeu/react-carousel/lib/style.css";
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import P1 from './Dialogs/Arts/p1';
import P2 from './Dialogs/Arts/p2';
import P3 from './Dialogs/Arts/p3';
//import Btn from './';
export default class DemoCarousel extends Component {
    render(){
        return(
          <font face = "Comic sans MS"  size =" 7"> 
        <center> Art</center>
          <div style={{paddingLeft:200 , paddingRight:200 , paddingTop:50 }} >
          <Carousel >
           
          <div style={{width:'auto' , height:700}} >
            <img src="https://image.shutterstock.com/image-photo/pink-garnet-gemstones-sri-lanka-600w-1464619337.jpg"/>
              <p className="legend"><P1 /> </p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/famous-ancient-wall-paintings-frescoes-600w-39279436.jpg"/>              
          <p className="legend"><P2 /></p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/wood-carving-sri-lanka-has-600w-1306578991.jpg"/>              
          <p className="legend"><P3 /></p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/buddhist-temple-cave-ancient-drawings-600w-778590808.jpg"/>              
          <p className="legend">Legend 3</p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/war-elephant-decorated-gems-jewelry-600w-1482998663.jpg"/>              
          <p className="legend">Legend 3</p>
          </div>
      </Carousel>
      </div>
      </font>
);
    
    }
}

