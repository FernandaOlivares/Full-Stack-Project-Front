/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom";
import styles from "./LandingPage.module.css";
import axios from 'axios';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link } from 'react-router-dom';

import appFirebase from "../../credenciales";
import { getUserInfo } from '../../redux/actions/index.jsx';


const auth=getAuth(appFirebase)
const provider = new GoogleAuthProvider();


const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      //localStorage.setItem('userEmail', user.email); CONFLICT

      localStorage.setItem('userEmail',user.email)
      localStorage.setItem("name", user.displayName)
      console.log(user.email, user.displayName);


      const BASE_URL = import.meta.env.VITE_ENV === 'production'
      ? import.meta.env.VITE_BACKEND_URL_PRODUCTION
      : import.meta.env.VITE_BACKEND_URL_LOCAL;

      const response = await axios.get(`${BASE_URL}/user?email=${user.email}`);

      if (!response.data.exists) {
        // El usuario no está registrado en el backend, enviar sus datos al backend para registrarlo
        const userData = {
          name: user.displayName,
          email: user.email
        };
        // Realizar una solicitud POST al backend para registrar al usuario
        await axios.post(`${BASE_URL}/user`, userData);
        console.log("Los datos del usuario se han enviado al backend.");
      } else {
        // El usuario ya está registrado en el backend, no es necesario enviar sus datos nuevamente
        console.log("El usuario ya está registrado en el backend.");
      }
      //Se gurda la info del usuario en el estado global userInfo y en local storage userInfo, para luego usarla como userInfo
      await dispatch(getUserInfo(user.email));
      const userInfo = JSON.parse(localStorage.getItem('user'));

      if (userInfo && userInfo.user.role) {
        if (userInfo.user.role === 'user') {
          navigate('/home');
        } else if (userInfo.user.role === 'admin') {
          navigate('/admin/dashboard');
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
 
  return (
    <div className={styles.landingPageContainer}>
      <div className={styles.landingPageOverlay}></div>
      <div className={styles.content}>
        <div>
        <h1>Bienvenido a Propiedades & Diseño</h1>
        <Link to="/home" className={styles.button}>Iniciar como Invitado</Link>
        </div>
        <div>-</div>
        <div className={styles.textContainer }>
        <p>Registro de Usuario:</p>
        <button className={styles.button} onClick={handleSignInWithGoogle}>Iniciar Sesión con Google </button>
        </div>
        </div>
    </div>
  );
};

export default LandingPage;
