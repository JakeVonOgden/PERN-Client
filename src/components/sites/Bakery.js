import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, CardImg, CardText} from 'reactstrap';

const Bakery = (props) => {
    
   
    
    const bakeryMapper = () => {
        return props.merch.map((merchandise, index) => {
            if (merchandise.category == 'Bakery') {
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
        <Container className="bakery">
            <Row>
                {bakeryMapper()}
            </Row>
        </Container>
    )
}

export default Bakery;