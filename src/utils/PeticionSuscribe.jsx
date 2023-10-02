import axios from 'axios';

const DB = 'http://localhost:3001/mails';

export const peticionSuscribe = async ({ gmail }) => {
    const isValidEmail = (gmail) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailRegex.test(gmail);
    };
  
    if (!isValidEmail(gmail)) {
      console.log('Email inválido:', gmail);
      return false; // Retorna false si el email no es válido
    }
  
    try {
      await axios.post(DB, { gmail }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Suscripción realizada correctamente!');
      return true; // Retorna true en caso de éxito
    } catch (error) {
      console.log('***ERRORR***', error);
      return false; // Retorna false en caso de error
    }
  };