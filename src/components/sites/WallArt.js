import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, CardImg, CardText} from 'reactstrap';

const WallArt = (props) => {
    
    const wallArtMapper = () => {
        return props.merch.map((merchandise, index) => {
            if (merchandise.category == 'WallArt') {
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
        <Container className="wallart">
            <Row>
                {wallArtMapper()}
            </Row>
        </Container>
    )
}

export default WallArt;