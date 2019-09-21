import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {Layout} from "antd";
import Manu from "./layout/Manu";
import SlideShow from "./HomeComponent/SlideShow";
import Home from "./HomeComponent/Home.jsx";


function NewsRoom() {
  return (
      <Layout className="layout">

          <Manu/>
          <SlideShow/>
          {/*<Cardtest/>*/}
          <Home/>


      </Layout>

  );
}

export default NewsRoom;