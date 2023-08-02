'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import maPhoto from './profile.png';
import './Home.css'; 
// import cvFile from '../public/cv.pdf';

const Page = () => {
  const [name, setName] = useState('');
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const fullName = 'Aksil Karim';
    let currentName = '';
    let index = 0;
    let intervalId;

    const animateName = () => {
      currentName += fullName[index];
      setName(currentName);
      index++;

      if (index === fullName.length) {
        clearInterval(intervalId);
        setTimeout(() => {
          setFadeIn(false);
          setTimeout(() => {
            setFadeIn(true);
            currentName = '';
            index = 0;
            intervalId = setInterval(animateName, 100);
          }, 1000);
        }, 1000);
      }
    };

    intervalId = setInterval(animateName, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="container">
      <div className='imginfo'>
        <div className="infos">
          <h1>
            Hi, I'm{' '}
            <span className={fadeIn ? 'fade-in' : 'fade-out'}>
              {name}
            </span>
          </h1>
          <p className="break-line">
            Bienvenue sur mon portfolio en ligne ! <br></br>Je suis un développeur web passionné et créatif.
            Je me spécialise dans la création d'applications web modernes et conviviales.<br></br>
            Avec une solide expérience dans le développement frontend et backend,<br></br>
            ainsi qu'une expertise dans les technologies telles que HTML, CSS, JavaScript et
            les frameworks populaires tels que React et Node.js,
            je suis prêt à relever tous les défis pour créer des expériences web exceptionnelles.
          </p>
          <div className="button-container">
            <Link href="/AboutMe">
              
                <button className='button_about'>En savoir plus</button>
              
            </Link>

             
              {/* <a href={cvFile} download>
                <button className='button_cv'>Télécharger CV</button>
              </a> */}
            
          </div>
        </div>

        <div className="img-container">
        <Image className='img' src={maPhoto} alt="aksil karim" />
        </div>

      </div>
    </div>
  );
};

export default Page;
