import Link from "next/link";
import Image from "next/image";
import nextnap from './nextnap.png';
import saaq from './saaq.png';
import './projets.css'; 
const Projets = () => {
    return (
    <div className='Projets'>
      <h1 className='titre-projet'>Mes Projets</h1>
      
      <ul>
            <li>
              <Link href="/projet1"><Image className='nextnap' src={nextnap} alt="NextNap" width={500} height={350} /></Link>
            </li>
            <li>
              <Link href="/projet2"><Image className='saaq' src={saaq} alt="Saaq" width={500} height={350}/></Link>
            </li>
          
          </ul>
  
          </div>
      
    );
  };
  
  export default Projets;