/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header.jsx';
import UploadWidget from '../../components/UploadWidget/UploadWidget.jsx';
import UserEditedAlert from '../../components/Alerts/UserEditedAlert.jsx';
import ErrorUserEditedAlert from '../../components/Alerts/ErrorUserEditedAlert.jsx';

import styles from './UserEditProfile.module.css';
import profilePicture from '../../assets/icons/profilePicture.png'
import { capitalizeSentences } from '../../utils/stringUtils.js'


function UserEditProfile() {
    const dispatch = useDispatch();

    return (
      <>
        <div>
          <Header/>
          <div className={styles.profileContainer}>
            <h1>| Editar Mi Perfil |</h1>
            {profilePicture ? (
            <img src={profilePicture} alt="Tu imagen de perfil" className={styles.profileImage} />
              ) : (
                <img src="icono-de-perfil.png" alt="Icono de perfil" className={styles.profileImage} />
              )}
            <h2>Fernanda Olivares{}</h2>
            <h3>folivareslisperguer@gmail.com{}</h3>
            <div>
            <Link to={`/home/`}><button className={styles.editButton}>Actualizar</button></Link>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default UserEditProfile;