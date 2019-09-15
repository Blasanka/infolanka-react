import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Home from './HomeComponent/Home';
import Nav from "./layout/Nav";
import Footerx from "./layout/title";
import {Layout} from "antd";
import Footery from "./layout/Footery";
import Manu from "./layout/Manu";
import {switchCase} from "@babel/types";


function NewsRoom() {
  return (
      <Layout className="layout">

          <Manu/>
          <Home/>
          <Footery/>

      </Layout>

  );
}

export default NewsRoom;