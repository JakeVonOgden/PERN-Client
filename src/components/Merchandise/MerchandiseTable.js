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
                 
                    <th style={{padding: '15px', backgroundColor: 'rgba(255,225,225,0.6)'}}>{landing.category}</th>
                    <td style={{padding: '15px', backgroundColor: 'rgba(255,225,225,0.6)'}}>{landing.name}</td>
                    <td style={{padding: '15px', backgroundColor: 'rgba(255,225,225,0.6)'}}>{landing.description}</td>
                    <td style={{padding: '15px', backgroundColor: 'rgba(255,225,225,0.6)'}}>${landing.price}</td>
                    <td style={{padding: '10px', backgroundColor: 'rgba(255,225,225,0.6)'}}>
                        <Button  style={{backgroundColor: '#20bf55;', color: 'rgb(0,0,0)', backgroundImage: 'linear-gradient(315deg, #20bf55 0%, #01baef 100%)', borderRadius: '25px', boxShadow: '4px 3px rgba(0, 0, 0, 0.3)',padding: '5px' }} onClick={() => {props.editUpdateMerchandise(landing); props.updateOn()}}>Update</Button>
                        <Button style={{backgroundColor: '#20bf55;', backgroundImage: 'linear-gradient(315deg, crimson 30%, #01baef 100%)', borderRadius: '25px', boxShadow: '4px 3px rgba(0, 0, 0, 0.3)', color: 'black', fontWeight: '700'}} onClick={() => {deleteMerchandise(landing)}}>Delete</Button>
                    </td>
                </tr>
          
            )
        })
    }

    return (
        <div>
            <div style={{textAlign: 'center'}}>
            <h3 style={{textShadow: '4px 3px 0px rgba(0,0,0,0), 3px 4px 0px rgba(0,0,0,0.3)', fontSize: '70px', fontFamily: 'monospace', fontWeight: '500'}}>Listed Merchandise</h3>
            </div>
            <hr/>
            <Table striped style={{borderColor: 'rgb(0,0,0)'}}>
                <thead style={{backgroundColor: 'rgba(50,50,50)', color: 'rgb(255,255,255)', boxShadow: '2px 4px 2px 1px rgba(0,0,0,1)'}}>
                    <tr>
                    <th style={{padding:'15px', }}>Category</th>
                    <th style={{padding:'15px', }}>Name</th>
                    <th style={{padding:'15px', }}>Description</th>
                    <th >Price</th>
                    <th style={{textAlign: 'center'}}>Edit</th>
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