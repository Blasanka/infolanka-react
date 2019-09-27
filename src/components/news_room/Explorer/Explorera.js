import React from 'react';
import 'antd/dist/antd.css';
import {Layout} from "antd";
import ExplorerHeader from "./ExplorerHeader";
import { Row, Col } from 'antd';
import ListDividers from "./ListDividers";
import ContainedButtons from "./Button";
import SlideShow from "../HomeComponent/SlideShow";
import Button from "@material-ui/core/Button";
import {Link, Route} from "react-router-dom";
import {makeStyles} from "@material-ui/core";
import Addlink from "./Addlink";
import ExpContent from "./ExpContent";
import ButtonBases from "./Feild";
import Stepper from "./Cs";
import Typography from "@material-ui/core/Typography";
import Excarasul from "./Excarasul";
import Facebook from "./Newcard";
import MediaCard from "../HomeComponent/card";
import CardMedia from "@material-ui/core/CardMedia";




const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

function Explorer() {
    const classes = useStyles();
    return (
        <Layout className="layout">
            {/*<ExplorerHeader/>*/}
            {/*<FadeMenu/>*/}
            {/*<iframe width="1085" height="415" src="https://www.youtube.com/embed/MbIPOgY9CTo" frameBorder="0"*/}
            {/*        allowFullScreen></iframe>*/}
            {/*<FadeMenu/>*/}

            <div>
                <Row>
                    <Excarasul/>
                </Row>
                <Row>
                    <Typography variant="h1" display="block" gutterBottom  align={"center"}>
                        Explorer Srilanka
                    </Typography>

                </Row>
                <Row>
                    <Col span={6}>
                    </Col>
                    <Col span={12}>
                        {/*<Typography variant="h1" display="block" gutterBottom  align={"center"}>*/}
                        {/*    Explorer Srilanka*/}
                        {/*</Typography>*/}
                    <Typography variant="h5" gutterBottom>
                        A landmark destination in the ancient Spice Trail, Sri Lanka is bursting with wonder.
                        This tropical island is famous for its diverse landscape: from the blue coastal belt to green mountains
                        within just hours of each other, and the island's lush greenery ranging from coconut palm groves to paddy
                        fields and tea plantations, embellished by over 200 natural waterfalls. It is blessed with a rich culture
                        and a recorded civilization that spans as far back as 380 BC. The advent of Buddhism during the 3rd Century
                        BC brought the rich aspect of ancient civilizations to Sri Lanka which in turn helped to form the great kingdoms
                        with their magnificent dagobas, (relic chambers) –one which is taller than the third Pyramid of Giza and another
                        which is the largest stupa in the whole Buddhist world - colossal monuments, pleasure gardens, art and architecture.
                    </Typography>
                    </Col>
                    <Col span={6}></Col>
                    {/*<Stepper/>*/}
                </Row>

                <Row>
                    <ButtonBases/>
                </Row>
                <Row>
                    <Col span={2}>
                    </Col>
                    <Col span={20}>
                        <Typography variant="h2" display="block" gutterBottom  align={"center"}>
                            Introduction to Sri Lanka
                        </Typography>
                        <Typography variant="h5" gutterBottom align={"center"}>

                            They say there is no other country in the world, like Sri Lanka. A smiling sun all year round, golden beaches, ancient cities, exciting safaris, colourful culture, adventure sport and lovely people… where else can you get all these in one place?

                            Found at the tip of India, this little exotic island is abundant with marvelous discoveries for any tourist. Be it a journey of exploring the wilderness, an Ayurvedic wellness holiday, a relaxing get-away in the sun, or even that quick business trip, there is something for everyone.

                            Well connected transport systems or organised tours will see you visiting many a place in this island country. Enjoy the sun while lounging on beach at Bentota, sighting Palmyra trees in Jaffna, snorkeling or kite surfing at Kalpitiya or surfing the waves of Arugambay, It is where you can discover leopards on Safari, be awed of ruins in Anuradhapura, visit orphaned elephants at Pinnawela or climb 5th century rock fortress in Sigiriya. And as you make your way up to the cooling climes, take a walk in the sprawling botanical gardens in Kandy, visit the misty Horton Plains, and sip Ceylon tea at a tea estate in Nuwara Eliya.


                        </Typography>
                    </Col>
                    <Col span={11}></Col>
                    <Col span={2}> <Link to={'/adlink'}><Button variant="contained" color="secondary" className={classes.button}>
                        Add link
                    </Button></Link></Col>
                    <Col span={11}></Col>
                    {/*<Stepper/>*/}
                </Row>
                <Row>
                    <Col span={8}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/PTSvtOOySFA" frameBorder="0"
                                allowFullScreen></iframe></Col>
                    <Col span={8}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/MbIPOgY9CTo" frameBorder="0"
                                allowFullScreen></iframe></Col>
                    <Col span={8}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/9K4VuVUcHQA" frameBorder="0"
                                allowFullScreen></iframe></Col>
                </Row>
                <Row>

                </Row>


            </div>
            );
            {/*<Route path={'explorer1'} component={ExpContent}/>*/}
            {/*<Route path="/adlink" component={Addlink}/>*/}
        </Layout>

    );

}
function TestRoute() {
    const classes = useStyles();
    return(
        <div>
            <Row>
                <Col span={24}><ExplorerHeader/></Col>
            </Row>
            <Row>

                <SlideShow/>

            </Row>
            <Row>
                <Col span={8}><ListDividers/>
                </Col>

                <Col span={16}><h6>Sri Lankans enjoy a unique, humble and artistic lifestyle
                    and they deeply enjoy entertaining and touching hearts with their hospitality
                    which has been known for centuries. Culture and values of Sri Lanka is based around
                    the fusion of traditional forms of art, dance and music. It is one that fascinates
                    many due to its uniqueness and mystifying diversity. Nourished by Buddhism in the early
                    2nd century B.C and also influenced by ancient Indian invasions, the early tribes of the
                    Yaksha and Naga cultured the inhabitants of this tiny island before 300 B.C. using architecture ,
                    agriculture and irrigation.</h6>
                    <img src={"https://japanistry-yvxqriqk.netdna-ssl.com/wp-content/uploads/2017/09/Sri-Lanka-Festival-v01.jpg"}/>
                    {/*<ContainedButtons/>*/}
                    <Link to={'/adlink'}><Button variant="contained" color="secondary" className={classes.button}>
                        Add link
                    </Button></Link>
                </Col>
            </Row>


        </div>
    )

}

export default Explorer;


