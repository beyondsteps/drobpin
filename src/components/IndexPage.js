import React from 'react';
import { Link } from 'react-router-dom';

export default function IndexPage() {
  return (
    <div>
      <h1>메인 페이지</h1>
      <Link to="/reservation">예약 폼으로 이동</Link>
    </div>
  );
}
