/* eslint-disable react/prop-types */
//import { useState } from "react";
import Card from '../Card/Card';
import styles from './Cards.module.css';
// import { Pagination } from "..//../components/Pagination/Pagination.jsx";
// import { useSelector } from "react-redux";
//import { filterDB, orderPrice } from "../../redux/actions";

function Cards({allProperties}) {
  const propertyList = allProperties;

 // const {property} = useSelector((state)=> state)
  //const dispatch = useDispatch()

  // const {pagina, setPagina} = props;
  //   const [porPagina] = useState(8);

// const Cards = (props)=>{
  
//   const propertyList = allProperties;
//     // Utilizar el selector específico
//    const {property} = useSelector((state)=> state)
//    const dispatch = useDispatch()
   
//    const {pagina, setPagina} = props;
//    const [porPagina] = useState(8);
   
//    const [order, setOrder] = useState('');
//    const [Price] = useState('');
//    const pagIni = (pagina - 1) * porPagina;
//    const pagFin = (pagina - 1) * porPagina + porPagina;   
   
   
//let maximo = property.length / porPagina;

    return (
      <>
        <div className={styles.cardsContainer}>
          {propertyList?.map((property)=> (
          <Card key={property.id} property={property}/>
          ))}
        </div>
        

      </>
    )
  }
  
  export default Cards;
  