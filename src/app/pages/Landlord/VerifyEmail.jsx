import VerificationComponent from '../../components/VerificationComponent';

function VerifyEmail() {

    return (
        <div className="verify-email">
            <VerificationComponent
            verifying="Email"
            destination="email"
            contact="bolaahmed@gmail.com"
            action="/landlord/account-success"
            link="/landlord/verify-email"
            />
        </div>
    )
}

export default VerifyEmail;
