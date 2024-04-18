import React from 'react';
import PhoneIcon from '../assets/images/phoneAuth.png';
import '../assets/css/AuthButtons.css';
function FacebookAuthButton() {
  return (
    <button className="auth-button" onClick={handleFacebookAuth}>
      <img src={PhoneIcon} alt="Facebook Icon" />
    </button>
  );
}

function handleFacebookAuth() {
  console.log('Sign In with Phone');
}

export default FacebookAuthButton;
