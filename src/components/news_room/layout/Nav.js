import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import React from "react";
import Home from "../HomeComponent/Home";

const {Header, Content, Footer} = Layout;

export default class Nav extends React.Component {
    render() {
        return <React.Fragment>

                <Header>
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{lineHeight: '64px'}}
                    >
                        <Menu.Item key="1">News paper</Menu.Item>
                        <Menu.Item key=" <Home/>">News site</Menu.Item>
                        <Menu.Item key="3">TV</Menu.Item>
                        <Menu.Item key="4">Redio</Menu.Item>
                        <Menu.Item key="5">Video</Menu.Item>
                        <Menu.Item key="6">Achives</Menu.Item>
                        <Menu.Item key="7" style={{ alignItems: 'left'}}><Icon type="diff" /></Menu.Item>
                    </Menu>

                </Header>
                {/*<Content style={{padding: '0 50px'}}>*/}
                {/*    <Breadcrumb style={{margin: '16px 0'}}>*/}
                {/*        <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                {/*        <Breadcrumb.Item>List</Breadcrumb.Item>*/}
                {/*        <Breadcrumb.Item>App</Breadcrumb.Item>*/}
                {/*    </Breadcrumb>*/}
                {/*    <div style={{background: '#fff', padding: 24, minHeight: 280}}>Content</div>*/}
                {/*</Content>*/}
                {/*<Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>*/}
        </React.Fragment>
    }

}