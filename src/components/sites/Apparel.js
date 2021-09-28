import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

const Apparel = (props) => {
    
    const apparelMapper = () => {
        return props.merch.map((merchandise, index) => {
            if(merchandise.category == 'Apparel') {
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
        <Container className="apparel">
            <Row>
                {apparelMapper()}
            </Row>
        </Container>
    )
}

export default Apparel;
    
    
