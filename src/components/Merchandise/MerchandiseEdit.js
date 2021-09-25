import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import APIURL from '../../helpers/environment';

const MerchandiseEdit = (props) => {
    const [editCat, setEditCat] = useState(props.merchandiseToUpdate.category);
    const [editName, setEditName] = useState(props.merchandiseToUpdate.name);
    const [editImg, setEditImg] = useState(props.merchandiseToUpdate.image);
    const [editDesc, setEditDesc] = useState(props.merchandiseToUpdate.description);
    const [editOwner, setEditOwner] = useState(props.merchandiseToUpdate.owner);
    const [editPrc, setEditPrc] = useState(props.merchandiseToUpdate.price);

    const merchandiseUpdate = (event, landing) => {
        event.preventDefault();
        fetch(`${APIURL}merchandise/edit/${props.merchandiseToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({category: editCat, name: editName, image: editImg, description: editDesc, owner: editOwner, price: editPrc}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.sessionToken}`
            })
        }) .then((res) => {
            props.fetchLandings();
            props.updateOff();
        })
    }

    return (
        
            <Modal isOpen = {true}>
                <ModalHeader>List some Merchandise</ModalHeader>
                <ModalBody>
                    <Form onSubmit={merchandiseUpdate}>
                        <FormGroup>
                            <Label htmlfor="category">Edit Category:</Label>
                            <Input name="category" value={editCat} onChange={(e) => setEditCat(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlfor="name">Edit Name:</Label>
                            <Input name="name" value={editName} onChange={(e) => setEditName(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlfor="image">Edit Image:</Label>
                            <Input name="image" value={editImg} onChange={(e) => setEditImg(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlfor="description">Edit Description:</Label>
                            <Input name="description" value={editDesc} onChange={(e) => setEditDesc(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlfor="owner">Edit Owner:</Label>
                            <Input name="owner" value={editOwner} onChange={(e) => setEditOwner(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlfor="price">Edit Price:</Label>
                            <Input name="price" value={editPrc} onChange={(e) => setEditPrc(e.target.value)}/>
                        </FormGroup>
                        <Button type="submit">Update Your Merchandise!</Button>
                    </Form>
                </ModalBody>
            </Modal>
        
    )

}

export default MerchandiseEdit;