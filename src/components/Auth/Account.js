import MerchandiseIndex from "../Merchandise/MerchandiseIndex";
import { Redirect } from "react-router";

const Account = (props) => {
    
    if (props.sessionToken === ''){
        alert("we dont know you")
        return <Redirect to ="/login" />
    }
    
    return (
        <>
            <MerchandiseIndex sessionToken={props.sessionToken} />
        </>
    )
}

export default Account;