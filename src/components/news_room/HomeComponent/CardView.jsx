import React, { Component } from 'react';
import {Card, Row, Col} from 'antd';
import MediaCard from "./card";


class CardView extends Component{
    render() {
        return <div>
           <Card>
               <Row>
                   <Col>  <h1 className={'name'}>{this.props.title}</h1> </Col>
               </Row>
               <Row>
                   <Col { ...imgRes}>
                       <MediaCard/>
                   </Col>
                   <Col { ...imgRes}>
                       <MediaCard/>
                   </Col>
                   <Col { ...imgRes}>
                       <MediaCard/>
                   </Col>
                   <Col { ...imgRes}>
                       <MediaCard/>
                   </Col>

                   {/*<Col>*/}
                   {/*    <MediaCard/>*/}
                   {/*</Col>*/}
                   {/*/!*<Col>*!/*/}
                   {/*    <MediaCard/>*/}
                   {/*</Col>*/}
                   {/*<Col>*/}
                   {/*    <Cardtest/>*/}
                   {/*</Col>*/}
               </Row>
               <Row><Col><h3>{this.props.name}</h3></Col></Row>
           </Card>
        </div>

    }

}
export default CardView;

const imgRes = {    //responcive
    sm:{ span: 24 },
    md:{ span: 6 }
}
const descResp = {
    sm:{ span: 24 },
    md:{ span: 18 }
}