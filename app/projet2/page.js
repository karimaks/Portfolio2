import Image from "next/image";
import saaq from '../projets/saaq.png';
import './projet2.css'

const Projet2 = () => {
    return (
      <div className='body2'>
      <div className="project-container2">
        <div className="details2">
          
          <h1 className='h2'>SAAQ</h1>
          <p>
         
  L'application SAAQ est une plateforme interactive développer avec la technologie <span> C#. </span>  <br /> Conçue pour aider les utilisateurs à se préparer au test de conduite de la Société de l'assurance automobile du Québec (SAAQ).<br /> Elle propose un quiz de pratique avec des questions sur les règles de conduite et les panneaux de signalisation, <br />ainsi qu'une fonctionnalité pour prendre rendez-vous pour le test réel. <br />L'application offre une expérience conviviale et pratique pour améliorer les connaissances en vue de réussir le test de conduite
           
           
          </p>
          
        </div>
        <div className="image-cont2">
        <Image className='image2' src={saaq} alt="Saaq" />
        </div>
      </div>
      </div>
    );
  };
  
  export default Projet2;