// components/StepTwo.js
import React from 'react';

/**
 * 두 번째 단계 폼
 * @param {Object} props - 부모 컴포넌트에서 전달된 데이터와 함수
 */
function StepTwo({ formData, setFormData }) {
  return (
    <div>
      <h2>Step 2</h2>
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Email"
      />
    </div>
  );
}

export default StepTwo;
