import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Confirmation = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState('Confermando la registrazione...');

  useEffect(() => {
    const confirmRegistration = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/auth/confirmation/${token}`);
        setMessage(res.data.message || 'Registrazione confermata con successo.');
        
        // Reindirizza l'utente alla pagina di audit dopo 3 secondi
        setTimeout(() => {
          navigate('/audit');
        }, 3000);
      } catch (err) {
        setMessage('Errore durante la conferma della registrazione.');
      }
    };

    confirmRegistration();
  }, [token, navigate]);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Confirmation;
