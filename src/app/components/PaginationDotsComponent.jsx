import React from 'react';
import '../assets/css/PaginationDots.css';

function PaginationDots({ activeStep, totalSteps }) {
  return (
    <div className="pagination-dots">
      {Array.from(Array(totalSteps).keys()).map((step, index) => (
        <div
          key={index}
          className={`dot ${activeStep >= index ? 'active' : ''}`}
        />
      ))}
    </div>
  );
}

export default PaginationDots;
