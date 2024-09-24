import React, { useState } from 'react';

export default function ReservationForm() {
  const [formInput, setFormInput] = useState({
    이름: "",
    나이: "",
    성별: "",
    연락처: "",
    체험날짜: "",
    체험유형: "",
    입금여부: "현장 결제", // 기본값으로 설정
    inflow: "1", // 숨김 필드
  });

  function handleInputChange(field, event) {
    const value = event.target.value;
    setFormInput((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formInput);
    console.log("API Key:", process.env.REACT_APP_API_KEY);

    try {
      const response = await fetch('http://localhost:5678/webhook-test/info-insert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'd15c9bbb0d6e46a2974d9ec28cce3093',
        },
        body: JSON.stringify(formInput),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("전송 성공:", data);
      } else {
        console.error("전송 실패 :", response.statusText);
      }
    } catch (error) {
      console.error("Error During Sending Data:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>예약 폼</h2>

      <div className="control">
        <label>이름</label>
        <input
          type="text"
          name="이름"
          onChange={(event) => handleInputChange("이름", event)}
          value={formInput.이름}
        />
      </div>

      <div className="control">
        <label>나이</label>
        <input
          type="number"
          name="나이"
          onChange={(event) => handleInputChange("나이", event)}
          value={formInput.나이}
        />
      </div>

      <div className="control">
        <label>성별</label>
        <label>
          <input
            type="radio"
            name="성별"
            value="남성"
            checked={formInput.성별 === '남성'}
            onChange={(event) => handleInputChange("성별", event)}
          />
          남성
        </label>
        <label>
          <input
            type="radio"
            name="성별"
            value="여성"
            checked={formInput.성별 === '여성'}
            onChange={(event) => handleInputChange("성별", event)}
          />
          여성
        </label>
      </div>

      <div className="control">
        <label>연락처</label>
        <input
          type="tel"
          name="연락처"
          pattern="[0-9]{11}"
          placeholder="- 없이 입력해주세요"
          onChange={(event) => handleInputChange("연락처", event)}
          value={formInput.연락처}
        />
      </div>

      <div className="control">
        <label>신청 날짜</label>
        <input
          type="date"
          name="체험날짜"
          onChange={(event) => handleInputChange("체험날짜", event)}
          value={formInput.체험날짜}
        />
      </div>

      <div className="control">
        <label>체험 유형</label>
        <label>
          <input
            type="radio"
            name="체험유형"
            value="드랍인"
            checked={formInput.체험유형 === '드랍인'}
            onChange={(event) => handleInputChange("체험유형", event)}
          />
          드랍인
        </label>
        <label>
          <input
            type="radio"
            name="체험유형"
            value="체험권"
            checked={formInput.체험유형 === '체험권'}
            onChange={(event) => handleInputChange("체험유형", event)}
          />
          체험권
        </label>
      </div>

      <div className="control">
        <label>결제 방식</label>
        <input
          type="checkbox"
          checked={true}
          disabled={true}
        />
        <label>현장결제</label>
      </div>

      {/* inflow 필드 (숨김 처리) */}
      <input
        type="hidden"
        name="inflow"
        value={formInput.inflow}
      />

      <p>
        <button type="submit">제출</button>
      </p>
    </form>
  );
}
