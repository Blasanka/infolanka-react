import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {Layout} from "antd";
import Manu from "./layout/Manu";
import SlideShow from "./HomeComponent/SlideShow";
import Home from "./HomeComponent/Home";
import { Row, Col } from 'antd';



function NewsRoom() {
  return (
      <Layout className="layout">
          <Row>
              <Manu/>
          </Row>
          <Row>
              <Col span = {2}></Col>
              <Col span ={20}>
                  <SlideShow/>
              </Col>
              <Col span ={2}></Col>
          </Row>

          {/*<SlideShow/>*/}
          {/*<Cardtest/>*/}
          <Home/>


      </Layout>

  );
}

export default NewsRoom;