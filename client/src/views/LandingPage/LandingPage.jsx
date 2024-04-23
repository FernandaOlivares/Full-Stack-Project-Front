import {useNavigate} from "react-router-dom";
import Styles from "./LandingPage.module.css";
//import Footer from "..//../components/Footer/Footer";
import {imageImg} from "..//..//assets/Image/imageImg";
//import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
//import appFirebase from "../../credenciales";
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
//const auth=getAuth(appFirebase)
//const provider = new GoogleAuthProvider();


const LandingPage = () => {
  const navigate = useNavigate();
  

  const handleSignInWithGoogle = async () => {
    try {
  //    const result = await signInWithPopup(auth, provider);
      // Aquí puedes realizar acciones adicionales después de iniciar sesión con Google
      navigate('/home'); // Redirigir al usuario a la página de inicio después de iniciar sesión
    } catch (error) {
      console.error(error);
      // Manejar errores
    }
  };

  return (
    <div>
      <div className={Styles.landingPageBackground}>
        <div className={Styles.pagDiv}> 
          <div className={Styles.imgs}>
            <img className={Styles.startPag2} src={imageImg.LOGO} alt="" />
            <button className={Styles.startPag} onClick={()=>navigate('/home')}>
              <img src={imageImg.loanding} alt="" />
              <span>ENTRAR</span>
            </button>
             <button onClick={handleSignInWithGoogle}>Iniciar sesión con Google </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;