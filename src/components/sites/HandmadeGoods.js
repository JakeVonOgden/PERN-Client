import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

const HandmadeGoods = (props) => {
    
    const handmadeGoodsMapper = () => {
        return props.merch.map((merchandise, index) => {
            if (merchandise.category == 'HandmadeGoods') {
            return (
                <Col md='4' key={index}>
                <Card>
                    <CardImg src = {merchandise.image} width={100} height={330} />
                    <CardBody>
                        <CardTitle tag='h3'>{merchandise.name}</CardTitle>
                        <CardSubtitle tag='h5'>  ${merchandise.price}</CardSubtitle>
                        <CardText tag='h6'>  {merchandise.description}</CardText>
                    </CardBody>
                </Card>
            </Col>
            )
            }
        })
    }
    
    return (
        <Container className="handmadegoods">
        <Row>
            {handmadeGoodsMapper()}
        </Row>
    </Container>
    )
}

export default HandmadeGoods;