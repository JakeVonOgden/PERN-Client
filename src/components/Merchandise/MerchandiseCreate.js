import React, {useState } from "react";
import { Card, CardBody, CardText, Label, Input, Button, Form } from "reactstrap";


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
            <div>
                <h3>Add Merchandise</h3>
                <Form onSubmit={handleSubmit}>
                    <Card>
                     <CardBody>
                        <CardText>
                            <Label htmlFor='category'>Category</Label>
                            <Input type="select" name='category' value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="Apparel">Apparel</option>
                                <option value="Bakery">Bakery</option>
                                <option value="HandmadeGoods">Handmade Goods</option>
                                <option value="WallArt">Wall Art</option>
                                </Input>
                            <Label htmlFor='image'>Image</Label>
                            <Input name='image' value={image} onChange={(e) => setImage(e.target.value)}/>
                            <Label htmlFor='name'>Name</Label>
                            <Input name='name' value={name} onChange={(e) => setName(e.target.value)} />
                            <Label htmlFor='description'>Description</Label>
                            <Input name='descripton' value={description} onChange={(e) => setDescription(e.target.value)} />
                            {/* <Label htmlFor='owner'>Owner</Label>
                            <Input name='owner' value={owner} onChange={(e) => setOwner(e.target.value)} /> */}
                            <Label htmlFor='price'>Price</Label>
                            <Input name='price' value={price} onChange={(e) => setPrice(e.target.value)} />
                        </CardText>
                        <Button color = "success" type='submit'>Click to Submit</Button>
                    </CardBody>
                </Card>
                </Form>
            </div>
        )
}

export default MerchandiseCreate;



