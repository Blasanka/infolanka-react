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
                    <Menu.Item key="setting:1"><a href="http://www.derana.lk/" target="_blank" rel="noopener noreferrer">
                    </a>Derana</Menu.Item>
                    <Menu.Item key="setting:2"><a href="http://www.hirutv.lk/" target="_blank" rel="noopener noreferrer">
                    </a>Hiru Tv</Menu.Item>
                    <Menu.Item key="setting:3"><a href="https://www.itn.lk/" target="_blank" rel="noopener noreferrer">
                    </a>ITN</Menu.Item>
                    <Menu.Item key="setting:4"><a href="http://www.rupavahini.lk/" target="_blank" rel="noopener noreferrer">
                    </a>Rupawahini</Menu.Item>
                    <Menu.Item key="setting:5"><a href="http://sirasatv.lk/" target="_blank" rel="noopener noreferrer">
                    </a>Sirasa TV</Menu.Item>
                    <Menu.Item key="setting:6"><a href="http://www.swarnavahini.lk/" target="_blank" rel="noopener noreferrer">
                    </a>Swarnawahini</Menu.Item>



                </SubMenu>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
                <Icon type="sound" />
              Redio
            </span>
                    }
                >

                    <Menu.Item key="setting:6"><a href="http://www.fmderana.lk" target="_blank" rel="noopener noreferrer">
                    </a>Fm Derana</Menu.Item>
                    <Menu.Item key="setting:6"><a href="http://www.goldfm.lk/" target="_blank" rel="noopener noreferrer">
                    </a>goldfm</Menu.Item>
                    <Menu.Item key="setting:6"><a href="http://www.hirufm.lk/" target="_blank" rel="noopener noreferrer">
                    </a>Hiru fm</Menu.Item>
                    <Menu.Item key="setting:6"><a href="https://lakhanda.lk/" target="_blank" rel="noopener noreferrer">
                    </a>Lakhada</Menu.Item>
                    <Menu.Item key="setting:6"><a href="http://www.nethfm.com/" target="_blank" rel="noopener noreferrer">
                    </a>Neth fm</Menu.Item>
                    <Menu.Item key="setting:6"><a href="http://www.radionine.lk/" target="_blank" rel="noopener noreferrer">
                    </a>radionine</Menu.Item>
                    <Menu.Item key="setting:6"><a href="http://redfm.lk/" target="_blank" rel="noopener noreferrer">
                    </a>redfm</Menu.Item>
                    <Menu.Item key="setting:6"><a href="http://www.rhythmworld.lk/" target="_blank" rel="noopener noreferrer">
                    </a>rhythomworld</Menu.Item>
                    <Menu.Item key="setting:6"><a href="http://shakthifm.com/" target="_blank" rel="noopener noreferrer">
                    </a>Shakthi fm</Menu.Item>
                    <Menu.Item key="setting:6"><a href="http://sirasafm.lk/" target="_blank" rel="noopener noreferrer">
                    </a>sirasa fm</Menu.Item>
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

                    <Menu.Item key="setting:11"><a href="http://col3negoriginal.lk/" target="_blank" rel="noopener noreferrer">
                    </a>col3negoriginal</Menu.Item>
                    <Menu.Item key="setting:11"><a href="http://lankahq.net/" target="_blank" rel="noopener noreferrer">
                    </a>lankanhq</Menu.Item>
                    <Menu.Item key="setting:11"><a href="http://ww1.srilankantube.com/" target="_blank" rel="noopener noreferrer">
                    </a>Srilanka tube</Menu.Item>
                    <Menu.Item key="setting:11"><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    </a>You tube</Menu.Item>

                    

                </SubMenu>


            </Menu>
        );
    }
}

