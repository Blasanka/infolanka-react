import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component}from 'react';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import "@brainhubeu/react-carousel/lib/style.css";
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import P1 from './Elephants/p1';
import P2 from './Elephants/p2';
//import Btn from './';
export default class DemoCarousel extends Component {
    render(){
        return(
          <div style={{paddingLeft:200 , paddingRight:200 , paddingTop:50 }} >
          <Carousel >
           
          <div style={{width:'auto' , height:700}} >
            <img src="https://image.shutterstock.com/image-photo/animals-wildlife-concept-bathing-elephants-600w-587181809.jpg"/>
              <p className="legend"><P1 /> </p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/elephants-pinnawela-sri-lanka-600w-332215100.jpg"/>              
          <p className="legend"><P2 /></p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/pinnawala-sri-lanka-november-25-600w-665066077.jpg"/>              
          <p className="legend"></p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/pinnawala-sri-lanka-august-12-600w-666124204.jpg"/>              
          <p className="legend"></p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/sri-lanka-pinnawela-elephants-nursery-600w-1253083618.jpg"/>              
          <p className="legend"></p>
          </div>
      </Carousel>
      </div>
);
    
    }
}

