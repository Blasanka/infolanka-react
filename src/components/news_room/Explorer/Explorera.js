import React from 'react';
import 'antd/dist/antd.css';
import {Layout} from "antd";
import ExplorerHeader from "./ExplorerHeader";
import { Row, Col } from 'antd';
import ListDividers from "./ListDividers";
import ContainedButtons from "./Button";


function Explorer() {
    return (
        <Layout className="layout">
            {/*<ExplorerHeader/>*/}
            {/*<FadeMenu/>*/}
            {/*<iframe width="1085" height="415" src="https://www.youtube.com/embed/MbIPOgY9CTo" frameBorder="0"*/}
            {/*        allowFullScreen></iframe>*/}
            {/*<FadeMenu/>*/}
            <div>
                <Row>
                    <Col span={24}><ExplorerHeader/></Col>
                </Row>
                <Row>

                    <Col span={24}><iframe width="100%" height="600" src="https://www.youtube.com/embed/MbIPOgY9CTo" frameBorder="0"
                                          allowFullScreen></iframe></Col>


                </Row>
                <Row>
                    <Col span={8}><ListDividers/>
                    </Col>

                    <Col span={16}><p><h2>Sri Lankans enjoy a unique, humble and artistic lifestyle
                        and they deeply enjoy entertaining and touching hearts with their hospitality
                        which has been known for centuries. Culture and values of Sri Lanka is based around
                        the fusion of traditional forms of art, dance and music. It is one that fascinates
                        many due to its uniqueness and mystifying diversity. Nourished by Buddhism in the early
                        2nd century B.C and also influenced by ancient Indian invasions, the early tribes of the
                        Yaksha and Naga cultured the inhabitants of this tiny island before 300 B.C. using architecture ,
                        agriculture and irrigation.</h2></p>
                    <img src={"https://japanistry-yvxqriqk.netdna-ssl.com/wp-content/uploads/2017/09/Sri-Lanka-Festival-v01.jpg"}/>
                    <ContainedButtons/>
                    </Col>
                </Row>
                <Row>
                    <Col span={11}><p>Sri Lankans enjoy a unique, humble and artistic lifestyle and they deeply enjoy entertaining and touching hearts with their hospitality which has been known for centuries. Culture and values of Sri Lanka is based around the fusion of traditional forms of art, dance and music. It is one that fascinates many due to its uniqueness and mystifying diversity. Nourished by Buddhism in the early 2nd century B.C and also influenced by ancient Indian invasions, the early tribes of the Yaksha and Naga cultured the inhabitants of this tiny island before 300 B.C. using architecture, agriculture and irrigation.</p></Col>
                    <Col span={2}><p></p></Col>
                    <Col span={11}><p></p>Sri Lankans enjoy a unique, humble and artistic lifestyle and they deeply enjoy entertaining and touching hearts with their hospitality which has been known for centuries. Culture and values of Sri Lanka is based around the fusion of traditional forms of art, dance and music. It is one that fascinates many due to its uniqueness and mystifying diversity. Nourished by Buddhism in the early 2nd century B.C and also influenced by ancient Indian invasions, the early tribes of the Yaksha and Naga cultured the inhabitants of this tiny island before 300 B.C. using architecture, agriculture and irrigation.</Col>
                </Row>

            </div>,

            );



        </Layout>

    );

}

export default Explorer;


