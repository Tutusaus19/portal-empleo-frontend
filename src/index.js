import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './pages/auth/Login/Login';
import Register from './pages/auth/Register/Register';
import HomePage from './pages/home/HomePage';
import PublicOffer from './pages/publicOffer/PublicOffer';
import LoginHome from './pages/login/loginHome/LoginHome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< App />}>
          <Route path="" element={< HomePage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/publicar-empleo" element={<PublicOffer />} />
        <Route path="/home" element={<LoginHome/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);