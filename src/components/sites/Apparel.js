import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, CardImg, CardText} from 'reactstrap';

const Apparel = () => {
    return (
        <Container style={{fontFamily:'fantasy', textAlign:'center'}}>
            <Row className='mensLine'>
                <Col md='3'>
                <Card>
                    <CardImg src='https://media.istockphoto.com/photos/suits-on-rack-picture-id1293366117?b=1&k=20&m=1293366117&s=170667a&w=0&h=c5-Rgz7CKkIdT-FDydn4mK1VZM49dNWhcN5B2GS9jgY=' width={100} height={300} alt='jackets' />
                    <CardText>
                        Men's Suit Jackets
                    </CardText>
                </Card>
                </Col>
                <Col md='3'>
                <Card>
                    <CardImg src='https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWVuJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' width={100} height={300} alt='accessory' />
                    <CardText>
                        Men's Accessories
                    </CardText>
                </Card>
                </Col>
                               
            <Col md='3'>
            <Card>
                    <CardImg src='https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' width={100} height={300} alt='wclothes' />
                    <CardText>
                       Womans Clothing Line 
                    </CardText>
                </Card>
            </Col>
                  
            <Col md='3'>
                <Card>
                    <CardImg src='https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' width={100} height={300} alt='wshirts' />
                    <CardText>
                        Woman's Dress Shirts
                    </CardText>
                </Card>
                </Col>
                </Row>
                <br/>
                <br/>
                <Row>
           <Col md='3'>
            <Card>
                    <CardImg src='https://media.istockphoto.com/photos/decisions-decisions-picture-id687709276?b=1&k=20&m=687709276&s=170667a&w=0&h=iDMF8IXwEaK6dC1D9QgN8A4Kmk-t96pK3K176dM0Nl4=' width={100} height={300} alt='gshirts' />
                    <CardText>
                        Girl's Shirts
                    </CardText>
                </Card>
            </Col>
            <Col md='3'>
                <Card>
                    <CardImg src='https://media.istockphoto.com/photos/little-girl-getting-ready-for-school-picture-id931055460?b=1&k=20&m=931055460&s=170667a&w=0&h=e0r6uLSydL1hKSRSyOyVUxnfdc9rjK7nrYb88tqtEV4=' width={100} height={300} alt='girl' />
                    <CardText>
                        Girl's Coats
                    </CardText>
                </Card>
                </Col>
        
            <Col md='3'>
            <Card>
                    <CardImg src='https://media.istockphoto.com/photos/family-looking-at-clothes-on-rail-in-shopping-mall-picture-id502197861?b=1&k=20&m=502197861&s=170667a&w=0&h=UWpLjk9jmpVqUrd3bwmbI_vLdJ0KHyedS7Q2hHI-Yf8=' width={100} height={300} alt='boy' />
                    <CardText>
                        Boy's Shirts
                    </CardText>
                </Card>
            </Col>
            <Col md='3'>
                <Card>
                    <CardImg src='https://images.unsplash.com/photo-1525107372716-1a85946c5dff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2lkJTIwY2xvdGhpbmclMjBib3lzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' width={100} height={300} alt='baby' />
                    <CardText>
                        Toddler Boy Jackets
                    </CardText>
                </Card>
                </Col>
        </Row>
        </Container>
    )
}

export default Apparel;
