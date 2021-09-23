import React from "react";
import { Card, CardText, CardBody, CardImg, Button} from "reactstrap";

const MerchandiseTable = (props) => {

    const landingMapper = () => {
        return props.landings.map((landing, index) => {
            return(
                <tr key={index}>
                    <th scope ='row'>{landing.image}</th>
                    <td>{landing.catagory}</td>
                    <td>{landing.name}</td>
                    <td>{landing.description}</td>
                    <td>{landing.price}</td>
                    <td>
                        <Button color='warning'>Update</Button>
                        <Button color='danger'>Delete</Button>
                    </td>
                </tr>
            )
        })
    }
    return (
        <div>
            <h3>Merchandise History</h3>
            <hr />
            <Card>
                <CardImg />
                <CardBody>
                    <CardText>
                        <ul>
                        <li>Catagory</li>
                        <li>Name</li>
                        <li>Description</li>
                        <li>Price</li>
                        </ul>
                    </CardText>
                </CardBody>
            </Card>

        </div>
    )
}

export default MerchandiseTable;