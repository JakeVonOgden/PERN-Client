import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const ShopCreate = (props) => {
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    

const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:4000/shop/', {
        method: 'POST',
        body: JSON.stringify({category: category, name: name, image: image, description: description}),
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
        props.fetchShop();
    }).catch(err => console.log(err))
}

    return(
        <>
        <h5>Create a Shop:</h5>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="category">Shop Category:</Label>
                <Input name="category" value={category} onChange={(e) => setCategory(e.target.value)}/>
                <p> </p>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="name">Shop Name:</Label>
                <Input name="name" value={name} onChange={(e) => setName(e.target.value)}>
                </Input>
                <p> </p>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="image">Link to Shop Logo:</Label>
                <Input name="image" value={image} onChange={(e) => setImage(e.target.value)}/>
            </FormGroup>
            <p>  </p>
            <FormGroup>
                <Label htmlFor="description">Shop Description:</Label>
                <Input name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
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

export default ShopCreate;