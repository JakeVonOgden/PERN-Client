import MerchandiseIndex from "../Merchandise/MerchandiseIndex";

const Account = (props) => {
    return (
        <>
            <MerchandiseIndex sessionToken={props.sessionToken} />
        </>
    )
}

export default Account;