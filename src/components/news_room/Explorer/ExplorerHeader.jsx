import {Layout, Menu, Breadcrumb} from 'antd';
import React from "react";

const {Header, Content, Footer} = Layout;

export default class ExplorerHeader extends React.Component {
    render() {
        return <React.Fragment>
            <Header style={{textAlign: 'center', backgroundColor: '#5d7cfe'}}><h2><b>Sri Lanka Explorer</b></h2></Header>
            
        </React.Fragment>
    }

}