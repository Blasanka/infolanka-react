import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component}from 'react';
import "@brainhubeu/react-carousel/lib/style.css";
//import ModalImage from "react-modal-image";
import { Carousel } from 'react-responsive-carousel';
import P1 from './Dialogs/Visitors/p1';
import P2 from './Dialogs/Visitors/p2';

//import Btn from './';
export default class DemoCarousel extends Component {
    render(){
        return(
          <font face = "Comic sans MS"  size =" 7"> 
        <center>  Contributed by Visitors</center>
          <div style={{paddingLeft:200 , paddingRight:200 , paddingTop:50 }} >
          <Carousel >
           
          <div style={{width:'auto' , height:700}} >
            <img src="https://image.shutterstock.com/image-photo/pinavalla-sri-lanka-november-23-600w-195150041.jpg" />
            
              <p className="legend">Contributed by Joachim Scheider  <P1 /></p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/pinnawala-sri-lanka-january-23-600w-562660525.jpg"/>              
          <p className="legend">Contributed by Joachim Scheider   <P2 /></p>
          </div>
          <div style={{width:'auto' , height:400}}>
          <img src="https://image.shutterstock.com/image-photo/elephants-cooling-down-maha-oya-600w-1357857023.jpg"/>              
          <p className="legend">Contributed by Joachim Scheider</p>
          </div>
         
      </Carousel>
      </div>
      </font>
);
    
    }
}

