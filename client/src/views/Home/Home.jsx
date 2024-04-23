import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { getAllProperties } from '../../redux/actions/index.jsx'
import { Pagination } from '../../components/Pagination/Pagination.jsx';
import Header from '../../components/Header/Header.jsx'
import Cards from '../../components/Cards/Cards.jsx'
import NavBar from '../../components/NavBar/NavBar.jsx'
//import appFirebase from '../../credenciales.js';
//import { getAuth,signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Home() {
//  const auth =getAuth(appFirebase)
  const dispatch = useDispatch();
  const allProperties = useSelector((state)=> state.allProperties);
const navigate =useNavigate()
 // console.log(auth);


  const [currentPage, setCurrentPage] = useState(1); // Asegúrate de tener este estado en tu componente Home
  const pageSize = 8; // Por ejemplo, el número total de páginas
  

  useEffect( () => {
    dispatch(getAllProperties(currentPage, pageSize));
  },[dispatch, currentPage, pageSize]);

  const handleSignOut = async () => {
    try {
  //    await signOut(auth);
      navigate('/'); // Redirige al usuario a la página de inicio (LandingPage) después de cerrar sesión
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };


  return (
    <>
      <div>
      <Header></Header>
      <NavBar></NavBar>
      <Cards allProperties={allProperties} currentPage={currentPage} pageSize={pageSize}></Cards>
      <Pagination pagina={currentPage} setPagina={setCurrentPage} maximo={10 /* Número total de páginas */}  />
      
      <div>
         <button onClick={handleSignOut}>LogOut</button>
    </div>
      </div>
    </>
  )
}

export default Home;
