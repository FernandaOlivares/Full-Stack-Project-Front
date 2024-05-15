/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPropertyById, resetProperty } from '../../redux/actions/index.jsx';
import { formatPrice } from '../../utils/priceFormat.js';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter.js';
import Header from '../../components/Header/Header.jsx';
import ReviewCards from '../../components/ReviewCards/ReviewCards.jsx';
import searchIcon from '../../assets/icons/search.png';
import locationIcon from '../../assets/icons/location.png';
import priceIcon from '../../assets/icons/price.png';
import greyLineIcon from '../../assets/icons/greyLine.png';
import parkingIcon from '../../assets/icons/parking.png';
import storageIcon from '../../assets/icons/storage.png';
import swimmingPoolIcon from '../../assets/icons/swimmingPool.png';
import ImagesSlider from '../../components/ImagesSlider/ImagesSlider.jsx';
import ReviewForm from '../../components/ReviewForm/ReviewForm.jsx';
import styles from './Detail.module.css'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'// el wallet es lo que comienza a ser el boton de pagar con mercado pago 


function Detail() {
  const dispatch = useDispatch();
  initMercadoPago('TEST-8d26883a-9e18-4090-8719-2ad0412bee84',{locale:"es-MX"});


  const propertyDetail = useSelector((state) => state.propertyById);
  const propertyImages = useSelector((state) => state.propertyById?.imageDefault);
  
  const { title, type, category, zone, price, bedrooms, bathrooms, parking, storage, swimmingPool, description } = propertyDetail;
  const { id } = useParams();

  const userLogged = localStorage.getItem('userEmail');
  
  const [isLoading, setIsLoading] = useState(true);
  const [isPopupOpenImage, setIsPopupOpenImage] = useState(false);
  const [isPopupOpenReview, setIsPopupOpenReview] = useState(false);

  const formattedPrice = formatPrice(price);
  const typeCapitalize = capitalizeFirstLetter(type);
  const categoryCapitalize = capitalizeFirstLetter(category);
  const swimmingPoolCapitalize = capitalizeFirstLetter(swimmingPool);

  useEffect(() => {
    dispatch(getPropertyById(id)).then(() => {
      setIsLoading(false);
    });
    return () => {
      dispatch(resetProperty());
    };
  }, [dispatch, id]);

  const openImagePopup = () => {
    setIsPopupOpenImage(true);
  };
  
  const openReviewPopup = () => {
    setIsPopupOpenReview(true);
  };
  

  const closePopup = () => {
    setIsPopupOpenImage(false);
    setIsPopupOpenReview(false);
  };


  const handleReservation = async () => {
     // Opcional: Si quieres mostrar un indicador de carga mientras se realiza la solicitud
    try {
      const BASE_URL = import.meta.env.VITE_ENV === 'production'
      ? import.meta.env.VITE_BACKEND_URL_PRODUCTION
      : import.meta.env.VITE_BACKEND_URL_LOCAL;




      // Realiza una solicitud HTTP PUT al endpoint correspondiente en tu backend
      const userEmail=localStorage.getItem('userEmail')
      const name=localStorage.getItem("name")
      console.log(userEmail);
      const response = await axios.put(`${BASE_URL}/update/${id}`);
      const email = await axios.post(`${BASE_URL}/booking`, {destinatario:userEmail,
      propiedad: id, name: name 
    });
      console.log(response.data); // Imprime la respuesta del servidor en la consola
      // Aquí puedes agregar cualquier lógica adicional, como mostrar un mensaje de éxito al usuario
    } catch (error) {
      console.log('Error updating property:', error);
      // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
    }
     // Opcional: Si utilizaste setIsLoading(true) anteriormente
  };

   const buildApiUrl = (path) => {
   
     
    const BASE_URL = import.meta.env.VITE_ENV === 'production'
    ? import.meta.env.VITE_BACKEND_URL_PRODUCTION
    : import.meta.env.VITE_BACKEND_URL_LOCAL;

    return `${BASE_URL}${path}`;
    };






  const[preferenceId,setPreferenceId]=useState(null)
  

  const createPreference=async()=>{
    try {
      const userEmail=localStorage.getItem('userEmail')
      const url=buildApiUrl(`/createPreference`)   
      const response=await axios.post(url,{
        title:`${title}-${propertyDetail.id}-${userEmail}`,
        type,
        category,
        price,
        quantity:'1'
        
      })

      const {id}=response.data;
      return id;
      
    } catch (error) {
      console.log(error);
    }
  }


  const handleBuy=async()=>{
    const idMercadopago=await createPreference();
    if(idMercadopago){
      setPreferenceId(idMercadopago)
    }
  }


  if (isLoading) {
    return <div>Loading...</div>;
  }




    return (
    <>
      <div className={styles.detailContainer}>
        <Header/>
        <div className={styles.picturesContainer}>
          <div className={styles.titleContainer}><h2>{title}</h2></div>
          <div className= {styles.principalPicContainer}>
          <img
              className={styles.imageContainer}
              onClick={openImagePopup}
              src={propertyImages && propertyImages[0]}
              alt={`Picture not found`}
          />
          </div>
        <div className={styles.secondaryPicsContainer}>
          {propertyImages && propertyImages.slice(1).map((image, index) => (
                <img
                  onClick={openImagePopup}
                  key={index}
                  src={image ? image : 'Picture not found'}
                  alt='Picture not found'
                />
            ))}
        </div>
        </div>
        {isPopupOpenImage && (
            <div className={styles.popupContainer}>
              <ImagesSlider images={propertyImages} />
              <button className={styles.closeButton} onClick={closePopup}>Cerrar</button>
            </div>
          )}
        <div>
        <div className={styles.principalInfoContainer}>
              <div className={styles.iconContainer}>
                <img src={searchIcon} className={styles.searchIcon} alt="searchIcon" />
                <img src={locationIcon} className={styles.locationIcon} alt="locationIcon" />
                <img src={priceIcon} className={styles.priceIcon} alt="priceIcon" />
              </div>
              <div className={styles.textContainer}>
                <p className={styles.line1}>{categoryCapitalize} | {typeCapitalize}</p>
                <p className={styles.line2}>{zone}</p>
                <p className={styles.line3}>{formattedPrice} {category === 'Arriendo' ? 'mensual' : null}</p>
              </div>
              <div className={styles.imgLineContainer}>
                <img src={greyLineIcon} className={styles.imageLine1} alt="imageLine1" />
                <img src={greyLineIcon} className={styles.imageLine2} alt="imageLine1" />
                <img src={greyLineIcon} className={styles.imageLine3} alt="imageLine1" />
              </div>
          </div>
          <div className={styles.detailTextContainer}>
            <h3>Detalle Propiedad:</h3>
              <div className={styles.roomsContainer}>
                <p className={styles.lineParking}>Dormitorios: {bedrooms}</p>
                <p className={styles.lineStorage}>Baños: {bathrooms}</p>
              </div>
          <div className={styles.secondaryInfoContainer}>
              <div className={styles.textContainer}>
                <p className={styles.lineParking}>Estacionamientos: {parking}</p>
                <p className={styles.lineStorage}>Bodegas: {storage}</p>
                <p className={styles.lineSwimmingPool}>Piscina: {swimmingPoolCapitalize}</p>
              </div>
          </div>
          </div>
        </div>
        <div>
        <div className={styles.descriptionContainer}>
          <div className={styles.textDescriptionContainer}>
        <h3>Descripción:</h3>
          {description}
          </div>
          </div>
          <div>
          <button className={styles.button} onClick={()=>{
            setIsLoading(true)
            handleReservation()
            handleBuy()
            setIsLoading(false); 
            }} disabled={isLoading}>
            Reservar Propiedad

          </button>
          

          {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }}  />}

          </div>
          <div>
          <button 
            className={`${styles.button} ${userLogged ? styles.active : styles.disabled}`}
            onClick={openReviewPopup} 
            disabled={!userLogged || isLoading}
          >
            Publicar Reseña
          </button>
          {!userLogged && (
          <p>*Solo usuarios registrados pueden publicar reseñas</p>
          )}
          {isPopupOpenReview && (
            <div className={styles.popupContainer}>
              <ReviewForm propertyId={id} onClose={closePopup}/>
              <button className={styles.closeButton} onClick={closePopup}>Cerrar</button>
            </div>
          )}
          </div>
          </div>
          <div>
            <h1>Reviews:</h1>
            <ReviewCards/>
          </div>
      </div>
    </>
    )
  }
  
  export default Detail;