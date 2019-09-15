import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Home from './HomeComponent/Home';
import Nav from "./layout/Nav";
import Footerx from "./layout/title";
import {Layout} from "antd";
import Footery from "./layout/Footery";
import Manu from "./layout/Manu";
import {Route, Switch} from "react-router";
import explohome from "../Explorer/explohome/explohome";


export default class Routes extends React.Component{


    render() {
        return <React.Fragment>
            <Layout className="layout">
                <Manu/>

                <Route path={'/'} exact component={explohome}/>
                <Footery/>
            </Layout>

        </React.Fragment>
    }
}