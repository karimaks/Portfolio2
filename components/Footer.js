'use client'
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import './Footer.css';
import linked from './linked.png';
import github from './github.png';

const Footer = () => {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop >= scrollHeight - windowHeight) {
        setIsScrolledToBottom(true);
      } else {
        setIsScrolledToBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={isScrolledToBottom ? 'footer_transparent' : 'footer'}>
      <div className="image-container">
        <a href="https://www.linkedin.com/in/karim-aksil-267453167/" target="_blank" rel="noopener noreferrer">
          <Image className='linked' src={linked} alt="linkedin" />
        </a>
      </div>
      <div className="image-container">
        <a href="https://github.com/karimaks" target="_blank" rel="noopener noreferrer">
          <Image className='git' src={github} alt="github" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;