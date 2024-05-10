import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/logoPyd.jpg';
import appFirebase from '../../credenciales.js';
import { getAuth,signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from '../../redux/actions/index.jsx'
import styles from './Header.module.css';

function Header() {

  const auth = getAuth(appFirebase)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem('user'));
  const userInfo = user && user.user ? user.user : null;
  const userEmail=localStorage.getItem('userEmail')

  useEffect(() => {
    dispatch(getUserInfo(userEmail)).then(() => {
      setIsLoading(false);
    });
  }, [dispatch, userEmail]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('user');
      localStorage.removeItem('userEmail');
      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };
  
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <Link to="/"><img src={logo} alt="logoPyd" className={styles.logo} /></Link>
        </div>
        <div className={styles.navContainer}>
          <Link className={styles.homeButton} to= '/home'>| Inicio |</Link>
          {userInfo && userInfo.role === "admin" && (
          <Link className={styles.homeButton} to="/admin/dashboard">| Administrar |</Link>
          )}
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
  