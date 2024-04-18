import VerificationComponent from '../../components/VerificationComponent';

function VerifyEmail() {

    return (
        <div className="verify-email">
            <VerificationComponent
            verifying="Email"
            destination="email"
            contact="fadejames@gmail.com"
            action=""
            arrowBack="/user/signup"
            link="/user/verify-email"
            />
        </div>
    )
}

export default VerifyEmail;
