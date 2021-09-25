import MerchandiseIndex from "../Merchandise/MerchandiseIndex";

const Account = (props) => {
  
  

    return (
        <div>
            <MerchandiseIndex sessionToken={props.sessionToken} />
        </div>
    )
}

export default Account;