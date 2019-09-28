import React, { Component } from 'react';
import CardView from "./CardView";
import './style.css';
import {Col, Row} from "antd";
import YouTube from "./Newcard";

    class Home extends Component{
    renderProfiles = () => {     //dynamical view of carts
        return data.map((item) => {
            return <Col style={{ width: '80%' }}>
                <CardView name={item.name} title={item.title} /*description={item.desc}*/
                          imgSrc={item.imgSrc}
                />
                <YouTube/>
            </Col>


        })
    }
    render() {
        return <Row type={'flex'} justify={'center'}>
            {/*<CardView name={'Nadun'} title={'React'} description={desc}*/}
            {/*imgSrc={'https://cbsnews1.cbsistatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg'}*/}
            {/*/>*/}
            {this.renderProfiles()}
            {/*<YouTube/>*/}
        </Row>
    }
}
export default Home;
const data = [
    {
        name: '',
        title: 'Sport',
        imgSrc : 'https://resources.pulse.icc-cricket.com/photo-resources/2019/09/12/3c9b50a9-74ad-4750-8ec9-33c5b9ba1ac2/GettyImages-1167518065.jpg?width=2000&height=1125'

    },
    {
        name: '',
        title: 'Political',
        desc: `here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc`,
        imgSrc: 'http://static.dailymirror.lk/media/images/image_1518729443-96a1e307bf.jpg'
    },
    {
        name: '',
        title: 'Finance',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
            ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown ' +
            'printer took a galley of type and scrambled it to make a type specimen book. It has survived not only ' +
            'five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was ' +
            'popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum' +
            ' passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        imgSrc: 'https://cdn.newsfirst.lk/english-uploads/2019/08/dd70e3cc-404905_650x250_crop.jpg',
    },
    {
        name: '',
        title: 'Cartoons',
        desc: `here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc`,
        imgSrc: 'http://1.bp.blogspot.com/_UnyTsh-Ir90/S9aVAQ7vN_I/AAAAAAAAKDY/y8cRRLxDoL0/s1600/main-cartoon(35).jpg'
    },
    ]