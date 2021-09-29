
import MerchandiseIndex from "../Merchandise/MerchandiseIndex";
import SessionCheck from "./SessionCheck";

const Account = (props) => {
   
   
    return (
        <>
            <SessionCheck sessionToken={props.sessionToken} />
            <MerchandiseIndex sessionToken={props.sessionToken} />
        </>
    )
}

export default Account;