import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'reactstrap';
import Apparel from './Apparel';
import APIURL from '../../helpers/environment';

const ApparelIndex = () => {
    const [merch, setMerch] = useState([]); 

    const fetchApparelMerch = () => {
        fetch(`${APIURL}merchandise/`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
            })
        }).then((res) => res.json())
        .then((merchandiseData) => {
            console.log(merchandiseData);
            setMerch(merchandiseData);
        })
    }

    useEffect(() => {
        fetchApparelMerch();
    }, [])

    return (
        <Container className='apparel' style={{fontFamily: 'fantasy', textAlign:'center'}}>
            <Apparel merch={merch} fetchBakeryMerch={fetchApparelMerch} /> 
        </Container>
    )
}

export default ApparelIndex
