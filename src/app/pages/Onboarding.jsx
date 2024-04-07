import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/css/OnboardingSteps.css';
import OnboardingStep1 from '../components/OnboardingStep1Component';
import OnboardingStep2 from '../components/OnboardingStep2Component';
import OnboardingStep3 from '../components/OnboardingStep3Component';
import PaginationDots from '../components/PaginationDotsComponent';

function Onboarding() {
  const [activeStep, setActiveStep] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    beforeChange: (current, next) => setActiveStep(next)
  };

  return (
    <div className="onboarding">
      <Slider {...settings}>
        <OnboardingStep1 />
        <OnboardingStep2 />
        <OnboardingStep3 />
      </Slider>
      <PaginationDots activeStep={activeStep} totalSteps={3} />
    </div>
  );
}

export default Onboarding;