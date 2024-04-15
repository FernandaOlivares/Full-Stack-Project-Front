import {Link} from 'react-router-dom';

import styles from './NavBar.module.css';
import logoPyd from '../../assets/logoPyd.jpg';

function AdminNavBar() {

    return (
      <>
        <div className={styles.adminNavBarContainer}>
        <img src={logoPyd} alt="logoPyd" className={styles.logoPyd} />
        <Link className={styles.homeButton} to= '/home'>Home</Link>
        <Link className={styles.publicarButton} to= '/create'>Publicar Propiedad</Link>
        </div>
      </>
    )
  }
  
  export default AdminNavBar;