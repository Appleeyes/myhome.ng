import React from 'react';
import facebookIcon from '../assets/images/facebook.svg';
import '../assets/css/AuthButtons.css';
function FacebookAuthButton() {
  return (
    <button className="auth-button" onClick={handleFacebookAuth}>
      <img src={facebookIcon} alt="Facebook Icon" />
    </button>
  );
}

function handleFacebookAuth() {
  console.log('Sign In with Facebook');
}

export default FacebookAuthButton;
