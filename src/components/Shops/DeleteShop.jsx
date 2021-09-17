import React, {useState,useEffect} from 'react';

import {Table, Button} from 'reactstrap';



const ShopDelete = (props) => {

    const [shop, setShop] = useState([]);

   
    const deleteShop = (shop) => {
        fetch(`http://localhost:4000/shop/${shop.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchShop())
        .catch(err => console.log(err))
    }


    return(
        <div>
        
        </div>
    )
}

export default ShopDelete;