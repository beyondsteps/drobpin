import React, { useState } from 'react';

export default function AdminPage() {
  const [message, setMessage] = useState('');

  async function handleRestrictBooking(date) {
    try {
      const response = await fetch('http://localhost:5678/api/restrict-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date }),
      });

      if (response.ok) {
        setMessage('예약이 제한되었습니다.');
      } else {
        setMessage('예약 제한에 실패했습니다.');
      }
    } catch (error) {
      setMessage('에러가 발생했습니다.');
    }
  }

  return (
    <div>
      <h2>관리자 페이지</h2>
      <button onClick={() => handleRestrictBooking('2023-10-01')}>2023-10-01 예약 제한</button>
      <p>{message}</p>
    </div>
  );
}
