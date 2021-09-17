import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const ShopEdit = (props) => {
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');


const shopUpdate = (event, shop) => {
    event.preventDefault();
    fetch(`http://localhost:4000/shop/${props.shopToUpdate.id}`, {
        method: 'PUT',
        body: JSON.stringify({category: editCategory, name: editName, image: editImage, description: editDescription}),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }) .then((res) => {
        props.fetchShop();
        props.updateOff();
    })
}

    return(
        <Modal isOpen={true}>
            <ModalHeader>Edit a Shop</ModalHeader>
            <ModalBody>
                <Form onSubmit={shopUpdate}>
                    <FormGroup>
                        <Label htmlFor="category">Shop Category:</Label><Input name="category" value={editCategory} onChange={(e) => setEditCategory(e.target.value)}/>

                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="name"> Edit Shop Name:</Label>
                        <Input name="name" value={editName} onChange={(e) => setEditName(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="image">Edit Shop Logo Link:</Label>
                        <Input name="image" value={editImage} onChange={(e) => 
                        setEditImage(e.target.value)} />
                    </FormGroup> 
                    <FormGroup>
                        <Label htmlFor="description"> Edit Shop Description:</Label>
                        <Input name="description" value={editDescription} onChange={(e) => setEditDescription(e.target.value)}/>
                    </FormGroup>        

                    <Button type="submit">Update</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
    }

export default ShopEdit;