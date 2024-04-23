import {useNavigate} from "react-router-dom";
import styles from "./LandingPage.module.css";
import axios from 'axios';
//import {imageImg} from "..//..//assets/Image/imageImg";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link } from 'react-router-dom';

import appFirebase from "../../credenciales";


const auth=getAuth(appFirebase)
const provider = new GoogleAuthProvider();


const LandingPage = () => {
  const navigate = useNavigate();
  

  const handleSignInWithGoogle = async () => {
    try {

      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Aquí puedes realizar acciones adicionales después de iniciar sesión con Google
      navigate('/home'); // Redirigir al usuario a la página de inicio después de iniciar sesión

       // Realizar una solicitud GET al backend para verificar si el usuario ya está registrado
      const response = await axios.get(`http://localhost:3001/user?email=${user.email}`);

    
      if (!response.data.exists) {
        // El usuario no está registrado en el backend, enviar sus datos al backend para registrarlo
        const userData = {
          userName: user.displayName,
          userEmail: user.email
        };
        
        // Realizar una solicitud POST al backend para registrar al usuario
        await axios.post('http://localhost:3001/user', userData);
        console.log("Los datos del usuario se han enviado al backend.");
      } else {
        // El usuario ya está registrado en el backend, no es necesario enviar sus datos nuevamente
        console.log("El usuario ya está registrado en el backend.");
      }

    } catch (error) {
      console.error(error);
      // Manejar errores
    }
  };

  return (
    <div className={styles.landingPageContainer}>
      {/* Overlay negro transparente */}
      <div className={styles.landingPageOverlay}></div>

      {/* Contenido */}
      <div className={styles.content}>
        <h1>Bienvenido a tu Futuro Hogar</h1>
        <Link to="/home" className={styles.button}>Iniciar como Invitado</Link>
        <div className={styles.textContainer }>
        <p>Registro de Usuario:</p>
        </div>
        <button onClick={handleSignInWithGoogle}>Iniciar sesión con Google </button>
      </div>
    </div>
  );
};

export default LandingPage;


/*
return (
  <div>
    <div className={Styles.landingPageBackground} style={{ backgroundImage: `url(${landingPageImage})` }}>
      <div className={Styles.pagDiv}> 
        <div className={Styles.imgs}>
          <img className={Styles.startPag2} src={imageImg.LOGO} alt="" />
          <button className={Styles.startPag} onClick={()=>navigate('/home')}>
            <img src={imageImg.loanding} alt="" />
            <span>ENTRAR</span>
          </button>
   
        </div>
      </div>
    </div>
  </div>
);
}*/

// const LandingPage = () => {

//   const navigate = useNavigate()
  
//     return (
//       <div>
        
//         <div className={Styles.landingPageBackground}>
//         <div className={Styles.pagDiv}> 
            
//             <div className={Styles.imgs}>
              
//                 <img className={Styles.startPag2} src={imageImg.LOGO} alt="" />
//                 {<img className={Styles.startPag} type='button' onClick={()=>navigate('/home')} src={imageImg.loanding} alt="" />}<span>ENTRAR</span>
//             </div>           
               
//         </div>
//         </div>
//       </div>
//     )
//   }
  
//   export default LandingPage;