//import React from "react";
// import Styles from './TypeBar.module.css'
// import { useDispatch, useSelector } from "react-redux";
// //import { allProperties } from "../../../redux/actions/index";


// const TypeBar = ()=>{
//     // Extraer setPagina de props y types del estado usando useSelector
//     //const setPagina = props
//     const {allProperties} = useSelector((state)=> state)
//     const dispatch = useDispatch()
    
//     // Manejar el cambio de tipo de Property
//     const handlerType = (e)=>{
//         console.log(e.target.value.toLowerCase());
//         // Despachar la acción para filtrar por tipo
//         dispatch(allProperties(e.target.value))
//         // Reiniciar la página a 1 después de seleccionar un tipo
//         //setPagina(1)

//         // Desmarcar el tipo después de 10 segundos
//         const checkbox1 = document.getElementById(e.target.value)
//         setTimeout(() => {
//             if(checkbox1.checked) checkbox1.checked = false
//         }, 10000);
//     };
    
//     return( 
//     <div>   
//         <div action="" className={Styles.container}>
//         <h3>Tipo de Propiedad</h3>
//          {/* Opción para mostrar todos los tipos */}
//         <input
//                         className={Styles.inputBtn}
//                         onChange={handlerType} 
//                         type="radio" 
//                         id='todos' 
//                         name="valueIs-radio"  
//                         value='todos'
//                     />
//                     <label
//                         className={Styles.neonBtn} 
//                         htmlFor='todos'
//                     >
//                         <span className={Styles.span}></span>
//                         <span className={Styles.txt}>TODOS</span>
//                     </label>
//          {/* Renderizar opciones para cada tipo */}           
//         {allProperties?.map(t=>{
//             return (<div key={t.id}>
//                     <input
//                         className={Styles.inputBtn}
//                         onChange={handlerType} 
//                         type="radio" 
//                         id={t.name} 
//                         name="valueIs-radio"  
//                         value={t.name}
//                     />
//                     <label
//                         className={Styles.neonBtn} 
//                         htmlFor={t.name}
//                     >
//                         <span className={Styles.span}></span>
//                         <span className={Styles.txt}>{(t.name).toUpperCase()}</span>
//                     </label>
//                     </div>
//             )
//         })}
//         </div>
        
//     </div>
//     );

// }

// export default TypeBar;