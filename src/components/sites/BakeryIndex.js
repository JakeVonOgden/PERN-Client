import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'reactstrap';
import Bakery from './Bakery';


const BakeryIndex = (props) => {
    const [merch, setMerch] = useState([]); 

    const fetchBakeryMerch = () => {
        fetch('https://juniper-server.herokuapp.com/merchandise/', {
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
        fetchBakeryMerch();
    }, [])

    return (
        
        <Container className='bakery' style={{fontFamily: 'fantasy', textAlign:'center'}}>
             <Bakery merch={merch} fetchBakeryMerch={fetchBakeryMerch} /> 
                
                
        </Container>
        
    )
}

export default BakeryIndex;