import Link from "next/link";
import './Header.css';

const Header = ({ blur }) => {
    return (
       <nav className={blur ? 'blur-header' : ''}>
        <ul>
            <li><Link href='/'>Accueil</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
            <li><Link href='/projets'>Projets</Link></li>
            <li><Link href='/commentaires'>Commentaires</Link></li>
            <li><Link href='/AboutMe'>A propos</Link></li>
        </ul>
       </nav>
    );
}

export default Header;
