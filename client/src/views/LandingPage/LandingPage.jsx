import {useNavigate} from "react-router-dom";
import Styles from "./LandingPage.module.css";
//import Footer from "..//../components/Footer/Footer";
import {imageImg} from "..//..//assets/Image/imageImg";


const LandingPage = () => {
  const navigate = useNavigate()
  
    return (
      <div>
        
        <div className={Styles.landingPageBackground}>
        <div className={Styles.pagDiv}> 
            
            <div className={Styles.imgs}>
              
                <img className={Styles.startPag2} src={imageImg.LOGO} alt="" />
                {<img className={Styles.startPag} type='button' onClick={()=>navigate('/home')} src={imageImg.loanding} alt="" />}
            </div>           
               
        </div>
        </div>
      </div>
    )
  }
  
  export default LandingPage;