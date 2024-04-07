import React from 'react';
import OnboardingLogo from '../assets/images/onboard-logo.svg';
import "../assets/css/OnboardingSteps.css";

function OnboardingStep1() {
  return (
    <div className='onboard1'>
      <img src={OnboardingLogo} alt="Onboarding Logo" />
    </div>
  );
}

export default OnboardingStep1;
