import FormComponent from '../components/FormComponent';
import arrowLeft from '../assets/images/arrow-left.svg';
import '../assets/css/SignUp.css';
import GoogleAuthButton from '../components/GoogleAuthComponent';
import FacebookAuthButton from '../components/FacebookAuthComponent';
import TermsAndConditions from '../components/TermsAndConditionsComponent';

function SignUp() {
    const fields = [
        { name: 'fullName', label: 'Full Name', type: 'text' },
        { name: 'phoneName', label: 'Phone Name', type: 'number' },
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'username', label: 'Username', type: 'text' },
        { name: 'password', label: 'Password', type: 'password' },
        { name: 'confirmPassword', label: 'Confirm Password', type: 'password' },
    ];
    return (
        <div className="SignUp">
            <div className='head'>
                <img
                    src={arrowLeft}
                    alt="Arrow Left Icon"
                    className="arrowLeft-icon"
                />
                <h1>Create Account</h1>
            </div>

            <FormComponent
                fields={fields}
                submitButtonText="Create Account"
                additionalTagText="Already have an Account? "
                additionalTagLink="/login"
                additionalTagLinkText="Log In"
            />

            <div>
                <div className="line">
                    <hr />
                    <span>Or create account with email</span>
                    <hr />
                </div>
                <div className="authButtons">
                    <GoogleAuthButton />
                    <FacebookAuthButton />
                </div>
                <div className="terms">
                    <TermsAndConditions/>
                </div>
            </div>
        </div>
    );
}

export default SignUp;