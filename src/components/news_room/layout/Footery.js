import {Layout, Menu, Breadcrumb} from 'antd';
import React from "react";

const {Header, Content, Footer} = Layout;

export default class Footery extends React.Component {
    render() {
        return <React.Fragment>



            <Footer style={{textAlign: 'center', backgroundColor: '#5D6D7E'}}><h1>Infolanka</h1></Footer>
        </React.Fragment>
    }

}