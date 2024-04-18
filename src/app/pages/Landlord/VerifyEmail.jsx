import VerificationComponent from '../../components/VerificationComponent';

function VerifyEmail() {

    return (
        <div className="verify-email">
            <VerificationComponent
            verifying="Email"
            destination="email"
            contact="fadejames@gmail.com"
            action=""
            arrowBack="/landlord/signup"
            link="/landlord/verify-email"
            />
        </div>
    )
}

export default VerifyEmail;
