import {Carousel, Col, Row} from 'antd';
import {Component} from "react";
import React from 'react';
import c1 from '../../../../src/assests/c1.jpg';
import c2 from '../../../../src/assests/c2.jpg';
import c3 from '../../../../src/assests/c3.jpg';

class SlideShow extends Component {

    render() {
        return <div style={{width: "'100%", height:400}}>
            <Row>
                <Carousel autoplay>
                    <div>
                        <img width={1400} height={400}
                             src={'https://i.ytimg.com/vi/ennVdPqhOKc/maxresdefault.jpg'}/>
                    </div>
                    <div>
                        <img width={1400} height={400}
                             src={'http://goldfm.lk//main_slides/1527661211_3476069_goldfm_goldfm.jpg'}/>
                    </div>
                    <div>
                        <img width={1400} height={400}
                             src={'https://i.ytimg.com/vi/ennVdPqhOKc/maxresdefault.jpg'}/>
                    </div>
                    <div>
                        <img width={1400} height={400}
                             src={'https://u.jimcdn.com/cms/o/sf456f4ebaaa8415e/emotion/crop/header.jpg?t=1279200644'}/>
                    </div>
                </Carousel>
            </Row>
        </div>;

    }
}
export default SlideShow;