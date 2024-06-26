import React from 'react';
import "../assets/css/OnboardingSteps.css";
import Button from "../components/ButtonComponent";

function OnboardingStep3() {
  return (
    <div className='onboard3'>
      <div className="background-image">
      <div className="text-container">
        <h5>Flexible Payment</h5>
        <p>Low interest and flexible payment options</p>
        <Button link="/signup-role">Next</Button>
      </div>
      </div>
    </div>
  );
}

export default OnboardingStep3;
