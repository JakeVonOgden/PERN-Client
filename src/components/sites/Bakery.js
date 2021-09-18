import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, CardImg, CardText} from 'reactstrap';

const Bakery = () => {
    return (
        <Container className='cakes' style={{fontFamily:'fantasy', textAlign:'center'}}>
            <Row>
                <Col md='4'>
                    <Card>
                        <CardImg src='https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FrZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' width={100} height={300} alt='birthday' />
                        <CardText>
                        Birthday Cake 
                        Prices Vary
                        </CardText>
                    </Card>
                </Col>
                <Col md='4'>
                    <Card>
                        <CardImg src='https://images.unsplash.com/photo-1561702856-b4ec96854ed8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FrZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' width={100} height={300} alt='wedding' />
                        <CardText>Wedding Cake Prices Vary

                        </CardText>
                    </Card>
                </Col>
                <Col md='4'>
                    <Card>
                        <CardImg src='https://images.unsplash.com/photo-1622896784083-cc051313dbab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNha2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' width={100} height={300} alt='any' />
                        <CardText>Any Occasion Prices Vary</CardText>
                    </Card>
                </Col>
            </Row>
            <br/>
            <br/>
            <Row className='pastries'>
                <Col md='4'>
                    <Card>
                        <CardImg src='https://media.istockphoto.com/photos/danish-pastry-on-white-background-picture-id157290015?b=1&k=20&m=157290015&s=170667a&w=0&h=yVep2NkVYnviaEHZvcntWHvXhIfGpSuiLBBXXJ-xaHc=' width={100} height={300} alt='danish'/>
                        <CardText>
                            Danishes
                        </CardText>
                    </Card>
                </Col>
                <Col md='4'>
                    <Card>
                        <CardImg src='https://media.istockphoto.com/photos/fresh-cakes-picture-id497959594?b=1&k=20&m=497959594&s=170667a&w=0&h=bARJnh0s5Udce7K30WPdeVnud23lVg5WngzD9Jral9w=' width={100} height={300} alt='tarts' />
                        <CardText>
                            Tarts and Macaroons
                        </CardText>
                    </Card>
                </Col>
                <Col md='4'>
                    <Card>
                        <CardImg src='https://images.unsplash.com/photo-1609590981063-d495e2914ce4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFzdHJpZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' width={100} height={300} alt='crossiants' />
                        <CardText>
                            Crossiants
                        </CardText>
                    </Card>
                </Col>
            </Row>
            <br/>
            <br/>
            <Row className='breads'>
                <Col md='4'>
                    <Card>
                        <CardImg src='https://images.unsplash.com/photo-1585883112453-e6447a7f683f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnJlYWRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' width={100} height={300} alt='french' />
                        <CardText>
                            French Bread prices from $5-$10 per roll
                        </CardText>
                    </Card>
                </Col>
                <Col md='4'>
                    <Card>
                        <CardImg src='https://images.unsplash.com/photo-1618917732448-4708aa2382fc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyZWFkc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' width={100} height={300} alt='sour' />
                        <CardText>
                            Sourdough Bread prices vary!
                        </CardText>
                    </Card>
                </Col>
                <Col md='4'>
                    <Card>
                        <CardImg src='https://images.unsplash.com/photo-1616841888027-89693dec0827?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnJlYWRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' width={100} height={300} alt='white' />
                        <CardText>
                            Country white bread loaf prices from $5-$10!
                        </CardText>
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}

export default Bakery;