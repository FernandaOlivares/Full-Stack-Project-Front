/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPropertyById } from '../../redux/actions/index.jsx';
import { formatPrice } from '../../utils/priceFormat.js';
import Header from '../../components/Header/Header.jsx';
import NavBar from '../../components/NavBar/NavBar.jsx';
import searchIcon from '../../assets/icons/search.png';
import locationIcon from '../../assets/icons/location.png';
import priceIcon from '../../assets/icons/price.png';
import greyLineIcon from '../../assets/icons/greyLine.png';
//import { updatePropertyStatus } from '../../redux/actions/index.jsx';
import parkingIcon from '../../assets/icons/parking.png';
import storageIcon from '../../assets/icons/storage.png';
import swimmingPoolIcon from '../../assets/icons/swimmingPool.png';
import styles from './Detail.module.css'

function Detail() {
  const dispatch = useDispatch();
  const {id} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const propertyDetail = useSelector((state) => state.propertyById);
  useEffect(() => {
    dispatch(getPropertyById(id)).then(() => {
      setIsLoading(false);
    });
  }, [dispatch, id]);

  const formattedPrice = formatPrice(propertyDetail.price);

  const handleReservation = async () => {
    setIsLoading(true); // Opcional: Si quieres mostrar un indicador de carga mientras se realiza la solicitud
    try {
      // Realiza una solicitud HTTP PUT al endpoint correspondiente en tu backend
      const response = await axios.put(`http://localhost:3001/update/${id}`);
      const email = await axios.post(`http://localhost:3001/booking`, {destinatario: "victorseva123@gmail.com",
      propiedad: id
    });
      console.log(response.data); // Imprime la respuesta del servidor en la consola
      // Aquí puedes agregar cualquier lógica adicional, como mostrar un mensaje de éxito al usuario
    } catch (error) {
      console.error('Error updating property:', error);
      // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
    }
    setIsLoading(false); // Opcional: Si utilizaste setIsLoading(true) anteriormente
  };

    return (
    <>
      <div className={styles.detailContainer}>
        <Header/>
        <NavBar/>
        <div className={styles.picturesContainer}>
          <div className={styles.titleContainer}><h2>{propertyDetail.title}</h2></div>
          <div className= {styles.principalPicContainer}>
          <img className={styles.imageContainer}
                src={propertyDetail.imageDefault ? propertyDetail.imageDefault :`Picture not found`}
                alt={`Picture not found`}
      />
          </div>
          <div className={styles.secondaryPicsContainer}>
            <img
                src={propertyDetail.imageDefault ? propertyDetail.imageDefault :`Picture not found`}
                alt={`Picture not found`}
            />
            <img
                src={propertyDetail.imageDefault ? propertyDetail.imageDefault :`Picture not found`}
                alt={`Picture not found`}

            />
            <img
                src={propertyDetail.imageDefault ? propertyDetail.imageDefault :`Picture not found`}
                alt={`Picture not found`}

            />
            <img
                src={propertyDetail.imageDefault ? propertyDetail.imageDefault :`Picture not found`}
                alt={`Picture not found`}
            />
        </div>
        </div>
        <div>
          <div className={styles.principalInfoContainer}>
            <div className={styles.iconContainer}>
              <img src={searchIcon} className={styles.searchIcon} alt="searchIcon" />
              <img src={locationIcon} className={styles.locationIcon} alt="locationIcon" />
              <img src={priceIcon} className={styles.priceIcon} alt="priceIcon" />
            </div>
            <div className={styles.textContainer}>
              <p className={styles.line1}>{propertyDetail.category}</p>
              <p className={styles.line2}>{propertyDetail.zone}</p>
              <p className={styles.line3}>{formattedPrice} {propertyDetail.category === 'Arriendo' ? 'mensual' : null}</p>
            </div>
        
            <div className={styles.imgLineContainer}>
              <img src={greyLineIcon} className={styles.imageLine1} alt="imageLine1" />
              <img src={greyLineIcon} className={styles.imageLine2} alt="imageLine1" />
              <img src={greyLineIcon} className={styles.imageLine3} alt="imageLine1" />
            </div>
          </div>
          <div className={styles.secondaryInfoContainer}>
            <div className={styles.textContainer}>
              <p className={styles.lineParking}>Parqueadero: {propertyDetail.parking}</p>
              <p className={styles.lineStorage}>Bodega: {propertyDetail.storage}</p>
              <p className={styles.lineSwimmingPool}>Piscina: {propertyDetail.swimmingPool}</p>
            </div>
          </div>
        </div>
        <div>
        <div className={styles.descriptionContainer}>
          <div className={styles.textDescriptionContainer}>
        <h3>Descripción:</h3>
          {propertyDetail.description}
          </div>
          </div>
          <div>
          <button className={styles.reserveButton} onClick={handleReservation} disabled={isLoading}>
            Reservar
          </button>
          </div>
          </div>
      </div>
    </>
    )
  }
  
  export default Detail;
