import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const MerchCreate = (props) => {
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:4000/merchandise/', {
        method: 'POST',
        body: JSON.stringify({category: category, name: name, image: image, description: description, price: price}),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }) .then((res) => res.json())
    .then((logData) => {
        console.log(logData);
        setCategory('');
        setName('');
        setImage('');
        setDescription('');
        setPrice('');
        props.fetchMerchandise();
    }).catch(err => console.log(err))
}

    return(
        <>
        <h5>Create a Product:</h5>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="category">Product Catgegory:</Label>
                <Input name="category" value={category} onChange={(e) => setCategory(e.target.value)}/>
                <p> </p>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="name">Product Name:</Label>
                <Input name="name" value={name} onChange={(e) => setName(e.target.value)}>
                </Input>
                <p> </p>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="image">Link to Product Image:</Label>
                <Input name="image" value={image} onChange={(e) => setImage(e.target.value)}/>
            </FormGroup>
            <p>  </p>
            <FormGroup>
                <Label htmlFor="description">Product Description:</Label>
                <Input name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </FormGroup>
            <p>  </p>
            <FormGroup>
                <Label htmlFor="price">Price:</Label>
                <Input name="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
            </FormGroup>
            <p>  </p>
            <Button type="submit">Log</Button>
            <p>  </p>
            <hr></hr>
            <p>  </p>

        </Form>
        </>
    )
}

export default MerchCreate;