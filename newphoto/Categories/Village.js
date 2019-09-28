import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component}from 'react';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import "@brainhubeu/react-carousel/lib/style.css";
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import P1 from './Dialogs/Village/p1';
import P2 from './Dialogs/Village/p2';
import P3 from './Dialogs/Village/p3';
//import Btn from './';
export default class DemoCarousel extends Component {
    render(){
        return(
          <font face = "Comic sans MS"  size =" 7"> 
        <center>  Village Life</center>
          <div style={{paddingLeft:200 , paddingRight:200 , paddingTop:50 }} >
          <Carousel >
           
          <div style={{width:'auto' , height:700}} >
            <img src="https://image.shutterstock.com/image-photo/batticoala-sri-lanka-feb-15-600w-202303825.jpg"/>
              <p className="legend"><P1 /> </p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/vegetable-shop-sri-lanka-600w-84645223.jpg"/>              
          <p className="legend"><P2 /></p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/street-vegetable-vendor-srilanka-sells-600w-254930857.jpg"/>              
          <p className="legend"><P3 /></p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/worker-picking-tea-leaves-plantation-600w-1160144512.jpg"/>              
          <p className="legend"></p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/silhouette-asian-fisherman-on-wooden-600w-506265067.jpg"/>              
          <p className="legend"></p>
          </div>
      </Carousel>
      </div>
      </font>
);
    
    }
}

