import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import UploadWidget from '../UploadWidget/UploadWidget.jsx';
import UserEditedAlert from '../Alerts/UserEditedAlert.jsx';
import ErrorUserEditedAlert from '../Alerts/ErrorUserEditedAlert.jsx';
import { getUserInfo } from '../../redux/actions/index.jsx'
import { editUserInfo } from '../../redux/actions/index.jsx'

import styles from './UserEditProfileForm.module.css';
import profilePicture from '../../assets/icons/profilePicture.png'
import { capitalizeSentences } from '../../utils/stringUtils.js'

function UserEditProfileForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const userInfo = user.user;
  const userEmailLogged = localStorage.getItem('userEmail');


  const [input, setInput] = useState({
    id: userInfo.id,
    name: '',
    imageDefault: [],
  });

  const [error, setError] = useState({
    name: '',
  });

const validateFormInput = (userInfo) => {
  const errors = {};

  if (!userInfo.name || !/^[A-Za-zÀ-ÖØ-öø-Ÿ\s'-]+(?<!-[-])$/.test(userInfo.name.trim()) || userInfo.name.length > 50) {
    errors.name = '*Carácter inválido, max. 50';
}

  setError(errors);

  return Object.keys(errors).length === 0;
}

  useEffect(() => {
    dispatch(getUserInfo(userEmailLogged)).then(() => {
      setIsLoading(false);
    });
  }, [dispatch, userEmailLogged]);

  useEffect(() => {
    if (userInfo && userInfo.name && userInfo.imageDefault) {
      setInput({
        name: userInfo.name,
        imageDefault: userInfo.imageDefault
      });
    }
  }, []);



useEffect(() => {
  if (formSubmitted) {
    navigate('/user/profile');
  }
}, [formSubmitted, navigate]);


const handleImageUpload = (newImageUrl) => {
  setInput((prevInput) => ({
    ...prevInput,
    imageDefault: [newImageUrl],
  }));
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const isValid = validateFormInput(input);
  if (isValid) {
    try {
      await dispatch(editUserInfo(userInfo.id, input));
      UserEditedAlert(input.name);
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error editing user:', error);
      ErrorUserEditedAlert();
    }
  }
};

const renderProfileImage = () => {
  if (input.imageDefault.length > 0) {
    return <img src={input.imageDefault[0]} alt="Profile" className={styles.profileImage} />;
  } else {
    return <img src={profilePicture} alt="Profile" className={styles.profileImage} />;
  }
};

useEffect(() => {
  if (userInfo.imageDefault) {
    setInput(prevInput => ({
      ...prevInput,
      imageDefault: userInfo.imageDefault,
    }));
  }
}, []);

useEffect(() => {
  validateFormInput(input);
}, [input]);

const handleChange = (event) => {
  const { name, value } = event.target;
  let updatedValue = value;
if (['name'].includes(name)) {
    updatedValue = capitalizeSentences(value);
}
  setInput((prevInput) => ({
      ...prevInput,
      [name]: updatedValue,
  }));
  ({ ...input, [name]: updatedValue });
};
    return (
      <>
        <div>
          <div className={styles.profileContainer}>
            <h1>| Editar Mi Perfil |</h1>
            <div >
            {renderProfileImage()}
            <span className={styles.errorMessage}>{error.imageDefault}</span>
            <UploadWidget handleImageUpload={handleImageUpload}/>
            </div>
            <h2>{input.name}</h2>
            <h3>{userInfo.email}</h3>
            <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
            <div className={styles.inputField}>
          <label>Nombre Completo*:
            <div className={styles.inputContainer}>
              <input type='text' name='name' value={input.name || ''} onChange={(e) => handleChange(e)} />
            </div>
            <span className={styles.errorMessage}>{error.name}</span>
          </label>
          </div>
            <div>
            <button 
              type='submit' 
              disabled={Object.keys(error).some(key => error[key] !== '')}
              className={styles.updateButton}
            >Actualizar</button>
            </div>
            </form>
            </div>
            </div>
        </div>
      </>
    )
  }

  
  export default UserEditProfileForm;
