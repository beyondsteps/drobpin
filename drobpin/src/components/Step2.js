import React from 'react';

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleNext = () => {
    if (!formData.체험날짜 || !formData.체험유형 || !formData.운동경력) {
      alert('모든 항목을 입력해주세요.');
      return;
    }
    nextStep();
  };

  return (
    <div>
      <h2>크로스핏 체험 날짜와 유형을 알려주세요</h2>
      <input
        type="date"
        placeholder="언제 운동하러 오실 예정인가요?"
        value={formData.체험날짜}
        onChange={(e) => setFormData({ ...formData, 체험날짜: e.target.value })}
      />
      <select
        value={formData.체험유형}
        onChange={(e) => setFormData({ ...formData, 체험유형: e.target.value })}
      >
        <option value="">어떤 체험을 하실 예정인가요?</option>
        <option value="드랍인">드랍인</option>
        <option value="1회 체험">1회 체험</option>
      </select>
      <select
        value={formData.운동경력}
        onChange={(e) => setFormData({ ...formData, 운동경력: e.target.value })}
      >
        <option value=""> 크로스핏을 얼마나 해보셨나요 ? </option>
        <option value="입문자">크로스핏은 처음이에요</option>
        <option value="6개월 미만">6개월 미만이에요</option>
        <option value="1년 미만">1년 미만이에요</option>
        <option value="1년 이상">1년 이상이에요</option>
      </select>
      <button onClick={prevStep}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step2;