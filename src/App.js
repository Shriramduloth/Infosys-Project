import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import HomePage from './Components/Homepage';
import React from 'react';
import './App.css';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/signuppage" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
