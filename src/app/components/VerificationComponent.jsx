import arrowLeft from '../assets/images/arrow-left.svg';
import '../assets/css/VerificationComponent.css';
import React from 'react';
import useVerificationHook from "react-code-hook"

function VerificationComponent({ verifying, destination, contact, action, arrowBack, link, buttonText }) {
    const { inputStates, inputClass, handleChange, handleKeyDown } =
        useVerificationHook(4);

    return (
        <div className='verify-container'>
            <div className='verify-header'>
                <a href={arrowBack}><img src={arrowLeft} alt="arrowLeft icon" /></a>
            </div>
            <div className='verify-content'>
                <h3>Verify {verifying}</h3>
                <p>Enter the 4-digit Code we sent to your {destination} at <span>{contact}</span></p>
            </div>
            <form action={action}>
                <div className="inputs">
                {inputStates.map((state, ii) => {
                    return (
                        <input
                            type="number"
                            value={state.digit}
                            className={inputClass}
                            onChange={(e) => handleChange(e, ii)}
                            onKeyDown={handleKeyDown}
                            style={{ fontSize: '20px' }}
                        />
                    );
                })}
                </div>
                <p>Didn’t receive the code?</p>
                <a href={link}>Resend Code</a>
                <button>Verify</button>
            </form>
        </div>
    )
}

export default VerificationComponent;
