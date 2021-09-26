import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'reactstrap';
import WallArt from './WallArt';

const WallArtIndex = () => {
    const [merch, setMerch] = useState([]); 

    const fetchWallArtMerch = () => {
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
        fetchWallArtMerch();
    }, [])
    
    return (
        <Container className='wallart' style={{fontFamily: 'fantasy', textAlign:'center'}}>
            <WallArt merch={merch} fetchWallArtMerch={fetchWallArtMerch} /> 
        </Container>
    )
}

export default WallArtIndex;
