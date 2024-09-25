import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

export default function InputForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    이름: "",
    나이: "",
    성별: "",
    연락처: "",
    체험날짜: "",
    체험유형: "",
    입금여부: "현장 결제",
    inflow: "1",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:5678/webhook-test/info-insert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'd15c9bbb0d6e46a2974d9ec28cce3093',
        },
        body: JSON.stringify(data), // formData 대신 data 사용
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("전송 성공:", responseData);
      } else {
        console.error("전송 실패 :", response.statusText);
      }
    } catch (error) {
      console.error("Error During Sending Data:", error);
    }
  };

  switch (step) {
    case 1:
      return <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
    case 2:
      return <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <Step3 formData={formData} setFormData={setFormData} prevStep={prevStep} handleSubmit={handleSubmit} />;
    default:
      return null;
  }
}
