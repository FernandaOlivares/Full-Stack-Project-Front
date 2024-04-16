/* eslint-disable react/prop-types */
//import { useState } from 'react';
import SearchBar from '../Filters/SearchBar';
//import TypeBar from './TypeBar/TypeBar';
import {useLocation} from 'react-router-dom';
import styles from './NavBar.module.css';
import { useDispatch, } from 'react-redux';
import { filterType, filterCategory, priceOrder} from '../../redux/actions';





const NavBar = (props)=>{
  //const {setPagina} = props
  //const [filterBar, setFilterBar] = useState(false)
  const location = useLocation()
  const dispatch = useDispatch()
  //const allProperties = useSelector ((state) => state.allProperties); 
 



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
  <option value="all">Tipos</option>
  <option value="casa">casa</option>
  <option value="departamento">departamento</option>
</select>

<select  onChange={handlerCategory} >
  <option value="all">Categorias</option>
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
          <div className={styles.barContai}>
          
                
                {location.pathname === "/home" &&
                    <SearchBar onSearch={(pro) => props.onSearch(pro)}/>
                }
            </div>
            

      
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
