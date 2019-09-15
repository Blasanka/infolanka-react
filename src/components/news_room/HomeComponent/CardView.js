import React, { Component } from 'react';
import {Card, Row, Col} from 'antd';


class CardView extends Component{
    render() {
        return <div>
           <Card>
               <Row>
                   <Col>  <h1 className={'name'}>{this.props.title}</h1> </Col>
               </Row>
               <Row>
                   <Col { ...imgRes}>
                       <img src={this.props.imgSrc} height={150} width={250} alt={this.props.name}/>
                   </Col>
                   <Col { ...imgRes}>
                       <img src={this.props.imgSrc} height={150} width={250} alt={this.props.name}/>
                   </Col>
                   <Col { ...imgRes}>
                       <img src={this.props.imgSrc} height={150} width={250} alt={this.props.name}/>
                   </Col>
                   <Col { ...imgRes}>
                       <img src={this.props.imgSrc} height={150} width={250} alt={this.props.name}/>
                   </Col>
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