import AccountSuccessComponent from "../../components/AccountSuccessComponent";

function AccountSuccess() {
    return (
        <div>
            <AccountSuccessComponent
                arrowBack="/user/signup"
                link="/user/login"
            />
        </div>
    )
}

export default AccountSuccess;