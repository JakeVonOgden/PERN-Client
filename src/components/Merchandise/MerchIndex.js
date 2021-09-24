import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';

const MerchIndex = (props) => {
    const [merch, setMerch] = useState([]);

    const fetchWorkouts = () => {
        fetch('https://juniper-server.herokuapp.com/merchandise', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then( (res) => res.json())
        .then((merchData) => {
            setMerch(merchData)
            console.log(merchData)
        })
    }

    useEffect(() => {
        fetchWorkouts();
    }, [])

    return (
        <Container>
            <Row>
                <Col md="3">

                </Col>
                <Col md="9">
                    <h2>Table</h2>
                </Col>
            </Row>
        </Container>
    )
}

export default MerchIndex;