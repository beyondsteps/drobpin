// components/StepOne.js
import React from 'react';

/**
 * 첫 번째 단계 폼
 * @param {Object} props - 부모 컴포넌트에서 전달된 데이터와 함수
 */
function StepOne({ formData, setFormData }) {
  return (
    <div>
      <h2>Step 1</h2>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Name"
      />
    </div>
  );
}

export default StepOne;
