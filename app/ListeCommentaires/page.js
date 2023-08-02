'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ListeCommentaires.css';

const ListeCommentaires = ({ comments }) => {
    const defaultComments = [
      { name: 'John Doe', message: 'excellent travail' },
      { name: 'Jane Smith', message: 'Good worker' },
      { name: 'Alice Johnson', message: 'perfect !!!' }
    ];
  
    const [allComments, setAllComments] = useState([]);
  
    useEffect(() => {
      setAllComments([...defaultComments, ...comments]);
    }, [comments]);

  
  const [editedComment, setEditedComment] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedMessage, setEditedMessage] = useState('');

  const handleEdit = (index) => {
    const commentToEdit = allComments[index];
    setEditedComment(commentToEdit);
    setEditedName(commentToEdit.name);
    setEditedMessage(commentToEdit.message);
  };

  const handleSaveEdit = (index) => {
    const updatedComments = [...allComments];
    updatedComments[index] = { name: editedName, message: editedMessage };
    setAllComments(updatedComments);
    setEditedComment(null);
    setEditedName('');
    setEditedMessage('');
  };

  const handleCancelEdit = () => {
    setEditedComment(null);
    setEditedName('');
    setEditedMessage('');
  };

  const handleDelete = (index) => {
    const updatedComments = [...allComments];
    updatedComments.splice(index, 1);
    setAllComments(updatedComments);
  };

  return (
    <div>
      <div className='titre-com'>
        <h2>Liste des Commentaires</h2>
      </div>
      <div className="liste-commentaires">
        <table className="commentaires-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Commentaire</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allComments.map((comment, index) => (
              <tr key={index}>
                <td>
                  {editedComment === comment ? (
                    <input
                      type="text"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                    />
                  ) : (
                    comment.name
                  )}
                </td>
                <td>
                  {editedComment === comment ? (
                    <input
                      type="text"
                      value={editedMessage}
                      onChange={(e) => setEditedMessage(e.target.value)}
                    />
                  ) : (
                    comment.message
                  )}
                </td>
                <td>
                  {editedComment === comment ? (
                    <>
                      <button className='save' onClick={() => handleSaveEdit(index)}>Sauvegarder</button>
                      <button className='cancel' onClick={handleCancelEdit}>Quitter</button>
                    </>
                  ) : (
                    <>
                      <button className='edit' onClick={() => handleEdit(index)}>Modifier</button>
                      <button className='delete' onClick={() => handleDelete(index)}>Supprimer</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListeCommentaires;