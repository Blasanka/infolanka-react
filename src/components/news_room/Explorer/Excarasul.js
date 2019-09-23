import {Carousel, Col, Row} from 'antd';
import {Component} from "react";
import React from 'react';


class Excarasul extends Component {

    render() {
        return <div style={{width: "'100%", height:600}}>
            <Row>
                <Carousel autoplay>
                    <div>
                        <img width={1900} height={1080}
                             src={"https://i.pinimg.com/originals/d3/37/7b/d3377b046b30d3c7936f491286b158aa.jpg"}/>

                    </div>
                    <div>
                        <img width={1900} height={1080}
                             src={"https://i.pinimg.com/originals/d3/37/7b/d3377b046b30d3c7936f491286b158aa.jpg"}/>
                    </div>
                    <div>
                        <img width={1900} height={1080}
                             src={"https://i.pinimg.com/originals/d3/37/7b/d3377b046b30d3c7936f491286b158aa.jpg"}/>
                    </div>
                    <div>
                        <img width={1900} height={1080}
                             src={"https://besthqwallpapers.com/img/original/14751/lighthouse-palm-trees-sunset-evening-beach.jpg"}/>
                    </div>
                    <div>
                        <img width={1900} height={1080}
                             src={"https://wallpaperplay.com/walls/full/1/c/9/125161.jpg"}/>
                    </div>
                    <div>
                        <img width={1900} height={1080}
                             src={"https://s2.best-wallpaper.net/wallpaper/1920x1200/1804/Leopard-predator-tree_1920x1200.jpg"}/>
                    </div>
                    <div>
                        <img width={1900} height={1080}
                             src={"https://i.pinimg.com/originals/d3/37/7b/d3377b046b30d3c7936f491286b158aa.jpg"}/>
                    </div>
                    <div>
                        <img width={1900} height={1080}
                             src={"https://www.captains-choice.com/-/media/cc-responsive-website-for-prod/hero-images/hc-as-sri-lanka-sigiriya-lions-rock-fortress-620824600-g-rf-cc-only-1920-x-1080.jpg?useCustomFunctions=1&rw=1900&w=1900&h=1000&cropX=0&cropY=34"}/>
                    </div>
                    <div>
                        <img width={1900} height={1080}
                             src={"https://i.pinimg.com/originals/d3/37/7b/d3377b046b30d3c7936f491286b158aa.jpg"}/>
                    </div>
                    <div>
                        <img width={1900} height={1080}
                             src={"https://www.barraques.cat/pngfile/big/14-144599_download-abstract-nature-trees-birds-wallpaper-kingfisher-bird.jpg"}/>
                    </div>

                </Carousel>
            </Row>
        </div>;

    }
}
export default Excarasul;