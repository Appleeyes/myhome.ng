import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import OnboardingStep1 from '../components/OnboardingStep1Component';
import OnboardingStep2 from '../components/OnboardingStep2Component';
import OnboardingStep3 from '../components/OnboardingStep3Component';
import PaginationDots from '../components/PaginationDotsComponent';

function Onboarding() {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <div>
      <SwipeableViews enableMouseEvents index={activeStep} onChangeIndex={handleStepChange}>
        <OnboardingStep1 />
        <OnboardingStep2 />
        <OnboardingStep3 />
      </SwipeableViews>
      <PaginationDots activeStep={activeStep} totalSteps={3} />
    </div>
  );
}

export default Onboarding;
