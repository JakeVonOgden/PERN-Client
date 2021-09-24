import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'reactstrap';
import {Card, CardImg, CardBody, CardTitle, CardText, Button} from 'reactstrap'
import MerchandiseCreate from './MerchandiseCreate';
import MerchandiseTable from './MerchandiseTable';
import { Link } from 'react-router-dom';


const MerchandiseIndex = (props) => {
    const [landings, setLandings] = useState('');
            const fetchLandings = () => {
                fetch('https://juniper-server.herokuapp.com/merchandise', {
                    method: 'GET',
                    headers: new Headers ({
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${props.sessionToken}`

                    })
                }).then((res) => res.json())
                .then((merchandiseData) => {
                    console.log(merchandiseData);
                    setLandings(merchandiseData)
                })
            }

            useEffect(() => {
                fetchLandings();
            },[])

    return (

    <Container className='landing'>
         <Row>
             <Col md='4'>
                <MerchandiseCreate fetchLandings={fetchLandings} sessionToken={props.sessionToken} />
             </Col>
        
            <Col md='8'>
                <MerchandiseTable landings={landings} fetchLandings={fetchLandings} />
            </Col>
        </Row>
    </Container>
    )
}

export default MerchandiseIndex;