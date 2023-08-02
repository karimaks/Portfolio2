'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import axios from 'axios';
import './FormulairesCommentaires.css';

const FormulaireCommentaires = ({ addComment }) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name.trim() !== '' && message.trim() !== '') {
        addComment({ name, message });
        setName('');
        setMessage('');
      }
    };
  
    return (
      <div>
      <div className='title'>
      <h2>Ajouter un témoignage</h2>
      </div>
      <div className='div'>
        <form onSubmit={handleSubmit}>
          <input className="input1"
            type="text"
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea className="textarea1"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button className='btn-submit1' type="submit">Ajouter</button>
        </form>
      </div>
      </div>
    );
  };
  
  export default FormulaireCommentaires;