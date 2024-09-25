import React from 'react';

const Step1 = ({ formData, setFormData, nextStep }) => {
  const handleNext = () => {
    const missingFields = [];
    if (!formData.이름) missingFields.push('이름');
    if (!formData.연락처) missingFields.push('연락처');
    if (!formData.나이) missingFields.push('나이');
    if (!formData.성별) missingFields.push('성별');

    if (missingFields.length > 0) {
      alert(`${missingFields.join(', ')}을(를) 입력해주세요.`);
      return;
    }

    // 연락처 필드가 숫자인지 확인
    if (isNaN(formData.연락처)) {
      alert('연락처는 숫자로 입력해주세요.');
      return;
    }
    // 나이 필드가 숫자인지 확인
    if (isNaN(formData.나이)) {
      alert('나이를 숫자로 입력해주세요.');
      return;
    }

    nextStep();
  };

  return (
    <div>
      <h2>인적사항을 알려주세요</h2>
      <input
        type="text"
        placeholder="성함을 알려주세요"
        value={formData.이름}
        onChange={(e) => setFormData({ ...formData, 이름: e.target.value })}
      />
      <input
        type="tel"
        placeholder="연락처를 입력해주세요"
        value={formData.연락처}
        onChange={(e) => setFormData({ ...formData, 연락처: e.target.value })}
      />
      <input
        type="text" // type을 text로 변경하여 숫자와 문자열 모두 입력 가능
        placeholder="나이가 어떻게 되시나요?"
        value={formData.나이}
        onChange={(e) => setFormData({ ...formData, 나이: e.target.value })}
      />

      <select
        value={formData.성별}
        onChange={(e) => setFormData({ ...formData, 성별: e.target.value })}
      >
        <option value="">성별이 어떻게 되시나요?</option>
        <option value="남성">남성</option>
        <option value="여성">여성</option>
        <option value="선택안함">선택안함</option>
      </select>
 
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step1;