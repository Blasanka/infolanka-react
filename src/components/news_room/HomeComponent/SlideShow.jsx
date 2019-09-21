import {Carousel, Col, Row} from 'antd';
import {Component} from "react";
import React from 'react';
import c1 from '../../../../src/assests/c1.jpg';
import c2 from '../../../../src/assests/c2.jpg';

class SlideShow extends Component {
    render() {
        return <div style={{width:"'100%"}}>
            <Row>
                <Carousel autoplay>
                    <div>
                        <img width={1900} height={800}
                             src={c1}/>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <img src={c2}/>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel>
            </Row>
        </div>
    }
}
export default SlideShow;