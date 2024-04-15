import {Link} from 'react-router-dom';
import logoPyd from '../../assets/logoPyd.jpg';

import styles from './Header.module.css';

function Header() {

    return (
      <>
        <div className={styles.headerContainer}>
        <img src={logoPyd} alt="logoPyd" className={styles.logoPyd} />
        <Link className={styles.homeButton} to= '/home'>| Home |</Link>
        <Link className={styles.publicarButton} to= '/create'>| Publicar Propiedad | </Link>
        </div>
      </>
    )
  }
  
  export default Header;
  