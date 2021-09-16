import React, {useState,useEffect} from 'react';

import {Table, Button} from 'reactstrap';



const MerchDelete = (props) => {

    const [merchandise, setMerchandise] = useState([]);

   
    const deleteMerch = (merchandise) => {
        fetch(`http://localhost:400/log/${merchandise.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchMerch())
        .catch(err => console.log(err))
    }


    return(
        <div>
        
        </div>
    )
}

export default MerchDelete;