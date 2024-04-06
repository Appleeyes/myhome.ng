import React from 'react';
import googleIcon from '../assets/images/google.svg';
import '../assets/css/AuthButtons.css';

function GoogleAuthButton() {
  return (
    <button className="auth-button" onClick={handleGoogleAuth}>
      <img src={googleIcon} alt="Google Icon" />
    </button>
  );
}

function handleGoogleAuth() {
    console.log('Sign In with Google');
  }

export default GoogleAuthButton;