/* eslint-disable react/prop-types */
import { useState } from 'react';
import SearchBar from '../Filters/SearchBar';
//import TypeBar from './TypeBar/TypeBar';
import {useLocation} from 'react-router-dom';
import styles from './NavBar.module.css';
import { useDispatch, } from 'react-redux';
import { filterType, filterCategory, priceOrder,filterCombined} from '../../redux/actions';






const NavBar = ()=>{

  



  //const {setPagina} = props
  //const [filterBar, setFilterBar] = useState(false)
  const location = useLocation()
  const dispatch = useDispatch()
  //const allProperties = useSelector ((state) => state.allProperties); 
 

  
    const [selectedType, setSelectedType] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedPriceOrder, setSelectedPriceOrder] = useState('default');
   const [selectedZone,setSelectedZone]=useState('default')

    const handlerType = (e) => {
      const type = e.target.value.toLowerCase();
      setSelectedType(type);
      dispatch(filterCombined(type, selectedCategory, selectedPriceOrder,selectedZone));
    }
    
    const handlerCategory = (e) => {
      const category = e.target.value.toLowerCase();
      setSelectedCategory(category);
      dispatch(filterCombined(selectedType, category, selectedPriceOrder,selectedZone));
    }
    
    const handlerpriceOrder = (e) => {
      const priceOrder = e.target.value.toLowerCase();
      setSelectedPriceOrder(priceOrder);
      dispatch(filterCombined(selectedType, selectedCategory, priceOrder,selectedZone));
    }

    const handleZone = (e) => {
      const zone = e.target.value;
      setSelectedZone(zone)}

    const onSearch = () => {
    dispatch(filterCombined(selectedType, selectedCategory, selectedPriceOrder,selectedZone));}

    const onSearchEnter = (e) => {
      if (e.keyCode === 13) {
          
          dispatch(filterCombined(selectedType, selectedCategory, selectedPriceOrder,selectedZone))
      }
  }



    const handlerType = (e)=>{
             console.log(e.target.value.toLowerCase());
             dispatch(filterType(e.target.value)) 

    }
    
    const handlerCategory = (e)=>{
             console.log(e.target.value.toLowerCase());
             dispatch(filterCategory(e.target.value))

    }

    const handlerpriceOrder = (e)=>{
        console.log(e.target.value.toLowerCase());
        dispatch(priceOrder(e.target.value))

}

    return (
      <div>

        <div className={styles.navBarContainer}>


        

<select onChange={handlerType} >
  <option value="all">Todos los Tipos</option>
  <option value="casa">casa</option>
  <option value="departamento">departamento</option>
</select>

<select  onChange={handlerCategory} >
  <option value="all">Todas las Categorias</option>
  <option value="venta">venta</option>
  <option value="renta">renta</option>
</select>

<select  onChange={handlerpriceOrder} >
  <option value="default">Ordenar Precio</option>
  <option value="ASC">Ascendente</option>
  <option value="DESC">Descendente</option>
</select>

            
            {/* <div>
              {location.pathname === "/home" && (
                  <label className={styles.burger} htmlFor="burger">
                      <select onChange={onTypes} type="checkbox" id="burger"/>
                      <></>
                      <span></span>
                      <span></span>
                      <span></span>
                  </label>

              )}
          </div> */}

          
          <div>
                <input onChange={handleZone} onKeyDown={onSearchEnter} placeholder="Ingresa nombre de la zona" type="text" />
                <button onClick={onSearch} className={styles.submitBtn}><span>BUSCAR</span></button>
            </div>
         
                {/* {location.pathname === "/home" &&
                    <SearchBar zone={zone} onZoneChange={onZoneChange}/>
                } */}
           

            
        {/* <div>
            {location.pathname === "/home" && (
                <div className={barra}>
                        <TypeBar setPagina={setPagina}/>
                </div>
                )}
        </div> */}

        
        </div>
      </div>
          
  )

}
  export default NavBar;
