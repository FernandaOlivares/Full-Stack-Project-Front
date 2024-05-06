import { Link } from 'react-router-dom';
import logo from '../../../assets/logoPyd.jpg';
import appFirebase from '../../../credenciales.js';
import { getAuth,signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styles from './AdminHeader.module.css';

function AdminHeader() {

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
      <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <Link to="/home"><img src={logo} alt="logo" className={styles.logo}/></Link>
      </div>
      <div className={styles.navContainer}>
        {/*<Link className={styles.homeButton} to= '/home'> | Home | </Link>*/}
        <Link className={styles.administrarButton} to= '/admin/dashboard'> | Administrar | </Link>
        <Link className={styles.publicarButton} to= '/create'> | Publicar | </Link>
        <button onClick={handleSignOut}>Log Out</button>
      </div>
    </header>
    )
  }
  
  export default AdminHeader;

  