///////////////////////////////////////////////////////////////////////////////  

// //import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { getPropertyById, updatePropertyStatus } from '../../redux/actions/index.jsx';
// import { formatPrice } from '../../utils/priceFormat.js';
// import Header from '../../components/Header/Header.jsx';
// import NavBar from '../../components/NavBar/NavBar.jsx';
// import searchIcon from '../../assets/icons/search.png';
// import locationIcon from '../../assets/icons/location.png';
// import priceIcon from '../../assets/icons/price.png';
// import greyLineIcon from '../../assets/icons/greyLine.png';
// //import parkingIcon from '../../assets/icons/parking.png';
// //import storageIcon from '../../assets/icons/storage.png';
// //import swimmingPoolIcon from '../../assets/icons/swimmingPool.png';
// import styles from './Detail.module.css';

// function Detail() {
//   const dispatch = useDispatch();
//   const { id } = useParams();
//   const [isLoading, setIsLoading] = useState(true);
//   const propertyDetail = useSelector((state) => state.propertyById);

//   useEffect(() => {
//     dispatch(getPropertyById(id)).then(() => {
//       setIsLoading(false);
//     });
//   }, [dispatch, id]);

//   const formattedPrice = formatPrice(propertyDetail.price);

//   const handleReservation = async () => {
//     setIsLoading(true); // Opcional: Si quieres mostrar un indicador de carga mientras se realiza la solicitud
//     try {
//       // Realiza una solicitud HTTP PUT al endpoint correspondiente en tu backend
//       await dispatch(updatePropertyStatus(id, false));
//       // Aquí puedes agregar cualquier lógica adicional, como mostrar un mensaje de éxito al usuario
//     } catch (error) {
//       console.error('Error updating property:', error);
//       // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
//     }
//     setIsLoading(false); // Opcional: Si utilizaste setIsLoading(true) anteriormente
//   };

//   return (
//     <>
//       <div className={styles.detailContainer}>
//         <Header />
//         <NavBar />
//         <div className={styles.picturesContainer}>
//           <div className={styles.titleContainer}><h2>{propertyDetail.title}</h2></div>
//           <div className={styles.principalPicContainer}>
//             <img className={styles.imageContainer}
//               src={propertyDetail.imageDefault ? propertyDetail.imageDefault : `Picture not found`}
//               alt={`Picture not found`}
//             />
//           </div>
//           <div className={styles.secondaryPicsContainer}>
//             {/* Aquí se pueden mostrar imágenes secundarias si es necesario */}
//           </div>
//         </div>
//         <div>
//           <div className={styles.principalInfoContainer}>
//             <div className={styles.iconContainer}>
//               <img src={searchIcon} className={styles.searchIcon} alt="searchIcon" />
//               <img src={locationIcon} className={styles.locationIcon} alt="locationIcon" />
//               <img src={priceIcon} className={styles.priceIcon} alt="priceIcon" />
//             </div>
//             <div className={styles.textContainer}>
//               <p className={styles.line1}>{propertyDetail.category}</p>
//               <p className={styles.line2}>{propertyDetail.zone}</p>
//               <p className={styles.line3}>{formattedPrice} {propertyDetail.category === 'Arriendo' ? 'mensual' : null}</p>
//             </div>

//             <div className={styles.imgLineContainer}>
//               <img src={greyLineIcon} className={styles.imageLine1} alt="imageLine1" />
//               <img src={greyLineIcon} className={styles.imageLine2} alt="imageLine1" />
//               <img src={greyLineIcon} className={styles.imageLine3} alt="imageLine1" />
//             </div>
//           </div>
//           <div className={styles.secondaryInfoContainer}>
//             <div className={styles.textContainer}>
//               <p className={styles.lineParking}>Parqueadero: {propertyDetail.parking}</p>
//               <p className={styles.lineStorage}>Bodega: {propertyDetail.storage}</p>
//               <p className={styles.lineSwimmingPool}>Piscina: {propertyDetail.swimmingPool}</p>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className={styles.descriptionContainer}>
//             <div className={styles.textDescriptionContainer}>
//               <h3>Descripción:</h3>
//               {propertyDetail.description}
//             </div>
//           </div>
//           <div>
//             <button className={styles.reserveButton} onClick={handleReservation} disabled={isLoading}>
//               Reservar
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Detail;