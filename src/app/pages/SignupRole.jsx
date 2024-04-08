import React from 'react';
import "../assets/css/OnboardingSteps.css";
import Button from "../components/ButtonComponent";

function SignupRole() {
  return (
    <div className='signup-role'>
      <div className="background-image">
        <div className="text-container">
          <h5>Are you</h5>
          <Button link="/access">Land Lord</Button>
          <Button link="/access">Tenant</Button>
        </div>
      </div>

    </div>
  );
}

export default SignupRole;
