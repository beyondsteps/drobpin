import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReservationForm from './components/InputForm';
import IndexPage from './components/IndexPage';
import ErrorPage from './components/ErrorPage';
import MultiStepForm from './components/MultiStepsForm';
import AdminPage from './components/Adminpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/reservation" element={<ReservationForm />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/form" element={<MultiStepForm />} />
      </Routes>
    </Router>
  );
}

export default App;