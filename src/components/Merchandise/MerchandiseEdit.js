import React, {useState} from "react";

const MerchandiseEdit = (props) => {
    const [editCat, setEditCat] = useState(props.landingsToUpdate.category);
        const [editName, setEditName] = useState(props.landingsToUpdate.name);
        const [editImg, setEditImg] = useState(props.landingsToUpdate.image);
        const [editDesc, setEditDesc] = useState(props.landingsToUpdate.description);
        const [editOwner, setEditOwner] = useState(props.landingsToUpdate.owner);
        const [editPrc, setEditPrc] = useState(props.landingsToUpdate.price);

    return (
        <>
        </>
    )
}

export default MerchandiseEdit;