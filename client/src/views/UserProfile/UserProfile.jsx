import Header from '../../components/Header/Header.jsx';

import styles from './UserProfile.module.css';
import profilePicture from '../../assets/icons/profilePicture.png'
import { Link } from 'react-router-dom';

function UserProfile() {

    return (
      <>
        <div>
          <Header/>
          <div className={styles.profileContainer}>
            <h1>| Mi Perfil |</h1>
            {profilePicture ? (
            <img src={profilePicture} alt="Tu imagen de perfil" className={styles.profileImage} />
              ) : (
                <img src="icono-de-perfil.png" alt="Icono de perfil" className={styles.profileImage} />
              )}
            <h2>Fernanda Olivares{}</h2>
            <h3>folivareslisperguer@gmail.com{}</h3>
            <div>
            <Link to={`/user/profile/edit`}><button className={styles.editButton}>Editar Perfil</button></Link>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default UserProfile;