import React from 'react';
import {Col, Layout, Row} from "antd";
import ExplorerHeader from "./ExplorerHeader";
import SlideShow from "../HomeComponent/SlideShow";
import ListDividers from "./ListDividers";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));
export default class ExpContent extends React.Component{


    render() {
        const classes = useStyles();
        return <React.Fragment>
            <div>
                <Row>
                    <Col span={24}><ExplorerHeader/></Col>
                </Row>
                <Row>

                    {/*<Col span={24}><iframe width="100%" height="600" src="https://www.youtube.com/embed/MbIPOgY9CTo" frameBorder="0"*/}
                    {/*                      allowFullScreen></iframe></Col>*/}
                    <SlideShow/>

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
                        {/*<ContainedButtons/>*/}
                        <Link to={'/adlink'}><Button variant="contained" color="secondary" className={classes.button}>
                            Add link
                        </Button></Link>
                    </Col>
                </Row>
                <Row>
                    <Col span={11}><p>Sri Lankans enjoy a unique, humble and artistic lifestyle and they deeply enjoy entertaining and touching hearts with their hospitality which has been known for centuries. Culture and values of Sri Lanka is based around the fusion of traditional forms of art, dance and music. It is one that fascinates many due to its uniqueness and mystifying diversity. Nourished by Buddhism in the early 2nd century B.C and also influenced by ancient Indian invasions, the early tribes of the Yaksha and Naga cultured the inhabitants of this tiny island before 300 B.C. using architecture, agriculture and irrigation.</p></Col>
                    <Col span={2}><p></p></Col>
                    <Col span={11}><p></p>Sri Lankans enjoy a unique, humble and artistic lifestyle and they deeply enjoy entertaining and touching hearts with their hospitality which has been known for centuries. Culture and values of Sri Lanka is based around the fusion of traditional forms of art, dance and music. It is one that fascinates many due to its uniqueness and mystifying diversity. Nourished by Buddhism in the early 2nd century B.C and also influenced by ancient Indian invasions, the early tribes of the Yaksha and Naga cultured the inhabitants of this tiny island before 300 B.C. using architecture, agriculture and irrigation.</Col>
                </Row>

            </div>
        </React.Fragment>
    }
}