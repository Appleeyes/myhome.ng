import React, { useState } from 'react';
import Modal from '../../components/CustomModal';
import FormComponent from '../../components/FormComponent';
import arrowLeft from '../../assets/images/arrow-left.svg';
import CheckIcon from '../../assets/images/check-icon.svg';
import '../../assets/css/SignUp.css';
import GoogleAuthButton from '../../components/GoogleAuthComponent';
import FacebookAuthButton from '../../components/FacebookAuthComponent';
import TermsAndConditions from '../../components/TermsAndConditionsComponent';

function SignUp() {
    const [showModal, setShowModal] = useState(false);

    const fields = [
        { name: 'fullName', label: 'Full Name', type: 'text' },
        { name: 'phoneName', label: 'Phone Name', type: 'number' },
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'username', label: 'Username', type: 'text' },
        { name: 'password', label: 'Password', type: 'password' },
        { name: 'confirmPassword', label: 'Confirm Password', type: 'password' },
    ];

    const handleSignUp = (formData) => {
        setShowModal(true);
        console.log('Sign up button clicked');
    };

    return (
        <div className="SignUp">
            <div className='head'>
                <a href="/access"><img
                    src={arrowLeft}
                    alt="Arrow Left Icon"
                    className="arrowLeft-icon"
                /></a>
                
                <h1>Create Account</h1>
            </div>

            <FormComponent
                fields={fields}
                submitButtonText="Create Account"
                onSubmit={handleSignUp}
                additionalTagText="Already have an Account? "
                additionalTagLink="/landlord/login"
                additionalTagLinkText="Log In"
            />

            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className='modal-cont'>
                        <img src={CheckIcon} alt="Check Icon" />
                        <p>Verify Your Email</p>
                    </div>
                    <div className='buttons'>
                        <a href="/landlord/verify-email">Verify</a>
                        <a href="/landlord/account-success">Skip</a>
                    </div>
                </Modal>
            )}

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
                    <TermsAndConditions />
                </div>
            </div>
        </div>
    );
}

export default SignUp;
