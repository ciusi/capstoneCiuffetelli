import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import zxcvbn from 'zxcvbn';

function Register() {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    professione: '',
    sitoWebAziendale: '',
    email: '',
    password: '',
    privacyChecked: false,
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const passwordStrength = zxcvbn(formData.password);
    if (passwordStrength.score < 3) {
      setError('La password è troppo debole. Usa una combinazione di lettere, numeri e simboli.');
      return;
    }

    if (!formData.privacyChecked) {
      setError('Devi accettare la politica sulla privacy.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      localStorage.setItem('token', response.data.token);
      alert('Registrazione avvenuta con successo! Controlla la tua email per la conferma.');
      navigate('/Welcome'); 
    } catch (err) {
      setError(err.response?.data?.msg || 'Errore durante la registrazione');
    }
  };

  return (
    <div className="register-background">
      <div className="register-container">
        <img src="/logoseoboost.png" alt="SeoBoost Logo" />
        <h2>Benvenuto su SeoBoost</h2>
        <p>Registrati per eseguire SEO audit gratuite e migliorare le performance del tuo sito web.</p>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500">{error}</p>}
          <div className="text-left">
            <label className="block text-gray-700">Nome</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="text-left">
            <label className="block text-gray-700">Cognome</label>
            <input
              type="text"
              name="cognome"
              value={formData.cognome}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="text-left">
            <label className="block text-gray-700">Professione</label>
            <input
              type="text"
              name="professione"
              value={formData.professione}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="text-left">
            <label className="block text-gray-700">Sito Web Aziendale</label>
            <input
              type="text"
              name="sitoWebAziendale"
              value={formData.sitoWebAziendale}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="text-left">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="text-left">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-checkbox-container">
            <input
              type="checkbox"
              name="privacyChecked"
              checked={formData.privacyChecked}
              onChange={handleChange}
              className="form-checkbox"
            />
            <label className="form-checkbox-label">
              Accetto la <Link to="/privacy" className="form-link">politica sulla privacy</Link> e i <Link to="/cookie" className="form-link">cookie</Link>
            </label>
          </div>
          <button type="submit" className="form-button">
            Registrati
          </button>
          <div className="mt-4">
            <Link to="/login" className="form-link">
              Hai già un account? Accedi
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
