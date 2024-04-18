import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProperties } from '../../redux/actions/index.jsx'
import { Pagination } from '../../components/Pagination/Pagination.jsx';
import Header from '../../components/Header/Header.jsx'
import Cards from '../../components/Cards/Cards.jsx'
import NavBar from '../../components/NavBar/NavBar.jsx'

function Home() {
  const dispatch = useDispatch();
  const allProperties = useSelector((state)=> state.allProperties);
  const [currentPage, setCurrentPage] = useState(1); // Asegúrate de tener este estado en tu componente Home
  const pageSize = 8; // Por ejemplo, el número total de páginas
  
  useEffect( () => {
    dispatch(getAllProperties(currentPage, pageSize));
  },[dispatch, currentPage, pageSize]);

  return (
    <>
      <div>
      <Header></Header>
      <NavBar></NavBar>
      <Cards allProperties={allProperties} currentPage={currentPage} pageSize={pageSize}></Cards>
      <Pagination pagina={currentPage} setPagina={setCurrentPage} maximo={10 /* Número total de páginas */} />
      </div>
    </>
  )
}

export default Home;
