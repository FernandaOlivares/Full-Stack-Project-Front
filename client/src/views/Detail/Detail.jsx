/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPropertyById } from '../../redux/actions/index.jsx'

import Header from '../../components/Header/Header.jsx'
import NavBar from '../../components/NavBar/NavBar.jsx'
import searchIcon from '../../assets/icons/search.png'
import locationIcon from '../../assets/icons/location.png'
import priceIcon from '../../assets/icons/price.png'
import greyLineIcon from '../../assets/icons/greyLine.png'

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


    return (
      <>
        <div className={styles.detailContainer}>
          <Header/>
          <NavBar/>
          <div className={styles.picturesContainer}>
            <h2>{propertyDetail.name}</h2>
            <h3>$ {propertyDetail.id} mensual</h3>
            <div className= {styles.principalPicContainer}></div>
            <div className={styles.secondaryPicsContainer}></div>
          </div>
          <div>
            <div className={styles.principalInfoContainer}>
              <div className={styles.iconContainer}>
                <img src={searchIcon} className={styles.searchIcon} alt="searchIcon" />
                <img src={locationIcon} className={styles.locationIcon} alt="locationIcon" />
                <img src={priceIcon} className={styles.priceIcon} alt="priceIcon" />
              </div>
              <div className={styles.textContainer}>
                <p className={styles.line1}>Arriendo</p>
                <p className={styles.line2}>{propertyDetail.name}</p>
                <p className={styles.line3}>${propertyDetail.id} mensual</p>
              </div>
              <div className={styles.imgLineContainer}>
                <img src={greyLineIcon} className={styles.imageLine1} alt="imageLine1" />
                <img src={greyLineIcon} className={styles.imageLine2} alt="imageLine1" />
                <img src={greyLineIcon} className={styles.imageLine3} alt="imageLine1" />
              </div>
            </div>
            <div className={styles.secondaryInfoContainer}></div>
          </div>
          <div className={styles.descriptionContainer}></div>
        </div>
      </>
    )
  }
  
  export default Detail;
  