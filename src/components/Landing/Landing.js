import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'reactstrap';
import {Card, CardImg, CardBody, CardTitle, CardText, Button} from 'reactstrap'
import { Link } from 'react-router-dom';
import juniperPic from '../../assets/juniper.png'


const Landing = () => {
    
        return (
            <Container>
            
            <div style={{textAlign: 'center'}}>
            <h1 style={{textAlign:'center'}}>Welcome to Juniper</h1>
            <img src={juniperPic} id='juniper' height='75' style={{}}/>
            </div>
            <br />
            <br />
            
       <Row>
            <Col md='3'>
            <Card className='mb-3' style={{background: 'rgb(225,225,225)', borderRadius: '25px', boxShadow: '6px 6px 4px 2px rgba(0, 0, 0, 0.5)'}}>
            <CardImg src='https://media.istockphoto.com/photos/delicious-and-sweet-seasonal-pastry-background-picture-id582310974?b=1&k=20&m=582310974&s=170667a&w=0&h=kxmNSZrBeY4T2tVYKbhyWfuzqtf7eTtMB6TP0w4M0jQ='  style={{borderTopLeftRadius: '25px', borderTopRightRadius: '25px',}} alt='bakery' />
            <CardBody>
                <CardTitle style={{textAlign: 'center',}}>
                <Button variant='primary' style={{backgroundColor: '#20bf55;', backgroundImage: 'linear-gradient(315deg, #20bf55 0%, #01baef 100%)', borderRadius: '25px', boxShadow: '4px 3px rgba(0, 0, 0, 0.3)', }}><Link to='/bakery' style={{textDecoration: 'none', color: 'black', fontWeight: '700' }}>Bakery</Link></Button>
                </CardTitle>
                    <CardText style={{textAlign: 'center', fontFamily: "sans-serif", fontWeight: '600' }}>
                        Assortment of baked goods!
                    </CardText>
                   
            </CardBody>
            </Card>
            </Col>
            
            
            <Col md='3'>
            <Card className='mb-3' style={{background: 'rgb(225,225,225)', borderRadius: '25px', boxShadow: '6px 6px 4px 2px rgba(0, 0, 0, 0.5)'}}>
            <CardImg src='https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGRlY29yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' style={{borderTopLeftRadius: '25px', borderTopRightRadius: '25px',}} alt='wallart' />
            <CardBody>
                <CardTitle style={{textAlign: 'center'}}>
                <Button variant='primary' style={{backgroundColor: '#20bf55;', backgroundImage: 'linear-gradient(315deg, #20bf55 0%, #01baef 100%)', borderRadius: '25px', boxShadow: '4px 3px rgba(0, 0, 0, 0.3)', }}><Link to='/wallart' style={{textDecoration: 'none', color: 'rgb(0,0,0,1.0)', fontWeight: '700'}}>Wall Art</Link></Button>
                </CardTitle>
                    <CardText style={{textAlign: 'center', fontFamily: "sans-serif", fontWeight: '600' }}>
                        Click to see fabulous palettes!
                    </CardText>
                    
            </CardBody>
            </Card>
            </Col>
            
            
            <Col md='3'>
            <Card className='mb-3' style={{background: 'rgb(225,225,225)', borderRadius: '25px', boxShadow: '6px 6px 4px 2px rgba(0, 0, 0, 0.5)'}}>
            <CardImg src='https://media.istockphoto.com/photos/preparing-self-care-package-seasonal-gift-box-with-plastic-free-zero-picture-id1286329777?b=1&k=20&m=1286329777&s=170667a&w=0&h=auHiTkSw9xqaZeQS07BxRFCXMPmWuDLARWbTS6yZ-kc=' style={{borderTopLeftRadius: '25px', borderTopRightRadius: '25px',}} alt='handmade' />
            <CardBody>
                <CardTitle style={{textAlign: 'center'}}>
                <Button variant='primary' style={{backgroundColor: '#20bf55;', backgroundImage: 'linear-gradient(315deg, #20bf55 0%, #01baef 100%)', borderRadius: '25px', boxShadow: '4px 3px rgba(0, 0, 0, 0.3)', }}><Link to='/handmadegoods' style={{textDecoration: 'none', color: 'rgb(0,0,0,1.0)', fontWeight: '700'}}>Handmade Goods</Link></Button>
                </CardTitle>
                    <CardText style={{textAlign: 'center', fontFamily: "sans-serif", fontWeight: '600' }}>
                        Click to see works of art!
                    </CardText>
                    
            </CardBody>
            </Card>
            </Col>
            
            
            <Col md='3'>
            <Card className='mb-3' style={{background: 'rgb(225,225,225)', borderRadius: '25px', boxShadow: '6px 6px 4px 2px rgba(0, 0, 0, 0.5)'}}>
            <CardImg src='https://images.unsplash.com/photo-1555529771-835f59fc5efe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXBwYXJlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' height = '200' style={{borderTopLeftRadius: '25px', borderTopRightRadius: '25px',}} alt='fashion' />
            <CardBody>
                <CardTitle style={{textAlign: 'center'}}>
                <Button variant='primary' style={{backgroundColor: '#20bf55;', backgroundImage: 'linear-gradient(315deg, #20bf55 0%, #01baef 100%)', borderRadius: '25px', boxShadow: '4px 3px rgba(0, 0, 0, 0.3)', }}><Link to='/apparel' style={{textDecoration: 'none', color: 'rgb(0,0,0,1.0)', fontWeight: '700'}}>Apparel</Link></Button>
                </CardTitle>
                    <CardText style={{textAlign: 'center', fontFamily: "sans-serif", fontWeight: '600' }}>
                        Click to see stylish designs!
                    </CardText>
                    
            </CardBody>
        </Card>
        </Col>
        </Row>
    
    </Container>
    )
}

export default Landing;
