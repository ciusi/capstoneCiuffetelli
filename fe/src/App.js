import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword'; 
import Confirmation from './components/Confirmation';
import Audit from './components/Audit';
import PrivateRoute from './components/PrivateRoute';
import WelcomePage from './components/WelcomePage';
import CoreVitalsPage from './components/CoreVitalsPage'; 
import SeoInPage from './components/SeoInPage'; 
import SeoOffPage from './components/SeoOffPage'; 
import BlogPage from './components/BlogPage'; 
import BlogPost from './components/BlogPost'; 
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} /> 
        <Route path="/confirmation/:token" element={<Confirmation />} />
        <Route path="/audit" element={<PrivateRoute><Audit /></PrivateRoute>} />
        <Route path="/welcome" element={<PrivateRoute><WelcomePage /></PrivateRoute>} />
        <Route path="/core-vitals" element={<PrivateRoute><CoreVitalsPage /></PrivateRoute>} /> 
        <Route path="/seo-in" element={<PrivateRoute><SeoInPage /></PrivateRoute>} /> 
        <Route path="/seo-off" element={<PrivateRoute><SeoOffPage /></PrivateRoute>} /> 
        <Route path="/footer" element={<PrivateRoute><Footer /> </PrivateRoute>} /> 
        <Route path="/blog" element={<PrivateRoute><BlogPage /></PrivateRoute>} /> 
        <Route path="/blog/:id" element={<PrivateRoute><BlogPost /></PrivateRoute>} /> 
        <Route path="*" element={<Login />} /> 
      </Routes>
    </Router>
  );
}

export default App;
