import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, CardImg, CardText} from 'reactstrap';

const WallArt = () => {
    return (
        <Container>
            <Row>
                <Col md='3'>
                <Card>
                    <CardImg src='https://images.unsplash.com/photo-1557215235-21d6064d6ff9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2FsbCUyMGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' width={100} height={300} alt='woman' />
                    <CardText>
                        Woman In Color
                    </CardText>
                </Card>
                </Col>
            
        
            <Col md='3'>
            <Card>
                    <CardImg src='https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2FsbCUyMGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' width={100} height={300} alt='abstract' />
                    <CardText>
                      Abstract Painting  
                    </CardText>
                </Card>
            </Col>
       
            <Col md='3'>
            <Card>
                    <CardImg src='https://media.istockphoto.com/photos/luxury-black-interior-living-room-with-modern-minimalist-italian-picture-id1250307269?b=1&k=20&m=1250307269&s=170667a&w=0&h=sHbeST1gw0hN2UsW2-UG0rkjdAcA10kUSjtklamDcG0=' width={100} height={300}alt='luxury' />
                    <CardText>
                        Luxury Black and White Painting
                    </CardText>
                </Card>
            </Col>
         <Col md='3'>
            <Card>
                    <CardImg src='https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' width={100} height={300} alt='flowers' />
                    <CardText>
                        Colorful flowers
                    </CardText>
                </Card>
            </Col>
        </Row>
        </Container>
        
    )
}

export default WallArt;