import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, CardText, CardImg, Card, CardImgOverlay} from 'reactstrap';

const HandmadeGoods = (props) => {
    
    const handmadeGoodsMapper = () => {
        return props.merch.map((merchandise, index) => {
            if (merchandise.category == 'HandmadeGoods') {
            return (
                <Col md='4' key={index}>
                    <Card>
                        <CardImg src = {merchandise.image} width={100} height={300} />
                        <CardText>
                            {merchandise.name}
                            <br/>
                            {merchandise.description}
                            <br/>
                            ${merchandise.price}
                        </CardText>
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