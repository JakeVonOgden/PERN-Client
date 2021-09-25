import React from "react";
import { Table, Button} from "reactstrap";

const MerchandiseTable = (props) => {
    const deleteMerchandise = (landing) => {
        fetch(`https://juniper-server.herokuapp.com/merchandise/delete/${landing.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.sessionToken}`
            })
        })
        .then(() => props.fetchLandings())
    }
    
    
    const landingMapper = () => {
        return props.landings.map((landing, index) => {
            return(
               <tr key={index}>
                    <th scope ='row'>{landing.catagory}</th>
                    <td>{landing.image}</td>
                    <td>{landing.name}</td>
                    <td>{landing.description}</td>
                    <td>${landing.price}</td>
                    <td>
                        <Button color='success' onClick={() => {props.editUpdateMerchandise(landing); props.updateOn()}}>Update</Button>
                        <Button color='info' onClick={() => {deleteMerchandise(landing)}}>Delete</Button>
                    </td>
                </tr>
          
            )
        })
    }

    return (
        <div>
            <h3>Merchandise Add History</h3>
            <hr/>
            <Table>
                <thead>
                    <tr>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {landingMapper()}
                </tbody>
            </Table>

        </div>
    )
}

export default MerchandiseTable;