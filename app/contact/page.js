'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import axios from 'axios';
import './contact.css';


const Contact = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const NomChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value) || value === '') {
      setNom(value);
      setErrors((prevErrors) => ({ ...prevErrors, nom: '' }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nom: 'Le nom ne doit pas contenir de chiffres',
      }));
    }
  };
  
  const PrenomChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value) || value === '') {
      setPrenom(value);
      setErrors((prevErrors) => ({ ...prevErrors, prenom: '' }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        prenom: 'Le prénom ne doit pas contenir de chiffres',
      }));
    }
  };
  

  const EmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    }
  };

  const MessageChange = (e) => {
    setMessage(e.target.value);
    if (errors.message) {
      setErrors((prevErrors) => ({ ...prevErrors, message: '' }));
    }
  };

  const hideSuccessMessage = () => {
    setSuccessMessage('');
  };

  const Submit = async (e) => {
    e.preventDefault();

    // Validation des champs
    let errors = {};
    if (nom.trim().length < 3) {
      errors.nom = 'Le nom doit contenir au moins 3 caractères';
    } else if (!/^[a-zA-Z\s]*$/.test(nom)) {
      errors.nom = 'Le nom ne doit pas contenir de chiffres';
    }
    if (prenom.trim().length < 3) {
      errors.prenom = 'Le prénom doit contenir au moins 3 caractères';
    } else if (!/^[a-zA-Z\s]*$/.test(prenom)) {
      errors.prenom = 'Le prénom ne doit pas contenir de chiffres';
    }
    if (!email.trim()) {
      errors.email = 'Veuillez entrer votre adresse e-mail';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Veuillez entrer une adresse e-mail valide';
    }
    if (message.trim().length < 5) {
      errors.message = 'La description doit contenir au moins 5 caractères';
    }

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post(
          'https://api.sendinblue.com/v3/smtp/email',
          {
            sender: {
              name: nom,
              email: 'karimaks@outlook.com'
            },
            to: [{ email: 'karimaks@outlook.com' }],
            subject: 'Nouveau message de contact',
            htmlContent: `Nom: ${nom}<br/>Prénom: ${prenom}<br/>E-mail: ${email}<br/><br/>Message:<br/>${message}`
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'api-key':
                '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' // clé API Sendinblue
            }
          }
        );

        console.log('Le message a été envoyé avec succès');
        setNom('');
        setPrenom('');
        setEmail('');
        setMessage('');
        setErrors({});
        setSuccessMessage('Le message a été envoyé avec succès !');
      } catch (error) {
        console.error('Une erreur s\'est produite lors de l\'envoi du message:', error);
      }
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className='container-contact'>
      <h1 className='titre-contact'>Contactez moi</h1>
      <form onSubmit={Submit}>
        <div className='form-group'>
          <label>Nom :</label>
          <input type='text' value={nom} onChange={NomChange} />
          {errors.nom && <span className='error'>{errors.nom}</span>}
        </div>
        <div className='form-group'>
          <label>Prénom :</label>
          <input type='text' value={prenom} onChange={PrenomChange} />
          {errors.prenom && <span className='error'>{errors.prenom}</span>}
        </div>
        <div className='form-group'>
          <label>Adresse e-mail :</label>
          <input type='email' value={email} onChange={EmailChange} />
          {errors.email && <span className='error'>{errors.email}</span>}
        </div>
        <div className='form-group'>
          <label>Message :</label>
          <textarea value={message} onChange={MessageChange} />
          {errors.message && <span className='error'>{errors.message}</span>}
        </div>
        <button className='button-contact' type='submit'>
          Envoyer
        </button>
      </form>
      {successMessage && (
        <div className='popup'>
          <div className='popup-content'>
            <span className='close' onClick={hideSuccessMessage}>
              &times;
            </span>
            {successMessage}
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;

