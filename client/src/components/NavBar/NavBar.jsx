import {Link} from 'react-router-dom';
import styles from './NavBar.module.css';
import logoPyd from '../../assets/logoPyd.jpg';

function NavBar() {

    return (
      <>
        <div className={styles.navBarContainer}>
        <img src={logoPyd} alt="logoPyd" className={styles.logoPyd} />
        <Link className={styles.homeButton} to= '/home'>Home</Link>
        <Link className={styles.publicarButton} to= '/create'>Publicar Propiedad</Link>
        </div>
      </>
    )
  }
  
  export default NavBar;
  