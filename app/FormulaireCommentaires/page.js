import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import axios from 'axios';
import './FormulairesCommentaires.css';

const FormulaireCommentaires = ({ addComment }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation des champs
    let isValid = true;
    if (name.trim() === '') {
      setNameError('Veuillez entrer votre nom');
      isValid = false;
    } else if (name.trim().length < 3) {
      setNameError('Le nom doit contenir au moins 3 caractères');
      isValid = false;
    } else if (!/^[a-zA-Z\s]*$/.test(name)) {
      setNameError('Le nom ne doit pas contenir de chiffres');
      isValid = false;
    } else {
      setNameError('');
    }

    if (message.trim() === '') {
      setMessageError('Veuillez entrer votre message');
      isValid = false;
    } else if (message.trim().length < 5) {
      setMessageError('Le message doit contenir au moins 5 caractères');
      isValid = false;
    } else {
      setMessageError('');
    }

    if (isValid) {
      addComment({ name, message });
      setName('');
      setMessage('');
      setShowSuccessPopup(true);

      // Cacher le popup après 5 secondes
      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 5000);
    }
  };

  return (
    <div>
      <div className='title'>
        <h2>Ajouter un témoignage</h2>
      </div>
      <div className='div'>
        <form onSubmit={handleSubmit}>
          <input
            className={`input1 ${nameError ? 'error-border' : ''}`}
            type="text"
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <span className="error">{nameError}</span>}

          <textarea
            className={`textarea1 ${messageError ? 'error-border' : ''}`}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {messageError && <span className="error">{messageError}</span>}

          <button className='btn-submit1' type="submit">Ajouter</button>
        </form>
      </div>

      {/* Popup de succès */}
      {showSuccessPopup && (
        <div className="success-popup">
          Commentaire ajouté avec succès !
        </div>
      )}
    </div>
  );
};

export default FormulaireCommentaires;
