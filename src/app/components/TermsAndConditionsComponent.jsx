import React, { useState } from 'react';
import '../assets/css/TermsAndConditions.css';

function TermsAndConditions() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="terms-and-conditions">
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <span></span>
                <p className={isChecked ? 'checked' : ''}>
                    By clicking on Create Account you are agreeing to our{' '}
                    <a href="/terms" target="_blank" rel="noopener noreferrer">
                        terms and conditions
                    </a>
                </p>
            </label>
        </div>
    );
}

export default TermsAndConditions;
