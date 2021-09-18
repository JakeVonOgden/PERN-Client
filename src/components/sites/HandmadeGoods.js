import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, CardText, CardImg, Card} from 'reactstrap';

const HandmadeGoods = () => {
    return (
        <Container>
        <Row className='womanLine'>
            <Col lg='6'>
                <Card>
                    <CardImg src='https://media.istockphoto.com/photos/woman-holding-basket-with-home-made-soaps-picture-id1226800200?b=1&k=20&m=1226800200&s=170667a&w=0&h=Y2w898i8-pz0x2x9hw_4aD2xqo7qjQcP0VD3LusTgsQ=' width={100} height={300} alt='soaps' />
                </Card>
            </Col>
            <Col lg='6'>
                <Card>
                    <CardImg src='https://media.istockphoto.com/photos/natural-handmade-soap-bars-with-herbal-extract-on-white-background-picture-id1277988480?b=1&k=20&m=1277988480&s=170667a&w=0&h=ZYYM7QiMQRa-lR93xs9YxE-YO40Qxl7GwZ-Mru584Zs=' width={100} height={300} alt='soap' />
                </Card>
            </Col>
        </Row>
        <br/>
        <Row className='menLine'>
        <Col lg='6'>
                <Card>
                    <CardImg src='https://images.unsplash.com/photo-1533462506003-13c20d204b58?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGllc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' width={100} height={300} alt='tie' />
                </Card>
            </Col>
            <Col lg='6'>
                <Card>
                    <CardImg src='https://images.unsplash.com/photo-1557224230-e8b6f8fac15f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FuZGxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' width={100} height={300} alt='candle' />
                </Card>
            </Col>
        </Row>
        <br/>
         <Row className='girlLine'>
         <Col lg='6'>
                <Card>
                    <CardImg src='https://media.istockphoto.com/photos/preparing-self-care-package-seasonal-gift-box-with-plastic-free-zero-picture-id1286329777?b=1&k=20&m=1286329777&s=170667a&w=0&h=auHiTkSw9xqaZeQS07BxRFCXMPmWuDLARWbTS6yZ-kc=' width={100} height={300} alt='syrup' />
                </Card>
            </Col>
            <Col lg='6'>
                <Card>
                    <CardImg src='https://media.istockphoto.com/photos/handmade-marmelade-from-rose-hips-picture-id1048055412?b=1&k=20&m=1048055412&s=170667a&w=0&h=Mi4GlmN8V3MgVR--a9NtWQJOksZTGW4HTDS_EzdattA=' width={100} height={300} alt='jams' />
                </Card>
            </Col>
     </Row>
     <br/>
     <Row className='boyLine'>
     <Col lg='6'>
                <Card>
                    <CardImg src='https://images.unsplash.com/photo-1582485697933-395c1338cf5b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGFuZCUyMG1hZGUlMjBnaWZ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' width={100} height={300} alt='necklace' />
                </Card>
            </Col>
            <Col lg='6'>
                <Card>
                    <CardImg src='https://media.istockphoto.com/photos/young-woman-painting-nutcracker-on-christmas-ceramics-in-her-pottery-picture-id1194538419?b=1&k=20&m=1194538419&s=170667a&w=0&h=EXFrq82P8jZcMJKg5k1SinzYzaJJTo5Cus_cCDJ4OTY=' width={100} height={300} alt='pottery' />
                </Card>
            </Col>
        </Row>
    </Container>
    )
}

export default HandmadeGoods;