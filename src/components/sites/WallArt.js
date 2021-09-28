import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

const WallArt = (props) => {
    
    const wallArtMapper = () => {
        return props.merch.map((merchandise, index) => {
            if(merchandise.category == 'WallArt') {
                return (
                    <Col style={{padding: '10px'}} key={index}>
                        <Card style={{background: 'rgb(255,255,255,1)', borderRadius: '25px', boxShadow: '6px 6px 4px 2px rgba(0, 0, 0, 0.75)', padding: '10px', maxWidth: '360px'}}>
                            <CardImg src = {merchandise.image} style={{borderTopLeftRadius: '25px', borderTopRightRadius: '25px',}} width={100} height={260} />
                            <CardBody>
                                <CardTitle style={{fontFamily: 'sans-serif', fontSize: '23px', fontWeight: '600', padding: '0'}}>{merchandise.name}&nbsp;&nbsp;&nbsp;${merchandise.price}</CardTitle>
                                <CardSubtitle style={{fontFamily: 'sans-serif', fontSize: '15px', fontWeight: '600'}}>{merchandise.description}</CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                )
            }
        })
    }
                    
    return (
        <Container fluid='sm'>
            <Row xs='3'>
                {wallArtMapper()}
            </Row>
        </Container>
    )
}

export default WallArt;