import React from "react";
import { Alert } from "reactstrap";


const SessionCheck = (props) => {
    // if (!props.sessionToken);
    console.log("sessionCheck")

    return (
        <div>
        <Alert variant="danger">
            <Alert.Heading>Hey, we don't know you...</Alert.Heading>
            <hr />
            Please <Alert.Link href='./Login'>log in</Alert.Link> or <Alert.Link href='./Register'>register</Alert.Link> to see Account!
        </Alert>
        
        </div>
    )
}

export default SessionCheck;