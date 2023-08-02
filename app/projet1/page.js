import Image from "next/image";
import nextnap from '../projets/nextnap.png';
import './projet1.css'

const Projet1 = () => {
    return (
      <div className='body'>
      <div className="project-container">
        <div className="details">
          
          <h1 className='h1'>Next Nap</h1>
          <p>
          NextNap est une plateforme en ligne de location immobilière qui offre une expérience conviviale et intuitive pour les utilisateurs à la recherche de logements à louer. <br />
          Que ce soit pour une courte durée ou un contrat à long terme, NextNap facilite la recherche, la comparaison et la réservation de biens immobiliers de manière efficace et sécurisée.<br />
          Grâce à l'utilisation des technologies <span>Vue.js, CSS, HTML et JavaScript.</span>  
          NextNap propose une interface moderne et réactive, offrant aux utilisateurs une navigation fluide et une expérience utilisateur agréable. <br />
          Les fonctionnalités avancées de recherche permettent aux utilisateurs de filtrer les résultats en fonction de leurs critères spécifiques tels que le lieu, le type de logement, les équipements, le budget, etc.
          .<br /> 
           Avec son design moderne, ses fonctionnalités avancées et son interface utilisateur conviviale, NextNap est l'outil idéal pour trouver votre prochain chez-vous rapidement et en toute simplicité.
          </p>
          
        </div>
        <div className="image-cont">
          <Image className="image" src={nextnap} alt="NextNap" />
        </div>
      </div>
      </div>
  
    );
  };
  
  export default Projet1;
  
  