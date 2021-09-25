import React from "react";
import { Table, Button} from "reactstrap";

const MerchandiseTable = (props) => {

    const landingMapper = () => {
        return props.landings.map((landing, index) => {
            return(
               <tr key={index}>
                    <th>{landing.category}</th>
                    <td>{landing.image}</td>
                    <td>{landing.name}</td>
                    <td>{landing.description}</td>
                    <td>{landing.price}</td>
                    <td>
                        <Button color='warning' onClick={() => {props.editUpdateLanding(landing); props.updateOn()}}>Update</Button>
                        <Button color='danger'>Delete</Button>
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