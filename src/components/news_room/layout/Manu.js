import { Menu, Icon } from 'antd';
import React from "react";
const { SubMenu } = Menu;

export default class Manu extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="home">
                    <Icon type="home" />
                </Menu.Item>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
              <Icon type="read" />
              News papers
            </span>
                    }
                >

                        <Menu.Item key="setting:1"><a href="http://www.ada.lk/" target="_blank" rel="noopener noreferrer">
                        </a>Ada</Menu.Item>
                        <Menu.Item key="setting:2"><a href="http://www.aruna.lk/" target="_blank" rel="noopener noreferrer">
                        </a>Aruna</Menu.Item>
                        <Menu.Item key="setting:3"><a href="http://www.budusarana.lk/" target="_blank" rel="noopener noreferrer">
                        </a>Budusarana</Menu.Item>
                        <Menu.Item key="setting:4"><a href="http://www.dailymirror.lk/" target="_blank" rel="noopener noreferrer">
                        </a>Daily Mirror</Menu.Item>
                        <Menu.Item key="setting:5"><a href="http://www.dailynews.lk/" target="_blank" rel="noopener noreferrer">
                        </a>Daily News</Menu.Item>
                        <Menu.Item key="setting:6"><a href="http://deshaya.lk/" target="_blank" rel="noopener noreferrer">
                        </a>Deshaya</Menu.Item>
                        <Menu.Item key="setting:7"><a href="http://www.dinamina.lk/" target="_blank" rel="noopener noreferrer">
                        </a>Dinamina</Menu.Item>
                        <Menu.Item key="setting:8"><a href="http://divaina.com/" target="_blank" rel="noopener noreferrer">
                        </a>Divaina</Menu.Item>
                        <Menu.Item key="setting:9"><a href="http://www.lankadeepa.lk/" target="_blank" rel="noopener noreferrer">
                        </a>Lanka Deepa</Menu.Item>
                        <Menu.Item key="setting:10 "><a href="http://www.lakbima.lk/" target="_blank" rel="noopener noreferrer">
                        </a>Lakbima</Menu.Item>

                </SubMenu>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
                 <Icon type="desktop" />
                TV
            </span>
                    }
                >
                    <Menu.Item key="setting:1"><a href="http://www.adaderana.lk/" target="_blank" rel="noopener noreferrer">
                    </a>Ada derana</Menu.Item>
                    <Menu.Item key="setting:2"><a href="http://www.asianmirror.lk/" target="_blank" rel="noopener noreferrer">
                    </a>Asian mirror</Menu.Item>
                    <Menu.Item key="setting:3"><a href="http://www.asiantribune.com/" target="_blank" rel="noopener noreferrer">
                    </a>Asian tribune</Menu.Item>
                    <Menu.Item key="setting:4"><a href="https://www.bbc.com/sinhala" target="_blank" rel="noopener noreferrer">
                    </a>Bbc sinhala</Menu.Item>
                    <Menu.Item key="setting:5"><a href="https://www.bbc.com/sinhala" target="_blank" rel="noopener noreferrer">
                    </a>Bbc sinhala</Menu.Item>
                    <Menu.Item key="setting:6"><a href="https://www.bbc.com/tamil" target="_blank" rel="noopener noreferrer">
                    </a>Bbc tamil</Menu.Item>
                    <Menu.Item key="setting:7"><a href="https://www.bbc.com/sinhala" target="_blank" rel="noopener noreferrer">
                    </a>Bbc sinhala</Menu.Item>
                    <Menu.Item key="setting:8"><a href="https://www.bbc.com/sinhala" target="_blank" rel="noopener noreferrer">
                    </a>Bbc sinhala</Menu.Item>
                    <Menu.Item key="setting:9"><a href="https://www.bbc.com/sinhala" target="_blank" rel="noopener noreferrer">
                    </a>Bbc sinhala</Menu.Item>
                    <Menu.Item key="setting:10"><a href="https://www.bbc.com/sinhala" target="_blank" rel="noopener noreferrer">
                    </a>Bbc sinhala</Menu.Item>
                    <Menu.Item key="setting:11"><a href="https://www.bbc.com/sinhala" target="_blank" rel="noopener noreferrer">
                    </a>Bbc sinhala</Menu.Item>


                </SubMenu>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
                <Icon type="sound" />
              Redio
            </span>
                    }
                >

                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>

                </SubMenu>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
              <Icon type="solution" />
              News site
            </span>
                    }
                >

                    <Menu.Item key="setting:1"><a href="http://www.adaderana.lk/" target="_blank" rel="noopener noreferrer">
                    </a>Ada derana</Menu.Item>
                    <Menu.Item key="setting:2"><a href="http://www.asianmirror.lk/" target="_blank" rel="noopener noreferrer">
                    </a>Asian mirror</Menu.Item>
                    <Menu.Item key="setting:3"><a href="http://www.asiantribune.com/" target="_blank" rel="noopener noreferrer">
                    </a>Asian tribune</Menu.Item>
                    <Menu.Item key="setting:4"><a href="https://www.bbc.com/sinhala" target="_blank" rel="noopener noreferrer">
                    </a>Bbc sinhala</Menu.Item>
                    <Menu.Item key="setting:5"><a href="https://www.bbc.com/sinhala" target="_blank" rel="noopener noreferrer">
                    </a>Bbc sinhala</Menu.Item>
                    <Menu.Item key="setting:6"><a href="https://www.bbc.com/tamil" target="_blank" rel="noopener noreferrer">
                    </a>Bbc tamil</Menu.Item>
                    <Menu.Item key="setting:7"><a href="https://www.bbc.com/sinhala" target="_blank" rel="noopener noreferrer">
                    </a>Bbc sinhala</Menu.Item>
                    <Menu.Item key="setting:8"><a href="https://www.bbc.com/sinhala" target="_blank" rel="noopener noreferrer">
                    </a>Bbc sinhala</Menu.Item>
                    <Menu.Item key="setting:9"><a href="https://www.bbc.com/sinhala" target="_blank" rel="noopener noreferrer">
                    </a>Bbc sinhala</Menu.Item>
                    <Menu.Item key="setting:10"><a href="https://www.bbc.com/sinhala" target="_blank" rel="noopener noreferrer">
                    </a>Bbc sinhala</Menu.Item>
                    <Menu.Item key="setting:11"><a href="https://www.bbc.com/sinhala" target="_blank" rel="noopener noreferrer">
                    </a>Bbc sinhala</Menu.Item>


                </SubMenu>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
              <Icon type="video-camera" />
                    Video
            </span>
                    }
                >

                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>

                </SubMenu>


            </Menu>
        );
    }
}

