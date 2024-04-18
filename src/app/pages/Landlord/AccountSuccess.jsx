import AccountSuccessComponent from "../../components/AccountSuccessComponent";

function AccountSuccess() {
    return (
        <div>
            <AccountSuccessComponent
                arrowBack="/landlord/signup"
                link="/landlord/login"
            />
        </div>
    )
}

export default AccountSuccess;