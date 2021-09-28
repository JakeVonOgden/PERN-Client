import React, {useState } from "react";
import { Card, CardBody, CardText, Label, Input, Button, Form, Container } from "reactstrap";


const MerchandiseCreate = (props) => {

    const [category, setCategory] = useState('');
        const [name, setName] = useState('');
        const [image, setImage] = useState('');
        const [description, setDescription] = useState('');
        const [owner, setOwner] = useState('');
        const [price, setPrice] = useState('');

        const handleSubmit =(e) => {
            e.preventDefault();
            fetch('https://juniper-server.herokuapp.com/merchandise/', {
                method: 'POST',
                body: JSON.stringify({category: category, image: image, name: name, description: description, owner: owner, price: price}),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${props.sessionToken}`

                })
            }).then((res) => res.json())
            .then((merchandiseData) =>{
                console.log(merchandiseData);
                setCategory('');
                setImage('');
                setName('');
                setDescription('');
                setOwner('');
                setPrice('');
                props.fetchLandings();
            })
        }
        

        return (
            <Container fluid={true}>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                 
                <div style={{ textAlign: 'center'}}>
                <h3 style={{textShadow: '4px 3px 0px rgba(0,0,0,0), 2px 3px 0px rgba(0,0,0,0.2)', fontSize: '40px', fontFamily: 'monospace', fontWeight: '700'}}>Add Merchandise</h3>
                
                </div>
                <br/>
                <Form onSubmit={handleSubmit}>
                <Card className='mb-3' style={{background: 'rgb(130,180,180)', borderRadius: '25px', boxShadow: '6px 6px 4px 2px rgba(0, 0, 0, 0.65)'}}>
                     <CardBody>
                        <CardText>
                            <Label htmlFor='image' style={{fontFamily: 'courier-new', padding: '5px', fontSize: '25px', fontWeight: '600'}} >Category</Label>
                            <Input  style ={{ backgroundColor: 'rgb(225,225,225)', boxShadow: '4px 3px 2px 2px rgba(0,0,0,0.65)' }} type="select" name='category' value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="Apparel">Apparel</option>
                                <option value="Bakery">Bakery</option>
                                <option value="HandmadeGoods">Handmade Goods</option>
                                <option value="WallArt">Wall Art</option>
                                </Input>
                            <Label htmlFor='image' style={{fontFamily: 'courier-new', padding: '10px', fontSize: '25px', fontWeight: '600'}}>Image Link</Label>
                            <Input style ={{ backgroundColor: 'rgb(225,225,225)', boxShadow: '4px 3px 2px 2px rgba(0,0,0,0.65)' }} name='image' value={image} onChange={(e) => setImage(e.target.value)}/>
                            <Label htmlFor='image' style={{fontFamily: 'courier-new', padding: '10px', fontSize: '25px', fontWeight: '600'}}>Name</Label>
                            <Input style ={{ backgroundColor: 'rgb(225,225,225)', boxShadow: '4px 3px 2px 2px rgba(0,0,0,0.65)' }} name='name' value={name} onChange={(e) => setName(e.target.value)} />
                            <Label htmlFor='image' style={{fontFamily: 'courier-new', padding: '10px', fontSize: '25px', fontWeight: '600'}}>Description</Label>
                            <Input style ={{ backgroundColor: 'rgb(225,225,225)', boxShadow: '4px 3px 2px 2px rgba(0,0,0,0.65)' }}name='descripton' value={description} onChange={(e) => setDescription(e.target.value)} />
                            <Label htmlFor='image' style={{fontFamily: 'courier-new', padding: '10px', fontSize: '25px', fontWeight: '600'}}>Price</Label>
                            <Input style ={{ backgroundColor: 'rgb(225,225,225)', boxShadow: '4px 3px 2px 2px rgba(0,0,0,0.65)' }} name='price' value={price} onChange={(e) => setPrice(e.target.value)} />
                        </CardText>
                        <br/>
                        <div style={{textAlign: 'center'}}>
                        <Button style={{border: '50px',borderRadius: '25px',fontWeight: '600', backgroundColor: 'rgb(35,35,35)', fontSize: '25px', boxShadow: '4px 3px 2px 2px rgba(65, 65, 65,1)'}} type='submit'>Submit</Button>
                        </div>
                    </CardBody>
                </Card>
                </Form>
            </Container>
        )
}

export default MerchandiseCreate;



