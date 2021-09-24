import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const MerchEdit = (props) => {
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    https://juniper-server.herokuapp.com/user/login
const merchUpdate = (event, merchandise) => {
    event.preventDefault();
    fetch(`http://localhost:4000/merchandise/${props.merchToUpdate.id}`, {
        method: 'PUT',
        body: JSON.stringify({category: editCategory, name: editName, image: editImage, description: editDescription, price: editPrice}),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }) .then((res) => {
        props.fetchMerch();
        props.updateOff();
    })
}

    return(
        <Modal isOpen={true}>
            <ModalHeader>Edit a Product</ModalHeader>
            <ModalBody>
                <Form onSubmit={merchUpdate}>
                    <FormGroup>
                        <Label htmlFor="category">Edit Category:</Label><Input name="category" value={editCategory} onChange={(e) => setEditCategory(e.target.value)}/>

                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="name"> Edit Product Name:</Label>
                        <Input name="name" value={editName} onChange={(e) => setEditName(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="image">Edit Product Image Link:</Label>
                        <Input name="image" value={editImage} onChange={(e) => 
                        setEditImage(e.target.value)} />
                    </FormGroup> 
                    <FormGroup>
                        <Label htmlFor="description"> Edit Product Description:</Label>
                        <Input name="description" value={editDescription} onChange={(e) => setEditDescription(e.target.value)}/>
                    </FormGroup>        
                    <FormGroup>
                        <Label htmlFor="price"> Edit Price:</Label>
                        <Input name="price" value={editPrice} onChange={(e) => setEditPrice(e.target.value)}/>
                    </FormGroup>
                    <Button type="submit">Update</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
    }

export default MerchEdit;