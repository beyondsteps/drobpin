import React, { useState } from 'react';
import useMultiStepForm from '../hooks/useMultiStepForm';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

function MultiStepForm() {
  // 폼 데이터를 관리하는 상태
  const [formData, setFormData] = useState({ name: '', email: '' });

  // 단계별로 나눠진 폼 컴포넌트
  const steps = [
    <StepOne formData={formData} setFormData={setFormData} />,
    <StepTwo formData={formData} setFormData={setFormData} />,
  ];

  const { currentStepIndex, step, next, back } = useMultiStepForm(steps);

  return (
    <div>
      <h1>Multi-Step Form</h1>
      {step}  {/* 현재 단계의 컴포넌트를 렌더링 */}

      <div>
        <button disabled={currentStepIndex === 0} onClick={back}>
          Back
        </button>
        <button onClick={next}>
          {currentStepIndex === steps.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
}

export default MultiStepForm;
