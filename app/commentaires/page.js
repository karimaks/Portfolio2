'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import axios from 'axios';
import './commentaires.css';

import FormulaireCommentaires from '../FormulaireCommentaires/page.js';
 import ListeCommentaires from '../ListeCommentaires/page.js';


const Commentaires = () => {
  const [comments, setComments] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="Commentaires">
      <ListeCommentaires className="liste" comments={comments} />

      {showForm ? (
        <FormulaireCommentaires className="formulaire" addComment={addComment} />
      ) : (
        <button className="button-com" onClick={toggleForm}>
          Ajouter Un Témoignage
        </button>
      )}
    </div>
  );
};

export default Commentaires;
