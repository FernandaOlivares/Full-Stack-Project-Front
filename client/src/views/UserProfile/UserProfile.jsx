/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header.jsx';
import { getUserInfo } from '../../redux/actions/index.jsx'

import styles from './UserProfile.module.css';
import profilePicture from '../../assets/icons/profilePicture.png'


function UserProfile() {
  const dispatch = useDispatch();
  
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userProfilePicture, setUserProfilePicture] = useState('');

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');

    dispatch(getUserInfo(userEmail))
      .then(response => {
        const userData = response.payload.user;
        setUserName(userData.name);
        setUserEmail(userData.email);
        const imageDefault = userData.imageDefault || [];
        setUserProfilePicture(imageDefault.length > 0 ? imageDefault[0] : profilePicture);
      })
      .catch(error => console.error('Error:', error));
  }, [dispatch]);

  

  return (
    <>
      <div>
        <Header/>
        <div className={styles.profileContainer}>
          <h1>| Mi Perfil |</h1>
          <img src={userProfilePicture} alt="Foto de perfil" className={styles.profileImage} />
          <h2>{userName}</h2>
          <h3>{userEmail}</h3>
          <div>
            <Link to={`/user/profile/edit`}><button className={styles.editButton}>Editar Perfil</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;


/*useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    dispatch(getUserInfo(userEmail))
    .then(() => {
      setIsLoading(false);
    });
  }, [dispatch, userEmail]);*/

  //const userInfo = useSelector(state => state.userInfo);
  //console.log('USER INFO:', userInfo);
  //const { name, email, imageDefault } = userInfo;
  //console.log('NAME:', name);
  //const [isLoading, setIsLoading] = useState(true);