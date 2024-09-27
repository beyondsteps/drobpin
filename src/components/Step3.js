import React from 'react';


const Step3 = ({ formData, setFormData, prevStep, handleSubmit }) => {
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const missingFields = [];
    if (!formData.입금여부) missingFields.push('입금여부');
    if (!formData.agree) missingFields.push('약관 동의');

    if (missingFields.length > 0) {
      alert(`${missingFields.join(', ')}을(를) 입력해주세요.`);
      return;
    }

    await handleSubmit(formData); // formData를 handleSubmit에 전달
  };

  return (
    <div>
      <h2>Step 3</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          <select
            value={formData.입금여부}
            onChange={(e) => setFormData({ ...formData, 입금여부: e.target.value })}
          >
            <option value="현장 결제">현장 결제</option>
            <option value="기타">기타</option>
          </select>
        </label>
        <input
          type="checkbox"
          checked={formData.agree}
          onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
        />
        <label>약관에 동의합니다</label>
        <button type="button" onClick={prevStep}>Back</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Step3;