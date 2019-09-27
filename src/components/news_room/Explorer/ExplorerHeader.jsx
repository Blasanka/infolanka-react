import {Layout, Menu, Breadcrumb} from 'antd';
import React from "react";

const {Header, Content, Footer} = Layout;

export default class ExplorerHeader extends React.Component {
    render() {
        return <React.Fragment>
            <Header style={{textAlign: 'center', backgroundColor: '#b2cbfe'}}><h2>Sri Lanka Explorer</h2></Header>
            
        </React.Fragment>
    }

}