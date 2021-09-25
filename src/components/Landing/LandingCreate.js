import React, {useState } from "react";
import { Card, CardBody, CardText, Label, Input, Button } from "reactstrap";


const LandingCreate = (props) => {

    const [category, setCategory] = useState('');
        const [name, setName] = useState('');
        const [image, setImage] = useState('');
        const [description, setDescription] = useState('');
        const [price, setPrice] = useState('');

        const handleSubmit =(e) => {
            e.preventDefault();
            fetch('https://juniper-server.herokuapp.com/merchandise/', {
                method: 'POST',
                body: JSON.stringify({merchandise: {category, image, name, description, price}}),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': props.token
                })
            }).then((res) => res.json())
            .then((merchandiseData) =>{
                console.log(merchandiseData);
                setCategory('');
                setImage('');
                setName('');
                setDescription('');
                setPrice('');
                props.fetchLandings();
            })
        }
        

        return (
            <div>
                <h3>Create merchandise to upload</h3>
                <Card onSubmit={handleSubmit}>
                    <img src={image} value='image' onChange={(e) => setImage(e.target.value)}/>
                    <CardBody>
                        <CardText>
                            <Label htmlFor='category'/>
                            <Input name='catagory' value={category} onChange={(e) => setCategory(e.target.value)} />
                            <Label htmlFor='name'/>
                            <Input name='name' value={name} onChange={(e) => setName(e.target.value)} />
                            <Label htmlFor='description'/>
                            <Input name='descripton' value={description} onChange={(e) => setDescription(e.target.value)} />
                            <Label htmlFor='price'/>
                            <Input name='price' value={price} onChange={(e) => setPrice(e.target.value)} />
                        </CardText>
                        <Button type='submit'>Click to Submit</Button>
                    </CardBody>
                </Card>
            </div>
        )
}

export default LandingCreate;



