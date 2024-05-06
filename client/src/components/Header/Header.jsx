import { Link } from 'react-router-dom';
import logo from '../../assets/logoPyd.jpg';
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

  const userEmail=localStorage.getItem('userEmail')

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <Link to="/home"><img src={logo} alt="logoPyd" className={styles.logo} /></Link>
        </div>
        <div className={styles.navContainer}>
          <Link className={styles.homeButton} to= '/home'>| Inicio |</Link>
          <div className={styles.userEmailContainer}>
            {userEmail ? (
              <>
                <Link className={styles.miPerfilButton} to= '/user/profile'>| Mi Perfil | </Link>
                <Link className={styles.emailButton} to='/user/profile'>| {userEmail} |</Link>
              </>
            ) : (
              <Link className={styles.logInButton} to='/'>Log In</Link>
            )}
            {userEmail && (
              <button onClick={handleSignOut}>Log Out</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}  
  
  export default Header;
  