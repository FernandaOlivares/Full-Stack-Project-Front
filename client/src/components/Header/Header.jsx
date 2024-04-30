import { Link } from 'react-router-dom';
import logoPyd from '../../assets/logoPyd.jpg';
import appFirebase from '../../credenciales.js';
import { getAuth,signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {

  const auth =getAuth(appFirebase)
  const navigate =useNavigate()

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('userEmail');
      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

    return (
      <>
        <div className={styles.headerContainer}>
        <Link to="/home"><img src={logoPyd} alt="logoPyd" className={styles.logoPyd} /></Link>
        <Link className={styles.homeButton} to= '/home'>| Home |</Link>
        <Link className={styles.publicarButton} to= '/create'>| Publicar Propiedad | </Link>
        <button onClick={handleSignOut}>Log Out</button>
       
        </div>
      </>
    )
  }
  
  export default Header;
  