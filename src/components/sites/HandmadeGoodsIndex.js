import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'reactstrap';
import HandmadeGoods from './HandmadeGoods';
import APIURL from '../../helpers/environment';

const HandmadeGoodsIndex = () => {
    const [merch, setMerch] = useState([]); 

    const fetchHandmadeGoodsMerch = () => {
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
        fetchHandmadeGoodsMerch();
    }, [])

    
    return (
        <Container className='handmadegoods' style={{fontFamily: 'fantasy', textAlign:'center'}}>
            <HandmadeGoods merch={merch} fetchHandmadeGoodsMerch={fetchHandmadeGoodsMerch} /> 
        </Container>
    )
}

export default HandmadeGoodsIndex;
