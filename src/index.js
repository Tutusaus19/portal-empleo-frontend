import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './pages/auth/Login/Login';
import Register from './pages/auth/Register/Register';
import HomePage from './pages/home/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={< App />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);