import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './pages/auth/Login/Login';
import Register from './pages/auth/Register/Register';
import HomePage from './pages/home/HomePage';
import PublicOffer from './pages/publicOffer/PublicOffer';
import LoginHome from './pages/login/loginHome/LoginHome';
import Profile from './pages/login/profile/Profile';
import Jobs from './pages/login/jobs/Jobs';
import Applied from './pages/login/applied/Applied';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Context, { useGetter } from './store';
import  {useUser}  from './hooks';

const Guard = ({ component: Component }) => {
  const { user } = useGetter();
  return user ? Component : <Navigate to="/login" replace />;
};
const Container = () => {
  const [user, setUser] = useUser();

  <Context.Provider value={{ user, setUser}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< App />}>
          <Route path="" element={< HomePage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/publicar-empleo" element={<PublicOffer />} />
        <Route path="/kaizen" element={<Guard component={<LoginHome />} />}>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/jobs" element={<Jobs/>}/>
          <Route path="/applied" element={<Applied/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </Context.Provider>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);